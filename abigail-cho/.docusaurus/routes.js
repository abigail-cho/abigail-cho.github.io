import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f4d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docs-as-code',
    component: ComponentCreator('/blog/tags/docs-as-code', '5ba'),
    exact: true
  },
  {
    path: '/blog/tags/professional',
    component: ComponentCreator('/blog/tags/professional', '11d'),
    exact: true
  },
  {
    path: '/resume',
    component: ComponentCreator('/resume', 'fe3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1be'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a96'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/api',
            component: ComponentCreator('/docs/tags/api', '0eb'),
            exact: true
          },
          {
            path: '/docs/tags/concept',
            component: ComponentCreator('/docs/tags/concept', 'a14'),
            exact: true
          },
          {
            path: '/docs/tags/developer',
            component: ComponentCreator('/docs/tags/developer', 'f4e'),
            exact: true
          },
          {
            path: '/docs/tags/guide',
            component: ComponentCreator('/docs/tags/guide', 'ef0'),
            exact: true
          },
          {
            path: '/docs/tags/reference',
            component: ComponentCreator('/docs/tags/reference', '00b'),
            exact: true
          },
          {
            path: '/docs/tags/task',
            component: ComponentCreator('/docs/tags/task', 'f73'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'bd9'),
            routes: [
              {
                path: '/docs/category/developer-documentation',
                component: ComponentCreator('/docs/category/developer-documentation', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/product-documentation',
                component: ComponentCreator('/docs/category/product-documentation', '5aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/manually-uploading-content',
                component: ComponentCreator('/docs/guides/manually-uploading-content', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/submitting-content-for-approval/',
                component: ComponentCreator('/docs/guides/submitting-content-for-approval/', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/understanding-first-party-data',
                component: ComponentCreator('/docs/guides/understanding-first-party-data', '4a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/technical/authenticating-api-calls',
                component: ComponentCreator('/docs/technical/authenticating-api-calls', '160'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/technical/getMyWeatherAPI/',
                component: ComponentCreator('/docs/technical/getMyWeatherAPI/', '5da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/technical/install-the-cloudflare-enforcer',
                component: ComponentCreator('/docs/technical/install-the-cloudflare-enforcer', 'ba7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
