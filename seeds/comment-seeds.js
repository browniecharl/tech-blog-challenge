const { Comment } = require('../models');
const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: 'Sick site bro!!'
    },
    {        
        user_id: 2,
        post_id: 4,
        comment_text: 'Im just here'
    },
    {        
        user_id: 3,
        post_id: 1,
        comment_text: 'Sick site bro...again!!'
    },
    {        
        user_id: 4,
        post_id: 3,
        comment_text: 'Im a crypto scammer',
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;