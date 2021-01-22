export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600aa64cee78a1eb675393ea',
                  title: 'Sanity Studio',
                  name: 'twelv-studio',
                  apiId: '262a0e3d-be77-4c2e-beb8-97b8f55dda88'
                },
                {
                  buildHookId: '600aa64c8d20bfc46c45d535',
                  title: 'Landing pages Website',
                  name: 'twelv-web-trv2fi6v',
                  apiId: '6fb015dd-4d20-4611-9cf1-77f26b093496'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/obiknows/twelv',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://twelv-web-trv2fi6v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
