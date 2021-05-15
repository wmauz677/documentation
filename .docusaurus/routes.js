
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/documentation/',
  component: ComponentCreator('/documentation/','d97'),
  exact: true,
},
{
  path: '/documentation/__docusaurus/debug',
  component: ComponentCreator('/documentation/__docusaurus/debug','9a6'),
  exact: true,
},
{
  path: '/documentation/__docusaurus/debug/config',
  component: ComponentCreator('/documentation/__docusaurus/debug/config','9b2'),
  exact: true,
},
{
  path: '/documentation/__docusaurus/debug/content',
  component: ComponentCreator('/documentation/__docusaurus/debug/content','9eb'),
  exact: true,
},
{
  path: '/documentation/__docusaurus/debug/globalData',
  component: ComponentCreator('/documentation/__docusaurus/debug/globalData','4d6'),
  exact: true,
},
{
  path: '/documentation/__docusaurus/debug/metadata',
  component: ComponentCreator('/documentation/__docusaurus/debug/metadata','c5d'),
  exact: true,
},
{
  path: '/documentation/__docusaurus/debug/registry',
  component: ComponentCreator('/documentation/__docusaurus/debug/registry','32c'),
  exact: true,
},
{
  path: '/documentation/__docusaurus/debug/routes',
  component: ComponentCreator('/documentation/__docusaurus/debug/routes','e38'),
  exact: true,
},
{
  path: '/documentation/blog',
  component: ComponentCreator('/documentation/blog','ff9'),
  exact: true,
},
{
  path: '/documentation/blog/hello-world',
  component: ComponentCreator('/documentation/blog/hello-world','da5'),
  exact: true,
},
{
  path: '/documentation/blog/hola',
  component: ComponentCreator('/documentation/blog/hola','807'),
  exact: true,
},
{
  path: '/documentation/blog/tags',
  component: ComponentCreator('/documentation/blog/tags','8e6'),
  exact: true,
},
{
  path: '/documentation/blog/tags/docusaurus',
  component: ComponentCreator('/documentation/blog/tags/docusaurus','9e9'),
  exact: true,
},
{
  path: '/documentation/blog/tags/facebook',
  component: ComponentCreator('/documentation/blog/tags/facebook','da0'),
  exact: true,
},
{
  path: '/documentation/blog/tags/hello',
  component: ComponentCreator('/documentation/blog/tags/hello','583'),
  exact: true,
},
{
  path: '/documentation/blog/tags/hola',
  component: ComponentCreator('/documentation/blog/tags/hola','912'),
  exact: true,
},
{
  path: '/documentation/blog/welcome',
  component: ComponentCreator('/documentation/blog/welcome','507'),
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
