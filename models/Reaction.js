const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        rectionId: {

        },
        reactionBody: {

        },
        username: {

        },
        createdAt: {

        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);