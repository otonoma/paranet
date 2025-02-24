import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e8f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a76'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd2c'),
            routes: [
              {
                path: '/docs',
                component: ComponentCreator('/docs', 'c93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deployment',
                component: ComponentCreator('/docs/deployment', '956'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer_tools',
                component: ComponentCreator('/docs/developer_tools', '299'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer_tools/integration_guides',
                component: ComponentCreator('/docs/developer_tools/integration_guides', '448'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer_tools/integration_guides/omniverse',
                component: ComponentCreator('/docs/developer_tools/integration_guides/omniverse', '494'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer_tools/para-cli',
                component: ComponentCreator('/docs/developer_tools/para-cli', 'd68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer_tools/vscode',
                component: ComponentCreator('/docs/developer_tools/vscode', '71b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paracord',
                component: ComponentCreator('/docs/paracord', '8b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paracord/cards',
                component: ComponentCreator('/docs/paracord/cards', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paracord/inbox',
                component: ComponentCreator('/docs/paracord/inbox', '334'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paracord/ledger',
                component: ComponentCreator('/docs/paracord/ledger', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paracord/ora',
                component: ComponentCreator('/docs/paracord/ora', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paracord/panels',
                component: ComponentCreator('/docs/paracord/panels', '2cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paracord/views',
                component: ComponentCreator('/docs/paracord/views', '831'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow',
                component: ComponentCreator('/docs/paraflow', '545'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced',
                component: ComponentCreator('/docs/paraflow/advanced', 'bfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced/bindings',
                component: ComponentCreator('/docs/paraflow/advanced/bindings', 'f14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced/control_flow',
                component: ComponentCreator('/docs/paraflow/advanced/control_flow', 'c28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced/functions-procedures',
                component: ComponentCreator('/docs/paraflow/advanced/functions-procedures', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced/json',
                component: ComponentCreator('/docs/paraflow/advanced/json', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced/parameters',
                component: ComponentCreator('/docs/paraflow/advanced/parameters', '48a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced/runtime_internals',
                component: ComponentCreator('/docs/paraflow/advanced/runtime_internals', 'f46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced/skills',
                component: ComponentCreator('/docs/paraflow/advanced/skills', '22d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/advanced/tables',
                component: ComponentCreator('/docs/paraflow/advanced/tables', '0eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/basics',
                component: ComponentCreator('/docs/paraflow/basics', '8e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/basics/events',
                component: ComponentCreator('/docs/paraflow/basics/events', 'f7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/basics/goals',
                component: ComponentCreator('/docs/paraflow/basics/goals', '5b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/basics/rules',
                component: ComponentCreator('/docs/paraflow/basics/rules', '8c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/basics/tasks',
                component: ComponentCreator('/docs/paraflow/basics/tasks', '547'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/basics/variables',
                component: ComponentCreator('/docs/paraflow/basics/variables', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/examples',
                component: ComponentCreator('/docs/paraflow/examples', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/examples/hello-world',
                component: ComponentCreator('/docs/paraflow/examples/hello-world', '0cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/introduction',
                component: ComponentCreator('/docs/paraflow/introduction', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/services',
                component: ComponentCreator('/docs/paraflow/services', '48c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/services/debugging',
                component: ComponentCreator('/docs/paraflow/services/debugging', '531'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/services/python-agent',
                component: ComponentCreator('/docs/paraflow/services/python-agent', '045'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/services/service-apis',
                component: ComponentCreator('/docs/paraflow/services/service-apis', 'e94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paraflow/services/side-cars',
                component: ComponentCreator('/docs/paraflow/services/side-cars', 'fff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts',
                component: ComponentCreator('/docs/paranet_concepts', 'e1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/actors',
                component: ComponentCreator('/docs/paranet_concepts/actors', '566'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/autonomation',
                component: ComponentCreator('/docs/paranet_concepts/autonomation', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/distributed-intelligence',
                component: ComponentCreator('/docs/paranet_concepts/distributed-intelligence', 'dbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/node-architecture',
                component: ComponentCreator('/docs/paranet_concepts/node-architecture', 'e4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/observational-intelligence',
                component: ComponentCreator('/docs/paranet_concepts/observational-intelligence', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/paraflow',
                component: ComponentCreator('/docs/paranet_concepts/paraflow', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/pdos',
                component: ComponentCreator('/docs/paranet_concepts/pdos', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/persistence',
                component: ComponentCreator('/docs/paranet_concepts/persistence', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/pncp',
                component: ComponentCreator('/docs/paranet_concepts/pncp', '6a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/security',
                component: ComponentCreator('/docs/paranet_concepts/security', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paranet_concepts/skills',
                component: ComponentCreator('/docs/paranet_concepts/skills', 'd18'),
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
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
