const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    getThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .populate('reactions')
            .then((thought) => 
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought exists at this ID.'})
                    : res
                        .json(thought)
            )
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then ((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) => 
                !user
                    ? res
                        .status(404)
                        .json({ message: 'Your thought is out there, but with who?' })
                    : res
                        .json('Your thought is out there.')
            )
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) => 
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought exists with this ID.' })
                    : res
                        .json('Your thought has been updated!')
            )
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought exists at this ID.' })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((user) => 
                !user
                    ? res
                        .status(404)
                        .json({ message: 'Who thought does this belong to?' })
                    : res.json({ message: 'This thought has been deleted.' })
            )
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    createReaction(req, res) {
        Thought.findOneAndUpdate(
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
            .catch((err) => {
                res.status(500).json(err);
            });
        
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $addToSet: { reactions: { reactionId: req.params.reactionId} } },
            { runValidators: true, new: true }
        )
            .then ((thought) =>
            !thought
                ? res
                    .status(404)
                    .json({ message: 'Something went wrong! 😱' })
                : res.json(thought)
            )
            .catch((err) => {
                res.status(500).json(err);
            });
    },
};