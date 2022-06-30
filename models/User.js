const { Schema, Types } = require('mongoose');
const validator = require('../utils/emTest')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [validator, 'We need a real email, try again?'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Real email, please!']
        },
        thoughts: [Thought],
        friends: [User],
    },
    {
        toJSON: {
            virtuals: true,
            },
            id: false,
    },
);