const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user exists at this ID.'})
                    : res.json(user)
            )
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then ((user) => res.json(user))
            .catch ((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.courseId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.courseId })
            .then((user) =>
                    !user
                        ? res
                            .status(404)
                            .json({ message: 'No thought exists at this ID.' })
                        : res
                            .json({ message: "User successfully deleted, we'll miss you!" })
            )        
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $addToSet: { reactions: body } },
            { runValidators: true, new: true }
        )
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $addToSet: { reactions: body } },
            { runValidators: true, new: true }
        )
            .then ((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'Something went wrong! 😱' })
                    : res.json(user)
            )
            .catch((err) => {
                res.status(500).json(err);
            });
    },
};