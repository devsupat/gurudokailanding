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

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

export function articleSchema(opts: ArticleSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': opts.url,
    },
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    inLanguage: 'id-ID',
    author: {
      '@type': 'Person',
      '@id': `${SITE}/tentang/#person`,
      name: opts.author || 'Ahmad Saoghi',
      url: `${SITE}/tentang/`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE}/#organization`,
      name: 'GuruDokAI',
      url: `${SITE}/`,
      logo: `${SITE}/og-image.png`,
    },
  };
}
