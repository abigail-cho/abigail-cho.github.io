import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/portfolio/blog',
    component: ComponentCreator('/portfolio/blog', 'da3'),
    exact: true
  },
  {
    path: '/portfolio/blog/archive',
    component: ComponentCreator('/portfolio/blog/archive', '5f2'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors',
    component: ComponentCreator('/portfolio/blog/authors', '569'),
    exact: true
  },
  {
    path: '/portfolio/blog/first-blog-post',
    component: ComponentCreator('/portfolio/blog/first-blog-post', '1a5'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags',
    component: ComponentCreator('/portfolio/blog/tags', '921'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/docs-as-code',
    component: ComponentCreator('/portfolio/blog/tags/docs-as-code', 'e05'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/professional',
    component: ComponentCreator('/portfolio/blog/tags/professional', 'c5d'),
    exact: true
  },
  {
    path: '/portfolio/resume',
    component: ComponentCreator('/portfolio/resume', '69f'),
    exact: true
  },
  {
    path: '/portfolio/docs',
    component: ComponentCreator('/portfolio/docs', 'c68'),
    routes: [
      {
        path: '/portfolio/docs',
        component: ComponentCreator('/portfolio/docs', '4d6'),
        routes: [
          {
            path: '/portfolio/docs/tags',
            component: ComponentCreator('/portfolio/docs/tags', '3b8'),
            exact: true
          },
          {
            path: '/portfolio/docs/tags/api',
            component: ComponentCreator('/portfolio/docs/tags/api', '960'),
            exact: true
          },
          {
            path: '/portfolio/docs/tags/concept',
            component: ComponentCreator('/portfolio/docs/tags/concept', '36a'),
            exact: true
          },
          {
            path: '/portfolio/docs/tags/developer',
            component: ComponentCreator('/portfolio/docs/tags/developer', '898'),
            exact: true
          },
          {
            path: '/portfolio/docs/tags/guide',
            component: ComponentCreator('/portfolio/docs/tags/guide', '57f'),
            exact: true
          },
          {
            path: '/portfolio/docs/tags/reference',
            component: ComponentCreator('/portfolio/docs/tags/reference', 'f72'),
            exact: true
          },
          {
            path: '/portfolio/docs/tags/task',
            component: ComponentCreator('/portfolio/docs/tags/task', '726'),
            exact: true
          },
          {
            path: '/portfolio/docs',
            component: ComponentCreator('/portfolio/docs', '94f'),
            routes: [
              {
                path: '/portfolio/docs/category/developer-documentation',
                component: ComponentCreator('/portfolio/docs/category/developer-documentation', '091'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/category/product-documentation',
                component: ComponentCreator('/portfolio/docs/category/product-documentation', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/guides/manually-uploading-content',
                component: ComponentCreator('/portfolio/docs/guides/manually-uploading-content', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/guides/submitting-content-for-approval',
                component: ComponentCreator('/portfolio/docs/guides/submitting-content-for-approval', '506'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/guides/understanding-first-party-data',
                component: ComponentCreator('/portfolio/docs/guides/understanding-first-party-data', '635'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/intro',
                component: ComponentCreator('/portfolio/docs/intro', 'dcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/technical/authenticating-api-calls',
                component: ComponentCreator('/portfolio/docs/technical/authenticating-api-calls', '3a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/technical/getMyWeatherAPI',
                component: ComponentCreator('/portfolio/docs/technical/getMyWeatherAPI', '3ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/technical/install-the-cloudflare-enforcer',
                component: ComponentCreator('/portfolio/docs/technical/install-the-cloudflare-enforcer', '513'),
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
    path: '/portfolio/',
    component: ComponentCreator('/portfolio/', '467'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
