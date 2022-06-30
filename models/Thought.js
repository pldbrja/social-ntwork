const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {

        },
        createdAt: {

        },
        username: {

        },
        reactions: [{
            type: Schema.Types.ObjectId,
            ref: 'reaction',
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

thoughtSchema.virtual('reaction').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);