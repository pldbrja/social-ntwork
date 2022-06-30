const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {

        },
        createdAt: {

        },
        username: {

        },
        reactions: {

        },
    },
    {
        toJSON: {
            virtuals: true,
            },
            id: false,
    },
);