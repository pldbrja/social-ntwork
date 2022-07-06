const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then(async (users) => {

            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (student) => {

            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create();
    },
    updateUser(req, res) {
        User.findOneAndUpdate();
    },
    deleteUser(req, res) {
        User.findOneAndDelete();
    },
    addFriend(req, res) {
        User.findOneAndUpdate();
    },
    deleteFriend(req, res) {
        User.findOneandUpdate();
    },
};