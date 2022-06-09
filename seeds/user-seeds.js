const { User } = require('../models');

const userData = [
    {
        username: 'DakPrescott',
        email: 'dprescott@gmail.com',
        password: 'password1'
    },
    {
        username: 'TroyAikman',
        email: 'taikman@gmail.com',
        password: 'password2'
    },
    {
        username: 'TonyRomo',
        email: 'tromo@gmail.com',
        password: 'password3'
    },
    {
        username: 'DrewBledsoe',
        email: 'dbledsoe@gmail.com',
        password: 'password4'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;