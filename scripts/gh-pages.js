const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'sappy.git',
        user: {
            name: 'pointbar',
            email: 'pntbr@pm.me'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)