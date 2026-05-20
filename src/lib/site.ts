import {
  BellRing,
  Blinds,
  Cable,
  Camera,
  Fan,
  Home,
  Lightbulb,
  LockKeyhole,
  LucideIcon,
  PanelTop,
  Router,
  ShieldCheck,
  Smartphone,
  Sprout,
  Zap,
  Sun,
  Thermometer,
  Leaf,
  Droplets,
} from "lucide-react";

export const siteConfig = {
  name: "Area N",
  domain: "area-n.com",
  url: "https://area-n.com",
  email: "area.n@gmail.com",
  phone: "+54 9 11 2835-1181",
  phoneRaw: "+5491128351181",
  founder: "Ignacio Narea",
  areaServed: "CABA y GBA",
  whatsappMessage:
    "Hola Area N, quiero asesoramiento para automatizar mi casa.",
};

export const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw.replace(
  /\D/g,
  ""
)}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export const navItems = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#sustentabilidad", label: "Sustentabilidad" },
  { href: "#paisajismo", label: "Paisajismo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Iluminación Inteligente",
    description:
      "Programá las luces para ahorrar energía y tener siempre el ambiente perfecto sin tocar una tecla.",
    icon: Lightbulb,
  },
  {
    title: "Seguridad y Tranquilidad",
    description:
      "Cuidá a tu familia y tu casa con sistemas que te avisan al instante estés donde estés.",
    icon: ShieldCheck,
  },
  {
    title: "Climatización Automática",
    description:
      "Olvidate de pasar frío o calor. Tu casa mantiene la temperatura ideal sola, para que vivas mejor y pagues menos luz.",
    icon: Fan,
  },
  {
    title: "Vivienda Integrada",
    description:
      "Convertimos cualquier vivienda en un hogar inteligente, sin necesidad de romper toda la casa.",
    icon: Router,
  },
  {
    title: "Instalación Premium",
    description:
      "Modernizamos tu tablero con estándares arquitectónicos para que todo funcione sin cortes ni riesgos.",
    icon: Cable,
  },
  {
    title: "Reducción de Consumos",
    description:
      "Reducí el gasto de agua y luz automatizando el riego y aprovechando al máximo la iluminación natural.",
    icon: Sprout,
  },
];

export const benefits = [
  {
    title: "Pagá menos todos los meses",
    description:
      "Unimos diseño térmico y automatización para reducir drásticamente el costo de climatización y energía.",
    icon: Zap,
  },
  {
    title: "Sin romper toda tu casa",
    description:
      "Integramos la tecnología sobre la instalación existente siempre que sea posible, minimizando obra y molestias.",
    icon: Home,
  },
  {
    title: "Confort y status",
    description:
      "Disfrutá del placer de vivir en un hogar moderno que responde a tus rutinas y deslumbra a las visitas.",
    icon: Smartphone,
  },
  {
    title: "Tranquilidad total",
    description:
      "Controlá tu casa, revisá cámaras y comprobá que todo está bien, en cualquier momento y lugar.",
    icon: LockKeyhole,
  },
];

export const environments = [
  {
    title: "Living",
    copy: "Cambiá el clima de una reunión o un momento de cine con un solo toque desde tu sillón.",
  },
  {
    title: "Dormitorio",
    copy: "Despertá de forma natural con luces graduales y climatización perfecta para el mejor descanso.",
  },
  {
    title: "Exterior",
    copy: "Disfrutá más tu jardín de noche y reducí el uso de agua con riego que sabe cuándo llueve.",
  },
  {
    title: "Cocina",
    copy: "Iluminación intensa para cocinar y luces cálidas para cenar, cambiando al instante.",
  },
  {
    title: "Oficina",
    copy: "Entornos que favorecen la concentración y reuniones con una iluminación profesional.",
  },
  {
    title: "Accesos",
    copy: "Llegar a casa de noche y que se encienda un pasillo cálido para darte la bienvenida.",
  },
];

export const processSteps = [
  {
    title: "1. Diagnóstico",
    description:
      "Entendemos cómo funciona tu casa y dónde están las fugas de energía y confort, sin prometerte cosas que no necesitas.",
  },
  {
    title: "2. Diseño Eficiente",
    description:
      "Armamos un proyecto a tu medida (nueva o retrofit) enfocado 100% en mejorar tu calidad de vida diaria.",
  },
  {
    title: "3. Instalación Impecable",
    description:
      "Ejecutamos el trabajo con estándares de arquitectura premium, trabajando limpios y cuidando cada detalle de tu propiedad.",
  },
  {
    title: "4. Seguimiento",
    description:
      "Te enseñamos a aprovechar todo el potencial del sistema y te brindamos soporte para que estés siempre tranquilo.",
  },
];

export const faqItems = [
  {
    question: "¿Necesito permisos de obra del municipio?",
    answer:
      "Generalmente no. Hacemos las instalaciones de forma limpia y enfocadas en la eficiencia de lo que ya tienes. Solo si hay una reforma estructural lo evaluamos antes.",
  },
  {
    question: "¿Se puede hacer esto en una casa ya construida?",
    answer:
      "¡Por supuesto! El retrofit tecnológico es nuestra especialidad. Convertimos casas antiguas en hogares modernos e inteligentes minimizando las roturas.",
  },
  {
    question: "¿Es verdad que la automatización baja mis facturas?",
    answer:
      "Sí. Al no gastar energía enfriando o calentando ambientes cuando no estás, y aprovechando mejor el aislamiento y la luz solar, vas a pagar menos cada mes.",
  },
  {
    question: "¿Hay que romper paredes?",
    answer:
      "No necesariamente. Usamos mucha tecnología inalámbrica y diseños pasivos. Nuestro objetivo es que la tecnología se integre de forma invisible.",
  },
  {
    question: "¿Puedo empezar de a poco?",
    answer:
      "Es lo más recomendable. Podes empezar por el living o la climatización general, y luego ir escalando el confort al resto de tu vivienda.",
  },
  {
    question: "¿Es seguro tener la casa en el celular?",
    answer:
      "Es mucho más seguro que un hogar tradicional. Usamos encriptación y sistemas que incluso te avisan si te dejaste una puerta abierta.",
  },
];

export const seoKeywords = [
  "viviendas eficientes",
  "casas inteligentes premium",
  "ahorro energetico arquitectura",
  "domotica sin obra",
  "retrofit argentina",
  "eficiencia termica residencial",
  "smart home status",
  "confort termico",
];

export const semAngles = [
  { icon: Zap, title: "Quiero gastar menos en luz" },
  { icon: Camera, title: "Quiero vivir más tranquilo" },
  { icon: Fan, title: "No quiero pasar más calor" },
  { icon: Smartphone, title: "Quiero una casa moderna" },
];

export const sustainableFeatures = [
  {
    title: "Reducí tu factura",
    description:
      "Sistemas de aislación que mantienen tu casa fresca en verano y cálida en invierno, sin forzar los aires acondicionados.",
    icon: Thermometer,
  },
  {
    title: "Independencia Energética",
    description:
      "Generá tu propia energía limpia con paneles estéticos que elevan el valor de tu propiedad en lugar de arruinar su fachada.",
    icon: Sun,
  },
  {
    title: "Vivir Mejor",
    description:
      "Aprovechá la luz y el clima a tu favor, logrando un ambiente interior mucho más sano y agradable todos los días.",
    icon: Leaf,
  },
];

export const landscapingFeatures = [
  {
    title: "Exteriores de Status",
    description:
      "Realzá la arquitectura de tu vivienda de noche con un diseño lumínico moderno que deslumbra.",
    icon: Lightbulb,
  },
  {
    title: "Ahorro de Agua",
    description:
      "Sistemas inteligentes que riegan tu jardín solamente cuando el clima y la humedad del suelo lo exigen.",
    icon: Droplets,
  },
  {
    title: "Armonía Visual",
    description:
      "Integramos la tecnología en el diseño para que pase desapercibida y todo luzca como una casa de revista.",
    icon: Sprout,
  },
];
