const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
    },
    getUser(req, res) {
        User.findOne()
    },
    createUser(req, res) {
        User.create()
    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    },
};