"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.avanzaofess.com'
      },
      ...pathSegments.map((segment, index) => {
        const itemPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return {
          '@type': 'ListItem',
          'position': index + 2,
          'name': segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          'item': `https://www.avanzaofess.com${itemPath}`
        };
      })
    ]
  };

  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-content">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        {pathSegments.map((segment, index) => {
                            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathSegments.length - 1;
                            const name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

                            return (
                                <li key={href} className={isLast ? 'active' : ''}>
                                    {!isLast ? <Link href={href}>{name}</Link> : name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
};

export default Breadcrumb;
