"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  ContactFormState,
  sendContactMessage,
} from "@/app/actions";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 text-sm font-semibold text-[#05221c] shadow-[0_0_30px_rgba(110,231,201,0.24)] transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      )}
      Enviar consulta
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <form action={formAction} className="grid gap-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="name" error={state.errors?.name?.[0]} />
        <Field
          label="Email"
          name="email"
          type="email"
          error={state.errors?.email?.[0]}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="WhatsApp o telefono"
          name="phone"
          error={state.errors?.phone?.[0]}
        />
        <Field
          label="Zona"
          name="location"
          placeholder="Ej: Palermo, Ramos Mejia, Nordelta"
          error={state.errors?.location?.[0]}
        />
      </div>

      <label className="grid gap-2 text-sm font-medium text-white">
        Que queres automatizar?
        <select
          name="interest"
          required
          className="h-12 rounded-md border border-white/12 bg-white/[0.06] px-4 text-sm text-white outline-none transition focus:border-emerald-200"
          defaultValue=""
        >
          <option value="" disabled className="bg-[#071512]">
            Elegi una opcion
          </option>
          <option className="bg-[#071512]">Iluminacion inteligente</option>
          <option className="bg-[#071512]">Seguridad y camaras</option>
          <option className="bg-[#071512]">Climatizacion</option>
          <option className="bg-[#071512]">Cortinas, portones o accesos</option>
          <option className="bg-[#071512]">Proyecto integral</option>
          <option className="bg-[#071512]">No estoy seguro todavia</option>
        </select>
        {state.errors?.interest?.[0] ? (
          <span className="text-xs text-amber-200">
            {state.errors.interest[0]}
          </span>
        ) : null}
      </label>

      <label className="grid gap-2 text-sm font-medium text-white">
        Mensaje
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Contanos si es casa, departamento o PH; si esta habitada; y que te gustaria controlar."
          className="resize-none rounded-md border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-emerald-200"
        />
        {state.errors?.message?.[0] ? (
          <span className="text-xs text-amber-200">
            {state.errors.message[0]}
          </span>
        ) : null}
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />
        <p className="text-xs leading-5 text-white/50">
          Tambien podes escribir directo por WhatsApp. Respondemos consultas en
          CABA y GBA.
        </p>
      </div>

      <p
        aria-live="polite"
        className={
          state.status === "success"
            ? "text-sm text-emerald-200"
            : "text-sm text-amber-200"
        }
      >
        {state.message}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-white">
      {label}
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="h-12 rounded-md border border-white/12 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-emerald-200"
      />
      {error ? <span className="text-xs text-amber-200">{error}</span> : null}
    </label>
  );
}
