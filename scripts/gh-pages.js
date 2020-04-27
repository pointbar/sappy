var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/sappy',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/pntbr/sappy.git',
        user: {
            name: 'pntbr',
            email: 'stephane.langlois@scopyleft.fr'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)