import type { IconName } from '../icons';
import type { Lang } from './site';

// Contenido de las 9 especialidades.
// - `name` y `short` son los textos del sitio original (aprobados).
// - `intro`, `treats` y `faqs` son contenido nuevo, de carácter informativo general,
//   para las páginas de especialidad. Conviene que la clínica lo revise y ajuste.

export interface Faq {
  q: string;
  a: string;
}

export interface SpecialtyContent {
  slug: string;
  name: string;
  /** Nombre orientado a búsqueda, usado en <title> y encabezados SEO. */
  seoName: string;
  short: string;
  intro: string;
  treats: string[];
  faqs: Faq[];
}

export interface Specialty {
  id: string;
  icon: IconName;
  es: SpecialtyContent;
  en: SpecialtyContent;
}

export const specialties: Specialty[] = [
  {
    id: 'general',
    icon: 'stethoscope',
    es: {
      slug: 'odontologia-general',
      name: 'Odontología General',
      seoName: 'Odontología general y limpieza dental',
      short:
        'Cuidado preventivo y tratamientos esenciales para mantener tu salud bucal: limpiezas, resinas, diagnóstico integral y atención para toda la familia.',
      intro:
        'La odontología general es el punto de partida de cualquier tratamiento: se revisa tu boca completa, se detectan los problemas a tiempo y se resuelven los padecimientos más comunes. Cuando un caso necesita atención de especialidad, se canaliza con el especialista indicado dentro de la misma clínica.',
      treats: [
        'Valoración y diagnóstico integral',
        'Limpieza dental profesional',
        'Resinas para restaurar dientes con caries',
        'Revisiones periódicas y prevención',
        'Atención dental para toda la familia',
      ],
      faqs: [
        {
          q: '¿Cada cuánto debo ir al dentista?',
          a: 'Como regla general se recomienda una revisión y una limpieza profesional cada seis meses. La frecuencia ideal depende de cada paciente: quienes tienen problemas de encías, caries frecuentes u ortodoncia pueden necesitar visitas más seguidas.',
        },
        {
          q: '¿Qué se revisa en una primera valoración?',
          a: 'Se revisan dientes, encías y mordida para tener un diagnóstico completo. Con base en lo que se encuentra, se te explican las opciones de tratamiento antes de iniciar cualquier procedimiento.',
        },
        {
          q: '¿La limpieza dental daña el esmalte?',
          a: 'No. La limpieza profesional retira placa y sarro sin dañar el esmalte. Si las encías están inflamadas puede haber una ligera sensibilidad temporal, que desaparece en pocos días.',
        },
      ],
    },
    en: {
      slug: 'general-dentistry',
      name: 'General Dentistry',
      seoName: 'General dentistry and teeth cleaning',
      short:
        'Preventive care and essential treatments to maintain your oral health: cleanings, fillings, comprehensive diagnosis and care for the whole family.',
      intro:
        'General dentistry is the starting point of any treatment: your whole mouth is examined, problems are caught early and the most common conditions are treated. When a case needs specialty care, you are referred to the right specialist within the same clinic.',
      treats: [
        'Comprehensive exam and diagnosis',
        'Professional teeth cleaning',
        'Tooth-colored fillings for cavities',
        'Regular check-ups and prevention',
        'Dental care for the whole family',
      ],
      faqs: [
        {
          q: 'How often should I see the dentist?',
          a: 'As a general rule, a check-up and professional cleaning every six months is recommended. The ideal frequency depends on each patient: people with gum problems, frequent cavities or braces may need more frequent visits.',
        },
        {
          q: 'What is checked in a first consultation?',
          a: 'Teeth, gums and bite are examined to reach a complete diagnosis. Based on the findings, your treatment options are explained before any procedure begins.',
        },
        {
          q: 'Does a dental cleaning damage enamel?',
          a: 'No. A professional cleaning removes plaque and tartar without damaging enamel. If your gums are inflamed you may feel slight, temporary sensitivity that goes away within a few days.',
        },
      ],
    },
  },
  {
    id: 'orthodontics',
    icon: 'text-align-center',
    es: {
      slug: 'ortodoncia',
      name: 'Ortodoncia',
      seoName: 'Ortodoncia: brackets y alineadores invisibles',
      short:
        'Corrección de la posición de tus dientes con brackets estéticos o alineadores invisibles, para una sonrisa alineada y una mordida saludable.',
      intro:
        'La ortodoncia corrige la posición de los dientes y la forma en que muerden entre sí. Además de mejorar la apariencia de la sonrisa, una mordida bien alineada facilita la higiene y reduce el desgaste de los dientes. Es un tratamiento para adolescentes y adultos.',
      treats: [
        'Brackets estéticos',
        'Alineadores invisibles',
        'Corrección de dientes apiñados o separados',
        'Corrección de mordida cruzada, abierta o profunda',
        'Retenedores al terminar el tratamiento',
      ],
      faqs: [
        {
          q: '¿Cuánto dura un tratamiento de ortodoncia?',
          a: 'Depende de la complejidad de cada caso. Muchos tratamientos duran entre 12 y 24 meses; el tiempo estimado se define en la valoración, una vez revisada tu mordida.',
        },
        {
          q: '¿Qué es mejor, brackets o alineadores invisibles?',
          a: 'Ambos funcionan. Los alineadores son removibles y muy discretos, pero requieren disciplina porque deben usarse la mayor parte del día. Los brackets suelen indicarse en casos más complejos. La mejor opción se decide en la valoración.',
        },
        {
          q: '¿Hay límite de edad para la ortodoncia?',
          a: 'No. Los dientes pueden moverse a cualquier edad siempre que encías y hueso estén sanos, por eso cada vez más adultos inician tratamiento.',
        },
      ],
    },
    en: {
      slug: 'orthodontics',
      name: 'Orthodontics',
      seoName: 'Orthodontics: braces and clear aligners',
      short:
        'Correction of tooth position with aesthetic braces or clear aligners, for an aligned smile and a healthy bite.',
      intro:
        'Orthodontics corrects the position of your teeth and the way they bite together. Beyond improving how your smile looks, a well-aligned bite makes cleaning easier and reduces tooth wear. It is a treatment for teenagers and adults alike.',
      treats: [
        'Aesthetic braces',
        'Clear aligners',
        'Correction of crowded or gapped teeth',
        'Correction of crossbite, open bite or deep bite',
        'Retainers after treatment',
      ],
      faqs: [
        {
          q: 'How long does orthodontic treatment take?',
          a: 'It depends on the complexity of each case. Many treatments last between 12 and 24 months; the estimated time is defined at your consultation, once your bite has been examined.',
        },
        {
          q: 'Which is better, braces or clear aligners?',
          a: 'Both work. Aligners are removable and very discreet, but they require discipline because they must be worn most of the day. Braces are usually recommended for more complex cases. The best option is decided at your consultation.',
        },
        {
          q: 'Is there an age limit for orthodontics?',
          a: 'No. Teeth can be moved at any age as long as gums and bone are healthy, which is why more and more adults start treatment.',
        },
      ],
    },
  },
  {
    id: 'endodontics',
    icon: 'activity',
    es: {
      slug: 'endodoncia',
      name: 'Endodoncia',
      seoName: 'Endodoncia (tratamiento de conductos)',
      short:
        'Tratamiento de conductos con tecnología de precisión para salvar dientes con caries profundas o infección, eliminando el dolor sin extraer la pieza.',
      intro:
        'La endodoncia, o tratamiento de conductos, permite conservar un diente cuyo nervio está inflamado o infectado. Se retira el tejido dañado del interior del diente, se limpian y se sellan los conductos, y con ello desaparece el dolor sin necesidad de extraer la pieza.',
      treats: [
        'Tratamiento de conductos',
        'Retratamiento de conductos',
        'Atención de dolor dental intenso',
        'Infecciones y abscesos de origen dental',
        'Dientes con caries profunda o fractura',
      ],
      faqs: [
        {
          q: '¿Duele una endodoncia?',
          a: 'El procedimiento se realiza con anestesia local, por lo que no debe doler; de hecho, su objetivo es eliminar el dolor. Es normal sentir una molestia leve los días siguientes, que se controla con las indicaciones del especialista.',
        },
        {
          q: '¿Cuántas citas se necesitan?',
          a: 'La mayoría de las endodoncias se resuelven en una o dos citas, según el diente y el grado de infección.',
        },
        {
          q: '¿Qué sigue después de una endodoncia?',
          a: 'El diente debe restaurarse de forma definitiva, con frecuencia mediante una corona, para protegerlo y que recupere su función.',
        },
      ],
    },
    en: {
      slug: 'endodontics',
      name: 'Endodontics',
      seoName: 'Endodontics (root canal treatment)',
      short:
        'Precision root canal therapy to save teeth with deep decay or infection, relieving pain without extraction.',
      intro:
        'Endodontics, or root canal treatment, makes it possible to keep a tooth whose nerve is inflamed or infected. The damaged tissue inside the tooth is removed, the canals are cleaned and sealed, and the pain goes away without extracting the tooth.',
      treats: [
        'Root canal treatment',
        'Root canal retreatment',
        'Care for severe toothache',
        'Dental infections and abscesses',
        'Teeth with deep decay or fractures',
      ],
      faqs: [
        {
          q: 'Does a root canal hurt?',
          a: 'The procedure is performed under local anesthesia, so it should not hurt; in fact, its purpose is to eliminate pain. Mild discomfort over the following days is normal and is managed with your specialist’s instructions.',
        },
        {
          q: 'How many visits are needed?',
          a: 'Most root canals are completed in one or two visits, depending on the tooth and the degree of infection.',
        },
        {
          q: 'What happens after a root canal?',
          a: 'The tooth needs a permanent restoration, often a crown, to protect it and restore its function.',
        },
      ],
    },
  },
  {
    id: 'implants',
    icon: 'anchor',
    es: {
      slug: 'implantologia',
      name: 'Implantología',
      seoName: 'Implantes dentales',
      short:
        'Sustitución de piezas faltantes con implantes dentales de titanio guiados por computadora, recuperando función y estética de forma permanente.',
      intro:
        'Un implante dental es una raíz artificial de titanio que se integra al hueso y sirve de soporte para una corona, un puente o una prótesis. Es la opción más parecida a un diente natural para reponer piezas perdidas, porque no se apoya en los dientes vecinos.',
      treats: [
        'Implante unitario con corona',
        'Puentes sobre implantes',
        'Prótesis completas sobre implantes',
        'Planeación digital y cirugía guiada por computadora',
        'Valoración del hueso y planeación del caso',
      ],
      faqs: [
        {
          q: '¿Cuánto dura un implante dental?',
          a: 'Con buena higiene y revisiones periódicas, un implante puede durar muchos años, incluso décadas. La corona que va sobre el implante puede necesitar mantenimiento o reemplazo con el tiempo.',
        },
        {
          q: '¿Duele colocarse un implante?',
          a: 'La colocación se realiza con anestesia local. Las molestias posteriores suelen ser moderadas y se controlan con los cuidados y medicamentos que indica el especialista.',
        },
        {
          q: '¿Cuánto tiempo tarda todo el proceso?',
          a: 'Después de colocar el implante, el hueso necesita integrarse a él, lo que suele tomar de tres a seis meses antes de colocar la corona definitiva. El tiempo exacto depende de cada caso.',
        },
      ],
    },
    en: {
      slug: 'dental-implants',
      name: 'Implantology',
      seoName: 'Dental implants',
      short:
        'Replacement of missing teeth with computer-guided titanium dental implants, permanently restoring function and aesthetics.',
      intro:
        'A dental implant is an artificial titanium root that bonds with the bone and supports a crown, bridge or prosthesis. It is the closest option to a natural tooth for replacing missing teeth, because it does not rely on the neighboring teeth.',
      treats: [
        'Single implant with crown',
        'Implant-supported bridges',
        'Full implant-supported prostheses',
        'Digital planning and computer-guided surgery',
        'Bone assessment and case planning',
      ],
      faqs: [
        {
          q: 'How long does a dental implant last?',
          a: 'With good hygiene and regular check-ups, an implant can last many years, even decades. The crown placed on the implant may need maintenance or replacement over time.',
        },
        {
          q: 'Does getting an implant hurt?',
          a: 'Placement is performed under local anesthesia. Discomfort afterwards is usually moderate and is managed with the care and medication your specialist prescribes.',
        },
        {
          q: 'How long does the whole process take?',
          a: 'After the implant is placed, the bone needs to integrate with it, which usually takes three to six months before the final crown is fitted. The exact time depends on each case.',
        },
      ],
    },
  },
  {
    id: 'surgery',
    icon: 'scissors',
    es: {
      slug: 'cirugia-oral',
      name: 'Cirugía Oral',
      seoName: 'Cirugía oral y muelas del juicio',
      short:
        'Procedimientos quirúrgicos como extracción de muelas del juicio y cirugías menores, realizados con técnica mínimamente invasiva y máximo confort.',
      intro:
        'La cirugía oral resuelve los problemas de la boca que requieren un procedimiento quirúrgico, desde la extracción de las muelas del juicio hasta cirugías menores de encía y tejidos blandos. Se realiza con anestesia local y técnicas que favorecen una recuperación rápida.',
      treats: [
        'Extracción de muelas del juicio',
        'Extracciones dentales simples y complejas',
        'Dientes retenidos',
        'Cirugías menores de tejidos blandos',
        'Valoración prequirúrgica con radiografía',
      ],
      faqs: [
        {
          q: '¿Cuándo hay que extraer las muelas del juicio?',
          a: 'Cuando causan dolor o infección, no tienen espacio para salir o pueden dañar al diente vecino. La decisión se toma con una revisión clínica y una radiografía.',
        },
        {
          q: '¿Cómo es la recuperación?',
          a: 'Es normal tener inflamación los primeros dos o tres días. La mayoría de las personas retoma sus actividades habituales en pocos días siguiendo las indicaciones del cirujano.',
        },
        {
          q: '¿Qué cuidados debo tener después de una extracción?',
          a: 'Reposo relativo, frío local, dieta blanda, no fumar, no usar popote y tomar los medicamentos tal como se indicaron. Ante sangrado abundante o dolor que aumenta, contacta a la clínica.',
        },
      ],
    },
    en: {
      slug: 'oral-surgery',
      name: 'Oral Surgery',
      seoName: 'Oral surgery and wisdom teeth removal',
      short:
        'Surgical procedures such as wisdom tooth extraction and minor surgeries, performed with minimally invasive technique and maximum comfort.',
      intro:
        'Oral surgery addresses problems of the mouth that require a surgical procedure, from wisdom tooth removal to minor gum and soft-tissue surgery. It is performed under local anesthesia with techniques that favor a quick recovery.',
      treats: [
        'Wisdom tooth removal',
        'Simple and complex tooth extractions',
        'Impacted teeth',
        'Minor soft-tissue surgery',
        'Pre-surgical assessment with X-rays',
      ],
      faqs: [
        {
          q: 'When should wisdom teeth be removed?',
          a: 'When they cause pain or infection, have no room to erupt, or may damage the neighboring tooth. The decision is made with a clinical exam and an X-ray.',
        },
        {
          q: 'What is recovery like?',
          a: 'Swelling is normal during the first two or three days. Most people return to their usual activities within a few days by following the surgeon’s instructions.',
        },
        {
          q: 'How should I care for the area after an extraction?',
          a: 'Rest, apply cold packs, eat soft foods, do not smoke, avoid drinking through a straw and take your medication exactly as prescribed. If you have heavy bleeding or increasing pain, contact the clinic.',
        },
      ],
    },
  },
  {
    id: 'periodontics',
    icon: 'leaf',
    es: {
      slug: 'periodoncia',
      name: 'Periodoncia',
      seoName: 'Periodoncia (tratamiento de encías)',
      short:
        'Diagnóstico y tratamiento integral de encías y tejidos de soporte para detener el sangrado, la inflamación y la pérdida ósea.',
      intro:
        'La periodoncia se ocupa de las encías y del hueso que sostiene a los dientes. Las enfermedades de las encías suelen avanzar sin dolor, por lo que el sangrado, la inflamación o el mal aliento persistente son señales para revisarse a tiempo.',
      treats: [
        'Tratamiento de gingivitis',
        'Tratamiento de periodontitis',
        'Limpieza profunda (raspado y alisado radicular)',
        'Mantenimiento periodontal',
        'Valoración de encías retraídas',
      ],
      faqs: [
        {
          q: '¿Es normal que me sangren las encías?',
          a: 'No. El sangrado al cepillarte suele ser señal de inflamación (gingivitis). Atendida a tiempo es tratable y reversible.',
        },
        {
          q: '¿Qué diferencia hay entre gingivitis y periodontitis?',
          a: 'La gingivitis es una inflamación de la encía que se puede revertir. La periodontitis es una etapa más avanzada que afecta al hueso que sostiene los dientes y puede provocar movilidad e incluso su pérdida.',
        },
        {
          q: '¿La periodontitis se cura?',
          a: 'Se controla. Con tratamiento y citas de mantenimiento se puede detener su avance y conservar los dientes, aunque el hueso perdido no siempre se recupera.',
        },
      ],
    },
    en: {
      slug: 'periodontics',
      name: 'Periodontics',
      seoName: 'Periodontics (gum treatment)',
      short:
        'Comprehensive diagnosis and treatment of gums and supporting tissues to stop bleeding, inflammation and bone loss.',
      intro:
        'Periodontics focuses on the gums and the bone that supports your teeth. Gum disease often progresses without pain, so bleeding, swelling or persistent bad breath are signs to get checked in time.',
      treats: [
        'Gingivitis treatment',
        'Periodontitis treatment',
        'Deep cleaning (scaling and root planing)',
        'Periodontal maintenance',
        'Assessment of receding gums',
      ],
      faqs: [
        {
          q: 'Is it normal for my gums to bleed?',
          a: 'No. Bleeding when you brush is usually a sign of inflammation (gingivitis). Treated in time, it is manageable and reversible.',
        },
        {
          q: 'What is the difference between gingivitis and periodontitis?',
          a: 'Gingivitis is a reversible inflammation of the gums. Periodontitis is a more advanced stage that affects the bone supporting the teeth and can cause them to loosen or even be lost.',
        },
        {
          q: 'Can periodontitis be cured?',
          a: 'It can be controlled. With treatment and maintenance visits its progress can be stopped and teeth preserved, although lost bone is not always recovered.',
        },
      ],
    },
  },
  {
    id: 'pediatric',
    icon: 'baby',
    es: {
      slug: 'odontopediatria',
      name: 'Odontopediatría',
      seoName: 'Odontopediatría (dentista para niños)',
      short:
        'Atención dental especializada y cariñosa para los más pequeños: revisiones, selladores y prevención en un ambiente amable y sin miedo.',
      intro:
        'La odontopediatría cuida la salud bucal de bebés, niñas, niños y adolescentes. Además de tratar, busca que las primeras visitas al dentista sean una experiencia positiva, para que los hábitos de cuidado se formen desde pequeños.',
      treats: [
        'Primera revisión dental',
        'Revisiones periódicas y prevención',
        'Selladores de fosetas y fisuras',
        'Tratamiento de caries en dientes de leche',
        'Orientación de higiene y hábitos para mamás y papás',
      ],
      faqs: [
        {
          q: '¿A qué edad debe ser la primera visita al dentista?',
          a: 'Se recomienda cuando sale el primer diente o antes de cumplir el primer año. Las visitas tempranas permiten prevenir caries y resolver dudas de higiene y alimentación.',
        },
        {
          q: '¿Por qué tratar las caries en dientes de leche si se van a caer?',
          a: 'Porque los dientes de leche guardan el espacio de los permanentes. Una caries sin tratar puede causar dolor e infección y afectar al diente permanente que viene debajo.',
        },
        {
          q: '¿Cómo preparo a mi hija o hijo para su cita?',
          a: 'Háblale de la visita con naturalidad y en positivo, evita palabras como “dolor” o “inyección” y agenda a una hora en la que esté descansado.',
        },
      ],
    },
    en: {
      slug: 'pediatric-dentistry',
      name: 'Pediatric Dentistry',
      seoName: 'Pediatric dentistry (kids’ dentist)',
      short:
        'Specialized, caring dental attention for the little ones: check-ups, sealants and prevention in a friendly, fear-free environment.',
      intro:
        'Pediatric dentistry looks after the oral health of babies, children and teenagers. Beyond treatment, it aims to make the first visits to the dentist a positive experience, so that healthy habits are built from an early age.',
      treats: [
        'First dental check-up',
        'Regular check-ups and prevention',
        'Pit and fissure sealants',
        'Treatment of cavities in baby teeth',
        'Hygiene and habit guidance for parents',
      ],
      faqs: [
        {
          q: 'At what age should a child first visit the dentist?',
          a: 'It is recommended when the first tooth appears or before the first birthday. Early visits help prevent cavities and answer questions about hygiene and diet.',
        },
        {
          q: 'Why treat cavities in baby teeth if they will fall out?',
          a: 'Because baby teeth hold the space for permanent teeth. An untreated cavity can cause pain and infection and affect the permanent tooth developing underneath.',
        },
        {
          q: 'How do I prepare my child for the appointment?',
          a: 'Talk about the visit naturally and positively, avoid words like “pain” or “shot”, and book a time of day when your child is well rested.',
        },
      ],
    },
  },
  {
    id: 'cosmetic',
    icon: 'sparkles',
    es: {
      slug: 'estetica-dental',
      name: 'Estética Dental',
      seoName: 'Estética dental y diseño de sonrisa',
      short:
        'Diseño de sonrisa, blanqueamiento y carillas de porcelana para transformar la apariencia de tus dientes con resultados naturales.',
      intro:
        'La estética dental mejora el color, la forma y la proporción de los dientes para lograr una sonrisa armónica con tu rostro. Los tratamientos se planean de forma personalizada, buscando resultados naturales y cuidando siempre la salud del diente.',
      treats: [
        'Diseño de sonrisa',
        'Blanqueamiento dental',
        'Carillas de porcelana',
        'Resinas estéticas',
        'Corrección de forma, tamaño y color de los dientes',
      ],
      faqs: [
        {
          q: '¿El blanqueamiento dental daña los dientes?',
          a: 'Realizado y supervisado por un profesional es un procedimiento seguro. Puede provocar sensibilidad temporal, que desaparece a los pocos días.',
        },
        {
          q: '¿Cuánto duran las carillas de porcelana?',
          a: 'Con buenos cuidados suelen durar diez años o más. Ayuda mantener una buena higiene, acudir a revisiones y evitar morder objetos duros.',
        },
        {
          q: '¿Qué es un diseño de sonrisa?',
          a: 'Es una planeación que analiza rostro, encías y dientes para definir la forma, el tamaño y el color ideales de tu sonrisa. Puede combinar varios tratamientos, como blanqueamiento, carillas u ortodoncia.',
        },
      ],
    },
    en: {
      slug: 'cosmetic-dentistry',
      name: 'Cosmetic Dentistry',
      seoName: 'Cosmetic dentistry and smile design',
      short:
        'Smile design, whitening and porcelain veneers to transform the appearance of your teeth with natural-looking results.',
      intro:
        'Cosmetic dentistry improves the color, shape and proportion of your teeth to achieve a smile in harmony with your face. Treatments are planned individually, aiming for natural results while always protecting the health of the tooth.',
      treats: [
        'Smile design',
        'Teeth whitening',
        'Porcelain veneers',
        'Aesthetic composite restorations',
        'Correction of tooth shape, size and color',
      ],
      faqs: [
        {
          q: 'Does teeth whitening damage teeth?',
          a: 'When performed and supervised by a professional it is a safe procedure. It may cause temporary sensitivity that goes away within a few days.',
        },
        {
          q: 'How long do porcelain veneers last?',
          a: 'With good care they usually last ten years or more. Good hygiene, regular check-ups and not biting hard objects all help.',
        },
        {
          q: 'What is a smile design?',
          a: 'It is a plan that analyzes your face, gums and teeth to define the ideal shape, size and color of your smile. It can combine several treatments, such as whitening, veneers or orthodontics.',
        },
      ],
    },
  },
  {
    id: 'rehabilitation',
    icon: 'smile',
    es: {
      slug: 'rehabilitacion-oral',
      name: 'Rehabilitación Oral',
      seoName: 'Rehabilitación oral: coronas, puentes y prótesis',
      short:
        'Restauración completa de la función y estética de tu boca mediante coronas, puentes y prótesis sobre implantes.',
      intro:
        'La rehabilitación oral devuelve la función y la estética a una boca con dientes perdidos, desgastados o muy dañados. Parte de un diagnóstico completo y suele coordinar varias especialidades para que puedas volver a masticar, hablar y sonreír con comodidad.',
      treats: [
        'Coronas dentales',
        'Puentes fijos',
        'Prótesis sobre implantes',
        'Prótesis removibles',
        'Rehabilitación de dientes desgastados o fracturados',
      ],
      faqs: [
        {
          q: '¿Qué es la rehabilitación oral?',
          a: 'Es la especialidad que restaura dientes dañados y repone los que faltan mediante coronas, puentes y prótesis, para recuperar la masticación y la estética de la sonrisa.',
        },
        {
          q: '¿Qué diferencia hay entre una corona y una carilla?',
          a: 'La corona cubre todo el diente y se usa cuando está debilitado o muy restaurado. La carilla cubre solo la cara frontal y tiene un fin principalmente estético.',
        },
        {
          q: '¿Cuánto dura una corona dental?',
          a: 'Con higiene adecuada y revisiones periódicas, una corona suele durar de diez a quince años o más.',
        },
      ],
    },
    en: {
      slug: 'oral-rehabilitation',
      name: 'Oral Rehabilitation',
      seoName: 'Oral rehabilitation: crowns, bridges and prostheses',
      short:
        'Complete restoration of the function and aesthetics of your mouth through crowns, bridges and implant-supported prostheses.',
      intro:
        'Oral rehabilitation restores function and aesthetics to a mouth with missing, worn or badly damaged teeth. It starts from a complete diagnosis and usually coordinates several specialties so you can chew, speak and smile comfortably again.',
      treats: [
        'Dental crowns',
        'Fixed bridges',
        'Implant-supported prostheses',
        'Removable prostheses',
        'Rehabilitation of worn or fractured teeth',
      ],
      faqs: [
        {
          q: 'What is oral rehabilitation?',
          a: 'It is the specialty that restores damaged teeth and replaces missing ones with crowns, bridges and prostheses, to recover chewing function and the aesthetics of your smile.',
        },
        {
          q: 'What is the difference between a crown and a veneer?',
          a: 'A crown covers the whole tooth and is used when it is weakened or heavily restored. A veneer covers only the front surface and is mainly cosmetic.',
        },
        {
          q: 'How long does a dental crown last?',
          a: 'With proper hygiene and regular check-ups, a crown usually lasts ten to fifteen years or more.',
        },
      ],
    },
  },
];

export function specialtyPath(s: Specialty, lang: Lang): string {
  return lang === 'en' ? `/en/specialties/${s.en.slug}/` : `/especialidades/${s.es.slug}/`;
}
