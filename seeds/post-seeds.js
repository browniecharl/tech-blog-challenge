const { Post } = require('../models');

const postData = [
    {
        title: 'Android is better than Iphone',
        post_text: 'this is the first text post ',
        user_id: 1
    },
    {
        title: 'Iphone is better than Android',
        post_text: 'this is the second test post',
        user_id: 2
    },
    {
        title: 'Windows is better than MacOS',
        post_text: 'this is the third test post',
        user_id: 3
    },
    {
        title: 'MacOS is better than Windows', 
        post_text: 'this is the fourth test post',
        user_id: 4
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;