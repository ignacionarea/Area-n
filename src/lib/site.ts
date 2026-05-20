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
    title: "Iluminacion inteligente",
    description:
      "Escenas para noche, cine, llegada, descanso o seguridad, con control desde app, pulsadores o voz.",
    icon: Lightbulb,
  },
  {
    title: "Seguridad y monitoreo",
    description:
      "Camaras, sensores, alarmas, cerraduras y avisos pensados para casas, PH y departamentos.",
    icon: ShieldCheck,
  },
  {
    title: "Climatizacion y confort",
    description:
      "Automatizacion de aire, calefaccion, ventilacion y rutinas para mejorar consumo y comodidad.",
    icon: Fan,
  },
  {
    title: "Cortinas, portones y accesos",
    description:
      "Control de persianas, cortinas, portones, puertas y accesos segun la instalacion existente.",
    icon: Blinds,
  },
  {
    title: "Tableros e instalacion electrica",
    description:
      "Revision, cableado, protecciones, modulos y tableros con criterio profesional de electricidad.",
    icon: Cable,
  },
  {
    title: "Integraciones a medida",
    description:
      "Paneles, asistentes de voz, sensores, riego, exteriores y sistemas compatibles con cada proyecto.",
    icon: Router,
  },
];

export const benefits = [
  {
    title: "Sin obra innecesaria",
    description:
      "Primero se releva la instalacion y se define la forma mas limpia de automatizar.",
    icon: Home,
  },
  {
    title: "Control simple",
    description:
      "App, pulsadores, voz o escenas programadas. La casa queda facil de usar para todos.",
    icon: Smartphone,
  },
  {
    title: "Mas seguridad",
    description:
      "Rutinas, sensores y avisos que ayudan a cuidar la casa cuando estas adentro o afuera.",
    icon: LockKeyhole,
  },
  {
    title: "Proyecto ampliable",
    description:
      "Se puede empezar por un ambiente y crecer por etapas sin rehacer todo desde cero.",
    icon: PanelTop,
  },
];

export const environments = [
  {
    title: "Living",
    copy: "Escenas de cine, reuniones, lectura y llegada a casa.",
  },
  {
    title: "Dormitorio",
    copy: "Despertar gradual, apagado general y climatizacion nocturna.",
  },
  {
    title: "Exterior",
    copy: "Luces, camaras, portones, sensores y riego programado.",
  },
  {
    title: "Cocina",
    copy: "Iluminacion por zonas, seguridad y rutinas de consumo.",
  },
  {
    title: "Oficina",
    copy: "Luz de trabajo, climatizacion y escenas para videollamadas.",
  },
  {
    title: "Accesos",
    copy: "Aperturas, avisos, cerraduras y luces de bienvenida.",
  },
];

export const processSteps = [
  {
    title: "1. Consulta",
    description:
      "Entendemos que queres automatizar, que problemas queres resolver y en que zona esta la propiedad.",
  },
  {
    title: "2. Relevamiento",
    description:
      "Se revisa instalacion electrica, ambientes, conectividad y posibilidades reales sin prometer de mas.",
  },
  {
    title: "3. Propuesta",
    description:
      "Recibis una solucion por etapas, con prioridades claras y componentes adecuados al presupuesto.",
  },
  {
    title: "4. Instalacion",
    description:
      "Area N instala, configura escenas, prueba funcionamiento y deja el sistema listo para usar.",
  },
  {
    title: "5. Soporte",
    description:
      "Te explicamos como usarlo y dejamos preparado el camino para futuras ampliaciones.",
  },
];

export const faqItems = [
  {
    question: "Necesito permisos de obra del municipio?",
    answer:
      "No para instalaciones domoticas estandar. Si el proyecto requiere una reforma electrica mayor, se evalua antes de avanzar y se define el alcance correcto.",
  },
  {
    question: "Se puede instalar domotica en una casa ya construida?",
    answer:
      "Si. Muchas automatizaciones se integran sobre instalaciones existentes. Primero se revisa el tablero, el cableado y el objetivo del cliente para evitar obra innecesaria.",
  },
  {
    question: "Hay que romper paredes?",
    answer:
      "No necesariamente. Hay soluciones cableadas e inalambricas. La recomendacion depende de la propiedad, la seguridad requerida y el nivel de terminacion esperado.",
  },
  {
    question: "Que pasa si se corta internet?",
    answer:
      "Las funciones basicas pueden seguir operando localmente segun el sistema elegido. Si se corta la luz, como en cualquier instalacion electrica, los equipos dependen de que vuelva la energia.",
  },
  {
    question: "Puedo empezar con pocas cosas y ampliar despues?",
    answer:
      "Si. De hecho suele ser lo mas conveniente: empezar por iluminacion, seguridad o un ambiente critico, y dejar una arquitectura preparada para crecer.",
  },
  {
    question: "Es compatible con Alexa o Google Home?",
    answer:
      "Puede serlo. Area N define la compatibilidad segun el sistema, la red disponible, la privacidad deseada y el presupuesto del proyecto.",
  },
  {
    question: "La domotica consume mas energia?",
    answer:
      "El consumo de los modulos suele ser bajo y muchas automatizaciones ayudan a apagar luces, regular climatizacion y evitar consumos innecesarios.",
  },
  {
    question: "Es seguro conectar la casa a una app?",
    answer:
      "La seguridad depende de la instalacion, la red y la configuracion. Por eso se trabaja con criterio electrico, contrasenas fuertes y separacion de accesos cuando corresponde.",
  },
  {
    question: "Trabajan solo en CABA y GBA?",
    answer:
      "La cobertura principal es CABA y GBA. Para proyectos grandes se puede evaluar trabajo en otras zonas de Argentina.",
  },
  {
    question: "Quien realiza el proyecto?",
    answer:
      "Area N esta liderada por Ignacio Narea, con formacion tecnica, perfil de ingenieria y experiencia electrica aplicada a hogares inteligentes.",
  },
];

export const seoKeywords = [
  "domotica CABA",
  "domotica GBA",
  "automatizacion del hogar",
  "casa inteligente",
  "iluminacion inteligente",
  "electricista domotica",
  "instalacion domotica Buenos Aires",
  "smart home Argentina",
];

export const semAngles = [
  { icon: Zap, title: "Quiero automatizar luces" },
  { icon: Camera, title: "Quiero sumar seguridad" },
  { icon: BellRing, title: "Quiero avisos y sensores" },
  { icon: Sprout, title: "Quiero controlar exterior/riego" },
];

export const sustainableFeatures = [
  {
    title: "Aislación Térmica",
    description:
      "Materiales y diseño orientados a conservar la temperatura ideal, reduciendo el gasto en climatización.",
    icon: Thermometer,
  },
  {
    title: "Generación Limpia",
    description:
      "Integración estética de paneles solares y sistemas de almacenamiento para mayor autonomía energética.",
    icon: Sun,
  },
  {
    title: "Diseño Inteligente",
    description:
      "Estrategias pasivas que aprovechan la luz natural y ventilación cruzada sin perder confort.",
    icon: Leaf,
  },
];

export const landscapingFeatures = [
  {
    title: "Iluminación Escenográfica",
    description:
      "Diseño lumínico que resalta la arquitectura y vegetación para disfrutar el exterior de noche.",
    icon: Lightbulb,
  },
  {
    title: "Riego Automatizado",
    description:
      "Sistemas conectados que optimizan el consumo de agua según el clima y la humedad del suelo.",
    icon: Droplets,
  },
  {
    title: "Paisajismo Moderno",
    description:
      "Plantas y diseño de exteriores que complementan el estilo de la vivienda de forma armoniosa.",
    icon: Sprout,
  },
];
