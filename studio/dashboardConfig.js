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
                  buildHookId: '609ebedd088e810b77854744',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3pgcvcmi',
                  apiId: 'd37e1c09-2f65-4451-bfeb-6d6f6385dee0'
                },
                {
                  buildHookId: '609ebedd9ac1bb0ac0975f2b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3m345e9t',
                  apiId: '0e0d3be1-168f-4e69-924a-ab9aeff1665b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neilbradley/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3m345e9t.netlify.app', category: 'apps'}
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
