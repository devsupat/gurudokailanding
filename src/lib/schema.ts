import type { Faq } from '../data/faq';

export const SITE = 'https://gurudokai.supathub.my.id';

/** BreadcrumbList for a page. `trail` is everything after "Beranda",
 *  as [label, absolute path with trailing slash] pairs. */
export function breadcrumbSchema(trail: Array<[string, string]>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
      ...trail.map(([name, path], i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name,
        item: `${SITE}${path}`,
      })),
    ],
  };
}

/** FAQPage built from the same array the page renders, so schema never
 *  claims an answer the visitor cannot read. */
export function faqPageSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
      },
    })),
  };
}
