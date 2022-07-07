const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    getThought(req, res) {
        Thought.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((thought) => 
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought exists at this ID.'})
                    : res
                        .json(thought)
            )
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then ((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.thoughtId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .catch ((thought) => {
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'Please try again, something has gone wrong with the submission.' })
                    : res
                        .json('Your thoughts are out there.')
        });
    },
    updateThought(req, res) {
        Thought.findOneandUpdate({ _id: req.params.thoughtId });
    },
    deleteThought(req, res) {
        Thought.findOneandRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: '' })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
    },
    createReaction(req, res) {
        Thought.findOneandUpdate(
            { _id: req.params.thoughtId},
            { $addToSet: { reactions: body } },
            { runValidators: true, new: true }
        )
            .then ((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'Something went wrong! 😱' })
                    : res.json(thought)
            )
        
    },
    deleteReaction(req, res) {
        Thought.findOneandUpdate(
            { _id: req.params.thoughtId},
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then ((thought) =>
            !thought
                ? res
                    .status(404)
                    .json({ message: 'Something went wrong! 😱' })
                : res.json(thought)
            )
    },
};