export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '628480cf9fe1992e0573d367',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ftqk2bjp',
                  apiId: 'cc422050-0144-4bae-ace6-05b94a3b3ba9'
                },
                {
                  buildHookId: '628480cfed10f12db3f40d99',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ff6xc67v',
                  apiId: 'a47c8994-f414-4370-8e35-12bd07b21db8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cesarmejiag/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ff6xc67v.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
