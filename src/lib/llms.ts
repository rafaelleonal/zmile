import { homeFaqs } from '../data/content';
import { site } from '../data/site';
import { specialties, specialtyPath } from '../data/specialties';
import { privacyPath, routes } from '../i18n/ui';

// Genera /llms.txt y /llms-full.txt (formato https://llmstxt.org): un resumen en
// Markdown, sin diseño, pensado para que ChatGPT, Claude, Perplexity, Gemini y
// similares entiendan y citen correctamente a la clínica.

const u = (base: URL, path: string) => new URL(path, base).href;

function facts(base: URL): string[] {
  return [
    `- Nombre: ${site.name}`,
    `- Tipo: clínica dental de especialidades (dentista)`,
    `- Dirección: ${site.address.street}, col. ${site.address.neighborhood}, alcaldía ${site.address.borough}, C.P. ${site.address.postalCode}, ${site.address.city}, México`,
    `- Referencias: a unos pasos del Metro y Metrobús Chilpancingo; cerca de Roma Norte, Condesa, Escandón y Narvarte`,
    `- Coordenadas: ${site.geo.lat}, ${site.geo.lng}`,
    `- Teléfono y WhatsApp: +52 ${site.phone.display} (https://wa.me/${site.phone.raw})`,
    `- Email: ${site.email}`,
    `- Horario: ${site.hours.long.es}`,
    `- Idiomas de atención: ${site.languages.es}`,
    `- Urgencias dentales: se atienden el mismo día`,
    `- Formas de pago: ${site.payment.es}; por ahora no trabaja con seguros dentales`,
    `- Citas: ${u(base, routes.appointment.es)} (el formulario se envía por WhatsApp) o directo por WhatsApp/teléfono`,
    `- Google Maps y reseñas: ${site.google.profileUrl}`,
    ...site.social.map((s) => `- ${s.label}: ${s.url}`),
    `- Idiomas del sitio: español (${u(base, '/')}) e inglés (${u(base, '/en/')})`,
  ];
}

export function llmsTxt(base: URL): string {
  return [
    `# ${site.name}`,
    '',
    `> Clínica dental de especialidades en la colonia Roma Sur, Ciudad de México (CDMX). Reúne nueve especialidades dentales en un mismo lugar —de odontología general y ortodoncia a implantes y rehabilitación oral— y atiende de ${site.hours.long.es}. Las citas se agendan por WhatsApp, teléfono o el formulario del sitio.`,
    '',
    '## Datos clave',
    '',
    ...facts(base),
    '',
    '## Especialidades',
    '',
    ...specialties.map((s) => `- [${s.es.name}](${u(base, specialtyPath(s, 'es'))}): ${s.es.short}`),
    '',
    '## Páginas principales',
    '',
    `- [Inicio](${u(base, routes.home.es)}): presentación de la clínica, especialidades, reseñas de pacientes, ubicación y preguntas frecuentes`,
    `- [Agenda tu cita](${u(base, routes.appointment.es)}): formulario para solicitar cita`,
    `- [Contacto y ubicación](${u(base, routes.contact.es)}): dirección, teléfono, WhatsApp, horario y mapa`,
    `- [Aviso de privacidad](${u(base, privacyPath)}): tratamiento de datos personales y derechos ARCO`,
    `- [Especialidades](${u(base, routes.specialties.es)}): listado de las nueve especialidades`,
    '',
    '## English',
    '',
    `- [Home](${u(base, routes.home.en)}): specialty dental clinic in Roma Sur, Mexico City; open ${site.hours.long.en}`,
    `- [Book an appointment](${u(base, routes.appointment.en)}): appointment request form (sent via WhatsApp)`,
    `- [Contact & location](${u(base, routes.contact.en)}): address, phone, WhatsApp, hours and map`,
    ...specialties.map((s) => `- [${s.en.name}](${u(base, specialtyPath(s, 'en'))}): ${s.en.short}`),
    '',
    '## Optional',
    '',
    `- [Contenido completo](${u(base, '/llms-full.txt')}): todas las especialidades con sus preguntas frecuentes, en un solo archivo`,
    '',
  ].join('\n');
}

export function llmsFullTxt(base: URL): string {
  const out: string[] = [
    `# ${site.name}`,
    '',
    `> Clínica dental de especialidades en la colonia Roma Sur, Ciudad de México (CDMX). Este archivo reúne todo el contenido informativo del sitio ${u(base, '/')}.`,
    '',
    '## Datos clave',
    '',
    ...facts(base),
    '',
    '## Preguntas frecuentes sobre la clínica',
    '',
  ];
  for (const f of homeFaqs('es')) out.push(`### ${f.q}`, '', f.a, '');

  out.push('## Especialidades', '');
  for (const s of specialties) {
    const c = s.es;
    out.push(
      `### ${c.name}`,
      '',
      `Página: ${u(base, specialtyPath(s, 'es'))}`,
      '',
      c.short,
      '',
      c.intro,
      '',
      'Qué atiende esta especialidad:',
      '',
      ...c.treats.map((item) => `- ${item}`),
      '',
    );
    for (const f of c.faqs) out.push(`**${f.q}**`, '', f.a, '');
  }

  out.push('## English summary', '');
  out.push(
    `${site.name} is a specialty dental clinic at ${site.address.display.en} (postal code ${site.address.postalCode}). It is open ${site.hours.long.en}, sees patients in ${site.languages.en} and treats dental emergencies the same day. Payment: ${site.payment.en}; no dental insurance for now. Appointments: WhatsApp or phone +52 ${site.phone.display}, or ${u(base, routes.appointment.en)}.`,
    '',
    'Specialties:',
    '',
    ...specialties.map((s) => `- [${s.en.name}](${u(base, specialtyPath(s, 'en'))}): ${s.en.short}`),
    '',
  );
  for (const f of homeFaqs('en')) out.push(`**${f.q}**`, '', f.a, '');

  return out.join('\n');
}
