import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AreaNLogo } from "@/components/area-n-logo";
import { ContactForm } from "@/components/contact-form";
import { LampContainer } from "@/components/ui/lamp";
import {
  benefits,
  environments,
  faqItems,
  navItems,
  processSteps,
  semAngles,
  services,
  siteConfig,
  whatsappUrl,
  sustainableFeatures,
  landscapingFeatures,
} from "@/lib/site";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      image: `${siteConfig.url}/images/smart-home-living-room.png`,
      founder: {
        "@type": "Person",
        name: siteConfig.founder,
        jobTitle: "Especialista en electricidad y domotica residencial",
      },
      areaServed: [
        "Ciudad Autonoma de Buenos Aires",
        "Gran Buenos Aires",
        "Argentina",
      ],
      priceRange: "$$",
      description:
        "Domotica residencial, iluminacion inteligente, seguridad, climatizacion, escenas y automatizacion electrica para hogares en CABA y GBA.",
      knowsAbout: [
        "Domotica residencial",
        "Iluminacion inteligente",
        "Automatizacion del hogar",
        "Instalaciones electricas",
        "Seguridad residencial",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: "AR",
        availableLanguage: ["es"],
      },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="min-h-screen bg-graphite text-white">
        <Header />
        <Hero />
        <Benefits />
        <Showcase />
        <Services />
        <WhyAreaN />
        <SustainableConstruction />
        <Environments />
        <Landscaping />
        <Process />
        <CampaignBlock />
        <Faq />
        <Contact />
      </main>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir a Area N por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-300 text-[#05221c] shadow-[0_0_34px_rgba(110,231,201,0.35)] transition hover:bg-emerald-200"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </>
  );
}

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#" aria-label="Ir al inicio">
          <AreaNLogo />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden h-11 items-center gap-2 rounded-full border border-emerald-200/30 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:border-emerald-200/70 hover:bg-white/[0.08] sm:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <LampContainer className="min-h-[760px] sm:min-h-[840px]">
        <div className="mx-auto flex max-w-5xl flex-col items-center pt-20 text-center sm:pt-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/25 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100/85">
            <Sparkles className="h-4 w-4 text-cyan-200" aria-hidden="true" />
            Viviendas eficientes e inteligentes
          </div>
          <h1 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            Tu casa eficiente e inteligente, diseñada para vivir mejor.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/72 sm:text-xl">
            Área N diseña, automatiza, reforma y moderniza viviendas para que gastes menos energía, no sufras el clima y vivas con el confort que te merecés.
          </p>
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-emerald-300 px-7 text-sm font-semibold text-[#05221c] shadow-[0_0_34px_rgba(110,231,201,0.3)] transition hover:bg-emerald-200 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Pedir asesoramiento
            </a>
            <a
              href="#soluciones"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-white/16 bg-white/[0.05] px-7 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              Ver soluciones
            </a>
          </div>
          <div className="mt-9 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-3">
            {[
              "Pagá lo justo todos los meses",
              "Aumentá el valor de tu propiedad y mejorá tu calidad de vida",
              "Arquitectura y tecnología premium",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm leading-6 text-white/70"
              >
                <CheckCircle2
                  className="mt-1 h-4 w-4 shrink-0 text-emerald-200"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </LampContainer>
    </section>
  );
}

function Benefits() {
  return (
    <section className="border-y border-white/8 bg-graphite-light py-8">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              key={benefit.title}
              className="rounded-md border border-white/10 bg-white/[0.035] p-5"
            >
              <Icon className="h-5 w-5 text-wood" aria-hidden="true" />
              <h2 className="mt-4 text-base font-semibold text-white">
                {benefit.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/62">
                {benefit.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="bg-offwhite py-20 text-graphite lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-darkgreen shadow-2xl shadow-black/20">
          <Image
            src="/images/smart-home-living-room.png"
            alt="Living moderno con iluminacion inteligente, panel domotico y control desde celular"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-darkgreen-light">
            Hogares con status
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
            Tecnología que eleva tu calidad de vida diaria.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#38544b]">
            Vivir en una casa inteligente no significa pelear con aplicaciones difíciles. Significa que tu hogar se anticipa, regula el clima, cuida los accesos y te hace sentir mejor todos los días.
          </p>
          <div className="mt-7 grid gap-3">
            {[
              "Ambientes que se preparan solos para tu llegada.",
              "Control desde celular sin perder estética ni pulsadores.",
              "Tranquilidad total estés donde estés.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <BadgeCheck
                  className="mt-1 h-5 w-5 shrink-0 text-darkgreen"
                  aria-hidden="true"
                />
                <p className="text-base leading-7 text-[#2d433d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="soluciones" className="bg-graphite py-20 lg:py-28">
      <SectionIntro
        eyebrow="Soluciones Integrales"
        title="Todo lo que tu casa necesita para ser eficiente."
        description="Integramos tecnología, clima, paisajismo y diseño eléctrico bajo un mismo paraguas para garantizar confort y estatus."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="rounded-md border border-white/10 bg-white/[0.035] p-6 transition hover:border-wood/35 hover:bg-white/[0.055]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-wood/10 text-wood">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function WhyAreaN() {
  return (
    <section className="bg-darkgreen py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-wood">
            ¿Por qué Área N?
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Arquitectura inteligente pensada para vos.
          </h2>
        </div>
        <div className="grid gap-5 text-white/72">
          <p className="text-lg leading-8">
            Detrás de Área N se encuentra Ignacio Narea, aportando una visión técnica rigurosa y un perfil de ingeniería orientado a la arquitectura premium. Nuestra propuesta de valor nos distingue de la competencia: no nos limitamos a instalar tecnología aislada; proyectamos e integramos infraestructuras completas que elevan el estándar, la eficiencia y el confort de tu propiedad.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Criterio electrico profesional",
              "Soluciones por etapas",
              "Marcas segun proyecto, no por moda",
            ].map((item) => (
              <div
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm font-medium leading-6 text-white"
              >
                <ShieldCheck
                  className="mb-3 h-5 w-5 text-wood"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Environments() {
  return (
    <section className="bg-offwhite py-20 text-graphite lg:py-28">
      <SectionIntro
        eyebrow="Diseño de Autor"
        title="Impacto real donde más lo valorás."
        description="Priorizamos los espacios donde pasas más tiempo para que notes el confort desde el primer día, sin estrés ni complicaciones."
        dark={false}
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {environments.map((environment) => (
          <article
            key={environment.title}
            className="rounded-md border border-[#d8d2c6] bg-white p-6"
          >
            <h3 className="text-xl font-semibold">{environment.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#526760]">
              {environment.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="bg-graphite py-20 lg:py-28">
      <SectionIntro
        eyebrow="Nuestro Proceso"
        title="Una experiencia sin la ansiedad de la obra."
        description="Un método predecible, limpio y profesional desde el diagnóstico inicial hasta que estás disfrutando de tu casa."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 md:grid-cols-5 lg:px-8">
        {processSteps.map((step) => (
          <article
            key={step.title}
            className="rounded-md border border-white/10 bg-white/[0.035] p-5"
          >
            <h3 className="text-lg font-semibold text-wood">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/62">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CampaignBlock() {
  return (
    <section className="bg-offwhite py-16 text-graphite">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-darkgreen-light">
            Siguiente Nivel
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            Elevá el estándar de tu vivienda.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#38544b]">
            Ya sea en una casa desde cero, una remodelación o una vivienda existente, Área N arma el proyecto a tu medida para maximizar el confort y el ahorro.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {semAngles.map((angle) => {
            const Icon = angle.icon;

            return (
              <a
                key={angle.title}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-md border border-darkgreen/15 bg-white p-4 text-sm font-semibold text-graphite transition hover:border-darkgreen/40 hover:bg-[#fbfff9]"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-darkgreen" />
                  {angle.title}
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-graphite-light py-20 lg:py-28">
      <SectionIntro
        eyebrow="Preguntas frecuentes"
        title="Lo que suele preocupar antes de instalar domotica."
        description="Respuestas pensadas para dueños de casas, departamentos y PH que quieren automatizar sin meterse en una obra innecesaria."
      />
      <div className="mx-auto mt-12 grid max-w-4xl gap-3 px-5 lg:px-8">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-md border border-white/10 bg-white/[0.035] p-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
              {item.question}
              <ArrowRight
                className="h-4 w-4 shrink-0 text-wood transition group-open:rotate-90"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-4 text-sm leading-7 text-white/62">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="bg-graphite py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-wood">
            Contacto
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Pedi una propuesta para tu casa.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/68">
            Contanos que queres controlar y en que zona esta la propiedad.
            Ignacio revisa el caso y Area N te responde con el mejor proximo
            paso.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-white/72">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone className="h-5 w-5 text-wood" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail className="h-5 w-5 text-wood" />
              {siteConfig.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-wood" />
              CABA y GBA. Proyectos grandes en otras zonas de Argentina.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 sm:p-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
      <p
        className={
          dark
            ? "text-sm font-semibold uppercase tracking-[0.18em] text-wood"
            : "text-sm font-semibold uppercase tracking-[0.18em] text-darkgreen-light"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          dark
            ? "mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl"
            : "mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl"
        }
      >
        {title}
      </h2>
      <p
        className={
          dark
            ? "mt-5 text-lg leading-8 text-white/64"
            : "mt-5 text-lg leading-8 text-[#526760]"
        }
      >
        {description}
      </p>
    </div>
  );
}

function SustainableConstruction() {
  return (
    <section id="sustentabilidad" className="bg-graphite py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-wood">
            Construcción Sustentable
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Eficiencia térmica y energética integrada.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
            No se trata solo de automatizar, sino de optimizar el consumo desde el diseño y los materiales. Unimos tecnología y sustentabilidad para hogares realmente eficientes.
          </p>
          <div className="mt-7 grid gap-6">
            {sustainableFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-wood/10 text-wood">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-md shadow-2xl shadow-wood/10">
          <Image
            src="/images/sustainable-home.png"
            alt="Casa moderna con diseño sustentable, paneles solares y eficiencia térmica"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Landscaping() {
  return (
    <section id="paisajismo" className="bg-darkgreen py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md shadow-2xl shadow-black/30 order-2 lg:order-1">
          <Image
            src="/images/landscaping-lighting.png"
            alt="Jardín moderno con iluminación arquitectónica y riego automatizado"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-wood">
            Paisajismo e Iluminación
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Exteriores que cobran vida de noche.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
            Extendemos la experiencia de tu hogar hacia el exterior. Con iluminación escenográfica y control inteligente, tu jardín se convierte en un ambiente más.
          </p>
          <div className="mt-7 grid gap-6">
            {landscapingFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-wood">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
