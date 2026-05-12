"use server";

import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Indicanos tu nombre."),
  email: z.string().trim().email("Usa un email valido."),
  phone: z.string().trim().min(6, "Indicanos un telefono o WhatsApp."),
  location: z.string().trim().min(2, "Indicanos la zona de la propiedad."),
  interest: z.string().trim().min(2, "Contanos que queres automatizar."),
  message: z.string().trim().min(10, "Agrega un poco mas de detalle."),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
};

const initialErrorState: ContactFormState = {
  status: "error",
  message:
    "No pudimos enviar la consulta. Escribinos por WhatsApp y lo resolvemos.",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const website = String(formData.get("website") ?? "");

  if (website) {
    return {
      status: "success",
      message: "Gracias. Recibimos tu consulta.",
    };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    interest: formData.get("interest"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisá los campos marcados antes de enviar.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Area N <onboarding@resend.dev>";

  if (!resendApiKey) {
    console.info("Area N contact form submission", parsed.data);

    return {
      status: "error",
      message:
        "El formulario esta listo, pero falta configurar RESEND_API_KEY. Mientras tanto escribinos por WhatsApp o a area.n@gmail.com.",
    };
  }

  try {
    const resend = new Resend(resendApiKey);
    const { name, email, phone, location, interest, message } = parsed.data;
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      location: escapeHtml(location),
      interest: escapeHtml(interest),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nueva consulta Area N: ${interest}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Telefono/WhatsApp: ${phone}`,
        `Zona: ${location}`,
        `Interes: ${interest}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#10231f;line-height:1.55">
          <h2>Nueva consulta desde area-n.com</h2>
          <p><strong>Nombre:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Telefono/WhatsApp:</strong> ${safe.phone}</p>
          <p><strong>Zona:</strong> ${safe.location}</p>
          <p><strong>Interes:</strong> ${safe.interest}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${safe.message}</p>
        </div>
      `,
    });

    return {
      status: "success",
      message:
        "Consulta enviada. Area N te va a responder por email o WhatsApp.",
    };
  } catch (error) {
    console.error("Area N contact form error", error);
    return initialErrorState;
  }
}
