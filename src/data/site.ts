// Fuente única de verdad de los datos de la clínica (NAP: nombre, dirección, teléfono).
// Todo el sitio, el JSON-LD, llms.txt y el formulario leen de aquí: si un dato cambia,
// se cambia solo en este archivo y queda consistente en todas partes.

export const site = {
  name: 'Zmile Dental Clinic',
  legalName: 'Zmile Dental Clinic',
  email: 'zmileclinic@gmail.com',

  phone: {
    e164: '+525528610927',
    raw: '525528610927', // formato wa.me
    display: '55 2861 0927',
  },

  address: {
    street: 'Tepic 139, Consultorio 408',
    neighborhood: 'Roma Sur',
    borough: 'Cuauhtémoc',
    city: 'Ciudad de México',
    region: 'CDMX',
    postalCode: '06760',
    country: 'MX',
    // Texto tal como aparece en el sitio original.
    display: {
      es: 'Tepic 139, Consultorio 408, Roma Sur, Cuauhtémoc, CDMX',
      en: 'Tepic 139, Office 408, Roma Sur, Cuauhtémoc, Mexico City',
    },
  },

  // Coordenadas de la ficha de Google Business Profile de la clínica.
  geo: { lat: 19.406426, lng: -99.1672814 },

  google: {
    // Enlace corto a la ficha (reseñas).
    profileUrl: 'https://maps.app.goo.gl/SSPUKWKMqYLaMq5DA',
    // Mapa embebido centrado en la ficha del negocio.
    embedUrl:
      'https://www.google.com/maps?q=Zmile+Dental+Clinic,+Tepic+139,+Roma+Sur,+Cuauht%C3%A9moc,+CDMX&z=16&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Zmile+Dental+Clinic%2C+Tepic+139%2C+Roma+Sur%2C+CDMX',
  },

  // Lunes a domingo, 9:00 – 20:00.
  hours: {
    opens: '09:00',
    closes: '20:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    display: { es: 'Lun – Dom · 9:00 – 20:00', en: 'Mon – Sun · 9:00 – 20:00' },
    long: {
      es: 'lunes a domingo, de 9:00 a 20:00 horas',
      en: 'Monday to Sunday, 9:00 am to 8:00 pm',
    },
  },

  // Colonias cercanas (para búsquedas locales y respuestas de asistentes de IA).
  areaServed: [
    'Roma Sur',
    'Roma Norte',
    'Condesa',
    'Hipódromo',
    'Hipódromo Condesa',
    'Escandón',
    'Narvarte',
    'Del Valle',
    'Doctores',
    'Cuauhtémoc',
  ],

  stats: { specialists: '+10', specialties: '9' },

  // Decisiones de diseño pendientes de aprobación. Con `false` se vuelve al original.
  design: {
    // Botones de WhatsApp con el verde y el logotipo de WhatsApp (original: negro / contorno).
    whatsappGreen: true,
    // Barra fija inferior en celular con "Agenda tu cita" + "WhatsApp".
    mobileCtaBar: true,
    // Ajustes de espaciado, cuadrículas y áreas táctiles SOLO en celular (clases `compact:`).
    mobileCompact: true,
  },

  // Perfiles oficiales (Instagram, Facebook…). Agregar aquí cuando se confirmen:
  // se publican en el JSON-LD (sameAs) y en llms.txt.
  social: [] as string[],
} as const;

export type Lang = 'es' | 'en';

export const whatsappMessage: Record<Lang, string> = {
  es: 'Hola, me gustaría recibir información y agendar una cita en Zmile Dental Clinic.',
  en: "Hi, I'd like to receive information and book an appointment at Zmile Dental Clinic.",
};

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.phone.raw}?text=${encodeURIComponent(message)}`;
}
