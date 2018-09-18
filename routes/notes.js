'use strict';

const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const Note = require('../models/note');

const express = require('express');

const router = express.Router();

/* ========== GET/READ ALL ITEMS ========== */
router.get('/', (req, res, next) => {
  // console.log('Get All Notes');
  // res.json([
  //   { id: 1, title: 'Temp 1' },
  //   { id: 2, title: 'Temp 2' },
  //   { id: 3, title: 'Temp 3' }
  // ]);
  const searchTerm = req.query.searchTerm;
  if (searchTerm) {
    mongoose
      .connect(
        MONGODB_URI,
        { useNewUrlParser: true }
      )
      .then(() => {
        return Note.find({
          $or: [
            { title: { $regex: searchTerm, $options: 'i' } },
            { content: { $regex: searchTerm, $options: 'i' } }
          ]
        });
      })
      .then(results => {
        res.json(results);
      })
      .then(() => {
        return mongoose.disconnect();
      })
      .catch(err => {
        console.error(`ERROR: ${err.message}`);
        console.error(err);
      });
  } else {
    mongoose
      .connect(
        MONGODB_URI,
        { useNewUrlParser: true }
      )
      .then(() => {
        return Note.find();
      })
      .then(results => {
        res.json(results);
      })
      .then(() => {
        return mongoose.disconnect();
      })
      .catch(err => {
        console.error(`ERROR: ${err.message}`);
        console.error(err);
      });
  }
});

/* ========== GET/READ A SINGLE ITEM ========== */
router.get('/:id', (req, res, next) => {
  // console.log('Get a Note');
  // res.json({ id: 1, title: 'Temp 1' });
  mongoose
    .connect(
      MONGODB_URI,
      { useNewUrlParser: true }
    )
    .then(() => {
      const id = req.params;

      return Note.findById(id);
    })
    .then(results => {
      res.json(results);
    })
    .then(() => {
      return mongoose.disconnect();
    })
    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error(err);
    });
});

/* ========== POST/CREATE AN ITEM ========== */
router.post('/', (req, res, next) => {
  // console.log('Create a Note');
  // res
  //   .location('path/to/new/document')
  //   .status(201)
  //   .json({ id: 2, title: 'Temp 2' });
  mongoose
    .connect(
      MONGODB_URI,
      { useNewUrlParser: true }
    )
    .then(() => {
      let newObj = req.body;

      return Note.create(newObj);
    })
    .then(results => {
      res.json(results);
    })
    .then(() => {
      return mongoose.disconnect();
    })
    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error(err);
    });
});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/:id', (req, res, next) => {
  // console.log('Update a Note');
  // res.json({ id: 1, title: 'Updated Temp 1' });
  const id = req.params.id;
  mongoose
    .connect(
      MONGODB_URI,
      { useNewUrlParser: true }
    )
    .then(() => {
      let newObj = {
        title: 'sample title',
        content: 'sample content'
      };

      return Note.findByIdAndUpdate(id, newObj, { new: true });
    })
    .then(results => {
      console.log(results);
    })
    .then(() => {
      return mongoose.disconnect();
    })
    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error(err);
    });
});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/:id', (req, res, next) => {
  // console.log('Delete a Note');
  // res.status(204).end();
  const id = req.params.id;

  mongoose
    .connect(
      MONGODB_URI,
      { useNewUrlParser: true }
    )
    .then(() => {

      return Note.findByIdAndRemove(id);
    })
    .then(results => {
      res.json(results);
    })
    .then(() => {
      return mongoose.disconnect();
    })
    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error(err);
    });
});

module.exports = router;
