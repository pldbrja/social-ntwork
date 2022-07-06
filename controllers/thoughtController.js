const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
            return res.status(500).json(err);
            });
    },
    getThought(req, res) {
        Thought.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: 'No thought exists at this ID.'})
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
            return res.status(500).json(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then ((thought) => res.json(thought))
        .catch ((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    updateThought(req, res) {
        Thought.findOneandUpdate();
    },
    deleteThought(req, res) {
        Thought.findOneandDelete();
    },
    createReaction(req, res) {
        Thought.findOneandUpdate();
    },
    deleteReaction(req, res) {
        Thought.findOneandUpdate();
    },
};