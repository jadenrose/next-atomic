const plopConfig = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setHelper(
    'capitalize',
    (str) => `${str.substring(0, 1).toLocaleUpperCase()}${str.substring(1)}`
  )

  plop.setHelper('openCurlies', () => '{{')
  plop.setHelper('closeCurlies', () => '}}')

  plop.setGenerator('component', {
    description: 'boilerplate code for new component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'What sort of component is it?',
        choices: [
          {
            name: 'Atom (simple element with few children e.g.: button, image)',
            value: 'atom',
          },
          {
            name: 'Molecule (collection of a few atoms/elements e.g.: card, nav)',
            value: 'molecule',
          },
          {
            name: 'Organism (complex component made up of multiple molecules/elements e.g.: carousel, table)',
            value: 'organism',
          },
          {
            name: 'Template (large collection of multiple organisms/elements e.g.: dashboard, form)',
            value: 'template',
          },
        ],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      // Index
      {
        type: 'add',
        path: 'src/components/{{componentType}}s/{{componentName}}/index.ts',
        templateFile: 'plop-templates/components/index.ts',
      },
      // README
      {
        type: 'add',
        path: 'src/components/{{componentType}}s/{{componentName}}/README.md',
        templateFile: 'plop-templates/components/README.md',
      },
      // Styles
      {
        type: 'add',
        path: 'src/components/{{componentType}}s/{{componentName}}/{{componentName}}.module.scss',
        templateFile: 'plop-templates/components/Component.module.scss',
      },
      // Component
      {
        type: 'add',
        path: 'src/components/{{componentType}}s/{{componentName}}/{{componentName}}.tsx',
        templateFile: 'plop-templates/components/Component.tsx',
      },
      // Types
      {
        type: 'add',
        path: 'src/components/{{componentType}}s/{{componentName}}/{{componentName}}.types.ts',
        templateFile: 'plop-templates/components/Component.types.ts',
      },
    ],
  })

  plop.setGenerator('icon', {
    prompts: [
      {
        type: 'input',
        name: 'iconName',
        message: 'What is the name of the icon?',
      },
    ],
    actions: [
      // Index
      {
        type: 'add',
        path: 'src/components/icons/{{iconName}}/index.ts',
        templateFile: 'plop-templates/icons/index.ts',
      },
      // Component
      {
        type: 'add',
        path: 'src/components/icons/{{iconName}}/{{iconName}}.tsx',
        templateFile: 'plop-templates/icons/Icon.tsx',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'boilerplate code for new Next.js page',
    prompts: [
      {
        type: 'input',
        name: 'pageSlug',
        message: 'What is the page slug?',
      },
    ],
    actions: [
      // Index
      {
        type: 'add',
        path: 'src/app/{{pageSlug}}/page.ts',
        templateFile: 'plop-templates/pages/page.ts',
      },
      // Component
      {
        type: 'add',
        path: `src/app/{{pageSlug}}/{{capitalize pageSlug}}Page.tsx`,
        templateFile: 'plop-templates/pages/PageComponent.tsx',
      },
    ],
  })

  plop.setGenerator('hook', {
    description: 'boilerplate code for new custom React hook',
    prompts: [
      {
        type: 'input',
        name: 'hookName',
        message: 'What is the name of the hook?',
      },
    ],
    actions: [
      // Index
      {
        type: 'add',
        path: 'src/hooks/{{hookName}}/index.ts',
        templateFile: 'plop-templates/hooks/index.ts',
      },
      // README
      {
        type: 'add',
        path: 'src/hooks/{{hookName}}/README.md',
        templateFile: 'plop-templates/hooks/README.md',
      },
      // Hook
      {
        type: 'add',
        path: 'src/hooks/{{hookName}}/{{hookName}}.tsx',
        templateFile: 'plop-templates/hooks/useHook.tsx',
      },
      // Types
      {
        type: 'add',
        path: 'src/hooks/{{hookName}}/{{hookName}}.types.ts',
        templateFile: 'plop-templates/hooks/useHook.types.ts',
      },
    ],
  })
}

export default plopConfig
