// Directora de la clínica. Los datos (formación, año, cédula y enfoque) vienen de su
// perfil público de Doctoralia; la redacción es propia y conviene que ella la revise.
// Para sumar especialistas más adelante, agregar entradas con esta misma forma.

export const director = {
  id: 'dra-laura-rojas',
  name: 'Dra. Laura Rojas',
  license: '12669862',
  practiceSince: 2019,
  university: 'Universidad Nacional Autónoma de México',
  doctoraliaUrl: 'https://www.doctoralia.com.mx/perfil/laura-rojas',
  es: {
    eyebrow: 'Quiénes somos',
    role: 'Directora · Odontología estética y restauradora',
    jobTitle: 'Cirujana dentista y directora de Zmile Dental Clinic',
    lead: 'Zmile Dental Clinic es una clínica de especialidades en la Roma Sur dirigida por la Dra. Laura Rojas, cirujana dentista con formación en Odontología Estética y Restauradora por la UNAM.',
    paragraphs: [
      'Desde 2019 atiende consulta privada con una idea sencilla: que te sientas en confianza desde el primer momento. Escucha tus dudas, te explica cada paso del tratamiento y busca conservar al máximo tus dientes naturales, combinando salud, función y estética.',
      'Trabaja junto a un equipo de especialistas en ortodoncia, endodoncia, periodoncia, implantología, odontopediatría y cirugía maxilofacial, para resolver cada caso en un mismo lugar.',
    ],
    facts: [
      { label: 'Formación', value: 'Odontología Estética y Restauradora, UNAM' },
      { label: 'Consulta privada', value: 'Desde 2019' },
      { label: 'Cédula profesional', value: '12669862' },
    ],
    cta: 'Agenda con la Dra. Laura',
    reviews: 'Opiniones en Doctoralia',
    photoAlt: 'Dra. Laura Rojas, directora de Zmile Dental Clinic, con bata de la clínica y un modelo dental',
  },
  en: {
    eyebrow: 'About us',
    role: 'Director · Cosmetic and restorative dentistry',
    jobTitle: 'Dental surgeon and director of Zmile Dental Clinic',
    lead: 'Zmile Dental Clinic is a specialty clinic in Roma Sur led by Dr. Laura Rojas, a dental surgeon trained in Cosmetic and Restorative Dentistry at UNAM, Mexico’s national university.',
    paragraphs: [
      'She has been in private practice since 2019 with one simple idea: that you feel at ease from the first moment. She listens to your questions, explains every step of your treatment and aims to preserve your natural teeth as much as possible, balancing health, function and aesthetics.',
      'She works alongside a team of specialists in orthodontics, endodontics, periodontics, implantology, pediatric dentistry and maxillofacial surgery, so each case can be resolved in one place.',
    ],
    facts: [
      { label: 'Training', value: 'Cosmetic and Restorative Dentistry, UNAM' },
      { label: 'Private practice', value: 'Since 2019' },
      { label: 'Professional license', value: '12669862' },
    ],
    cta: 'Book with Dr. Laura',
    reviews: 'Reviews on Doctoralia',
    photoAlt: 'Dr. Laura Rojas, director of Zmile Dental Clinic, in the clinic’s white coat holding a dental model',
  },
} as const;
