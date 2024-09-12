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
    path: '/',
    component: ComponentCreator('/', 'e73'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '85d'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '011'),
            routes: [
              {
                path: '/developer_tools/',
                component: ComponentCreator('/developer_tools/', '106'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/deployment/',
                component: ComponentCreator('/developer_tools/deployment/', 'f5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/deployment/cloud',
                component: ComponentCreator('/developer_tools/deployment/cloud', 'd4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/deployment/local',
                component: ComponentCreator('/developer_tools/deployment/local', '02f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/paracord/',
                component: ComponentCreator('/developer_tools/paracord/', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/paracord/advanced_tab',
                component: ComponentCreator('/developer_tools/paracord/advanced_tab', '389'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/paracord/cards',
                component: ComponentCreator('/developer_tools/paracord/cards', '19f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/paracord/ledger',
                component: ComponentCreator('/developer_tools/paracord/ledger', '04b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/paracord/ora',
                component: ComponentCreator('/developer_tools/paracord/ora', '19b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/paracord/panels',
                component: ComponentCreator('/developer_tools/paracord/panels', '198'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/paracord/views',
                component: ComponentCreator('/developer_tools/paracord/views', 'fba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/developer_tools/paradocs/',
                component: ComponentCreator('/developer_tools/paradocs/', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting_started/',
                component: ComponentCreator('/getting_started/', '849'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting_started/prerequisites',
                component: ComponentCreator('/getting_started/prerequisites', 'b6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/',
                component: ComponentCreator('/paraflow/', '8d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/bindings',
                component: ComponentCreator('/paraflow/bindings', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/control_flow',
                component: ComponentCreator('/paraflow/control_flow', '012'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/hello-world',
                component: ComponentCreator('/paraflow/hello-world', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/language-basics',
                component: ComponentCreator('/paraflow/language-basics', '524'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/runtime_internals',
                component: ComponentCreator('/paraflow/runtime_internals', '771'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/tables',
                component: ComponentCreator('/paraflow/tables', 'faa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/top-level',
                component: ComponentCreator('/paraflow/top-level', 'b7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/paraflow/variables',
                component: ComponentCreator('/paraflow/variables', '43c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '4b0'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
