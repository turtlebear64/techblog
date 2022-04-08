const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Great!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Great1!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Great2!"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
