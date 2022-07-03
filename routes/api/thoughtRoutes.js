const router = require('express').Router();

const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/userController');

router.route('/').get(getThoughts).post(createThought);

router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;