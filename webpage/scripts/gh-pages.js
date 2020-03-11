const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/',
    {
        branch: 'gh-pages',
        repo: 'git@github.com:HarshitJoshi/BitcoinClub.git',
        user: {
            name: 'Harshit Joshi',
            email: 'hjoshi023@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
);
