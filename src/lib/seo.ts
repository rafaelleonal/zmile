import { site, type Lang } from '../data/site';
import { specialties, specialtyPath, type Faq, type Specialty } from '../data/specialties';
import { director } from '../data/team';
import { routes } from '../i18n/ui';
import type { Post } from './blog';

// Datos estructurados (schema.org / JSON-LD). Son la forma más directa de decirle a
// Google, Bing y a los asistentes de IA qué es la clínica, dónde está y qué ofrece.

const abs = (base: URL | string, path: string) => new URL(path, base).href;

export const clinicId = (base: URL | string) => abs(base, '/#clinic');
export const websiteId = (base: URL | string) => abs(base, '/#website');
export const directorId = (base: URL | string) => abs(base, `/#${director.id}`);

export function clinicSchema(base: URL | string, lang: Lang) {
  return {
    '@type': 'Dentist',
    '@id': clinicId(base),
    name: site.name,
    description:
      lang === 'en'
        ? 'Specialty dental clinic in Roma Sur, Mexico City, with nine dental specialties in one place.'
        : 'Clínica dental de especialidades en la colonia Roma Sur, Ciudad de México, con nueve especialidades dentales en un mismo lugar.',
    url: abs(base, '/'),
    telephone: site.phone.e164,
    email: site.email,
    image: [abs(base, '/og.jpg')],
    logo: abs(base, '/logo.png'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.google.profileUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: site.hours.days,
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    areaServed: site.areaServed.map((name) => ({ '@type': 'Place', name: `${name}, ${site.address.city}` })),
    employee: { '@id': directorId(base) },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: lang === 'en' ? 'appointments' : 'citas',
      telephone: site.phone.e164,
      url: `https://wa.me/${site.phone.raw}`,
      availableLanguage: site.languages.schema,
    },
    knowsLanguage: ['es', 'en'],
    paymentAccepted: site.payment.schema,
    currenciesAccepted: 'MXN',
    knowsAbout: specialties.map((s) => s[lang].name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'en' ? 'Dental specialties' : 'Especialidades dentales',
      itemListElement: specialties.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s[lang].name,
          description: s[lang].short,
          url: abs(base, specialtyPath(s, lang)),
        },
      })),
    },
    sameAs: [site.google.profileUrl, ...site.social.map((s) => s.url)],
  };
}

export function directorSchema(base: URL | string, lang: Lang) {
  return {
    '@type': 'Person',
    '@id': directorId(base),
    name: director.name,
    jobTitle: director[lang].jobTitle,
    worksFor: { '@id': clinicId(base) },
    alumniOf: { '@type': 'CollegeOrUniversity', name: director.university },
    knowsLanguage: ['es', 'en'],
    identifier: {
      '@type': 'PropertyValue',
      name: lang === 'en' ? 'Mexican professional license (cédula profesional)' : 'Cédula profesional',
      value: director.license,
    },
    sameAs: [director.doctoraliaUrl],
  };
}

export function articleSchema(base: URL | string, post: Post) {
  const url = abs(base, `/blog/${post.id}/`);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.data.title,
    description: post.data.description,
    datePublished: post.data.pubDate.toISOString(),
    inLanguage: 'es-MX',
    mainEntityOfPage: url,
    image: post.data.cover ? [abs(base, post.data.cover)] : [abs(base, '/og.jpg')],
    author:
      post.data.author === director.name
        ? { '@id': directorId(base) }
        : { '@type': 'Organization', name: post.data.author },
    publisher: { '@id': clinicId(base) },
  };
}

export function websiteSchema(base: URL | string) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(base),
    url: abs(base, '/'),
    name: site.name,
    inLanguage: ['es-MX', 'en'],
    publisher: { '@id': clinicId(base) },
  };
}

export function webPageSchema(base: URL | string, opts: { url: string; title: string; description: string; lang: Lang }) {
  return {
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    inLanguage: opts.lang === 'en' ? 'en' : 'es-MX',
    isPartOf: { '@id': websiteId(base) },
    about: { '@id': clinicId(base) },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(base: URL | string, items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(base, item.path),
    })),
  };
}

export function specialtySchema(base: URL | string, s: Specialty, lang: Lang) {
  return {
    '@type': 'Service',
    '@id': `${abs(base, specialtyPath(s, lang))}#service`,
    name: s[lang].name,
    alternateName: s[lang].seoName,
    serviceType: s[lang].name,
    description: s[lang].short,
    url: abs(base, specialtyPath(s, lang)),
    provider: { '@id': clinicId(base) },
    areaServed: { '@type': 'City', name: site.address.city },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: abs(base, routes.appointment[lang]),
      servicePhone: { '@type': 'ContactPoint', telephone: site.phone.e164 },
    },
  };
}
