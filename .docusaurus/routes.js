
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/documentation/',
  component: ComponentCreator('/documentation/','d97'),
  exact: true,
},
{
  path: '/documentation/about',
  component: ComponentCreator('/documentation/about','646'),
  exact: true,
},
{
  path: '/documentation/aboutII',
  component: ComponentCreator('/documentation/aboutII','846'),
  exact: true,
},
{
  path: '/documentation/blog',
  component: ComponentCreator('/documentation/blog','ca6'),
  exact: true,
},
{
  path: '/documentation/blog/2021/05/21/Update-0',
  component: ComponentCreator('/documentation/blog/2021/05/21/Update-0','a95'),
  exact: true,
},
{
  path: '/documentation/blog/tags',
  component: ComponentCreator('/documentation/blog/tags','8e6'),
  exact: true,
},
{
  path: '/documentation/blog/tags/introduction',
  component: ComponentCreator('/documentation/blog/tags/introduction','94a'),
  exact: true,
},
{
  path: '/documentation/blog/tags/quarantine',
  component: ComponentCreator('/documentation/blog/tags/quarantine','bf5'),
  exact: true,
},
{
  path: '/documentation/blog/tags/travel',
  component: ComponentCreator('/documentation/blog/tags/travel','52d'),
  exact: true,
},
{
  path: '/documentation/markdown-page',
  component: ComponentCreator('/documentation/markdown-page','d54'),
  exact: true,
},
{
  path: '/documentation/docs',
  component: ComponentCreator('/documentation/docs','623'),
  
  routes: [
{
  path: '/documentation/docs/intro',
  component: ComponentCreator('/documentation/docs/intro','f05'),
  exact: true,
},
{
  path: '/documentation/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/documentation/docs/tutorial-basics/congratulations','028'),
  exact: true,
},
{
  path: '/documentation/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/documentation/docs/tutorial-basics/create-a-blog-post','b01'),
  exact: true,
},
{
  path: '/documentation/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/documentation/docs/tutorial-basics/create-a-document','a5b'),
  exact: true,
},
{
  path: '/documentation/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/documentation/docs/tutorial-basics/create-a-page','323'),
  exact: true,
},
{
  path: '/documentation/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/documentation/docs/tutorial-basics/deploy-your-site','aac'),
  exact: true,
},
{
  path: '/documentation/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/documentation/docs/tutorial-basics/markdown-features','76b'),
  exact: true,
},
{
  path: '/documentation/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/documentation/docs/tutorial-extras/manage-docs-versions','2a6'),
  exact: true,
},
{
  path: '/documentation/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/documentation/docs/tutorial-extras/translate-your-site','6da'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
