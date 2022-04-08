const { Post } = require('../models');

const postData = [{
        title: 'Hello',
        content: 'What a great day 1',
        user_id: 1

    },
    {
        title: 'Hello 1',
        content: 'What a great day 2',
        user_id: 2
    },
    {
        title: 'Hello 2',
        content: 'What a great day 3',
        user_id: 3
    }
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;