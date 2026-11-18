import { site, type Lang } from './site';
import { specialties, type Faq } from './specialties';

// Reseñas publicadas en Google (textos del sitio original).
export const reviews: { name: string; es: string; en: string }[] = [
  {
    name: 'Julia Guillen',
    es: 'Me recomendaron Zmile Dental Clinic y ahora entiendo por qué hablan tan bien de este lugar. La Dra. Laura es muy profesional, perfeccionista y transmite muchísima confianza. Definitivamente encontré a mi dentista de confianza.',
    en: "I was recommended Zmile Dental Clinic, and now I understand why everyone speaks so highly of this place. Dr. Laura is very professional, a perfectionist, and inspires a great deal of confidence. I've definitely found my dentist.",
  },
  {
    name: 'Cosima Pani',
    es: 'La Dra. Laura es maravillosa, muy gentil y explicó todo de una manera que hizo el proceso muy cómodo. La recomiendo totalmente.',
    en: 'Dra Laura is wonderful—so gentle and explained everything in a way that made the process really comfortable. Highly recommend.',
  },
  {
    name: 'Ramiro Rojas',
    es: 'Un excelente equipo de trabajo, profesionales en el área de Odontología. Lo recomiendo al 100%. Sin dudar es una gran experiencia para la atención de mis dientes.',
    en: "An excellent team of professionals in the field of dentistry. I recommend them 100%. Without a doubt, it's a great experience for my dental care.",
  },
  {
    name: 'Justas Simonavičius',
    es: 'Una fractura dental inesperada nos obligó a buscar atención dental de emergencia y tuvimos suerte de terminar en esta clínica. Trabajan muy profesional, explicando la situación, las opciones de tratamiento y los precios. La calidad fue excelente.',
    en: 'An unexpected tooth fracture forced us to seek emergency dental care and we were lucky ending up in this clinic. They work very professionally, explaining the situation, treatment options and pricing. The quality was excellent.',
  },
];

// Preguntas frecuentes del inicio. Solo incluyen datos que ya están publicados
// en el sitio (dirección, horario, especialidades, medios de contacto).
export function homeFaqs(lang: Lang): Faq[] {
  const names = specialties.map((s) => s[lang].name);
  if (lang === 'en') {
    const list = `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;
    return [
      {
        q: 'Where is Zmile Dental Clinic located?',
        a: `We are at ${site.address.display.en} (postal code ${site.address.postalCode}), steps from the Chilpancingo Metro and Metrobús stations and a few minutes from Roma Norte, Condesa, Escandón and Narvarte.`,
      },
      {
        q: 'What are your opening hours?',
        a: `We are open ${site.hours.long.en}, including weekends. Appointments are subject to availability.`,
      },
      {
        q: 'How do I book an appointment?',
        a: `Fill out the booking form on this site and send it via WhatsApp, message us on WhatsApp at ${site.phone.display}, or call the same number. Our team will confirm the date and time with you.`,
      },
      {
        q: 'Which dental specialties do you offer?',
        a: `Nine specialties in one place: ${list}.`,
      },
      {
        q: 'Do you treat children?',
        a: 'Yes. Our Pediatric Dentistry specialty cares for babies, children and teenagers in a friendly environment, with check-ups, sealants and prevention.',
      },
      {
        q: 'I have a toothache or a dental emergency. What should I do?',
        a: `Message us on WhatsApp or call ${site.phone.display}. We are open every day from 9:00 am to 8:00 pm and will offer you the earliest available appointment.`,
      },
    ];
  }
  const list = `${names.slice(0, -1).join(', ')} y ${names.at(-1)}`;
  return [
    {
      q: '¿Dónde está Zmile Dental Clinic?',
      a: `Estamos en ${site.address.display.es} (C.P. ${site.address.postalCode}), a unos pasos del Metro y Metrobús Chilpancingo y a pocos minutos de la Roma Norte, la Condesa, Escandón y Narvarte.`,
    },
    {
      q: '¿Cuál es el horario de atención?',
      a: `Atendemos de ${site.hours.long.es}, incluidos fines de semana. Las citas están sujetas a disponibilidad.`,
    },
    {
      q: '¿Cómo agendo una cita?',
      a: `Llena el formulario de agenda de este sitio y envíalo por WhatsApp, escríbenos por WhatsApp al ${site.phone.display} o llama a ese mismo número. Nuestro equipo te confirmará fecha y hora.`,
    },
    {
      q: '¿Qué especialidades dentales ofrecen?',
      a: `Nueve especialidades en un mismo lugar: ${list}.`,
    },
    {
      q: '¿Atienden a niñas y niños?',
      a: 'Sí. La especialidad de Odontopediatría atiende a bebés, niñas, niños y adolescentes en un ambiente amable, con revisiones, selladores y prevención.',
    },
    {
      q: 'Tengo dolor de muela o una urgencia dental, ¿qué hago?',
      a: `Escríbenos por WhatsApp o llama al ${site.phone.display}. Abrimos todos los días de 9:00 a 20:00 y te daremos la cita disponible más próxima.`,
    },
  ];
}
