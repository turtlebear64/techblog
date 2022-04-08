const { User } = require('../models');

const userData = [{
        username: 'Nicolas1',
        password: 'danciu1'
    },
    {
        username: 'Nicolas2',
        password: 'danciu2'
    },
    {
        username: 'Nicolas3',
        password: 'danciu3'
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;