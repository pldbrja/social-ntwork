const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find();
    },
    getThought(req, res) {
        Thought.findOne();
    },
    createThought(req, res) {
        Thought.create();
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