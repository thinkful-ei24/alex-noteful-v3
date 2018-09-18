// const mongoose = require('mongoose');
// const { MONGODB_URI } = require('../config');

// const Note = require('../models/note');

// mongoose
//   .connect(
//     MONGODB_URI,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     const searchTerm = 'lorem';

//     return Note.find({
//       $or: [
//         { title: { $regex: searchTerm, $options: 'i' } },
//         { content: { $regex: searchTerm, $options: 'i' } }
//       ]
//     });
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

// mongoose
//   .connect(
//     MONGODB_URI,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     const id = '000000000000000000000003';
//     let filter = {};

//     if (id) {
//       filter.id = { _id: id };
//     }

//     return Note.findById(filter.id, function(err, user) {
//       if (err) {
//         console.log(user);
//       }
//     });
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

// mongoose
//   .connect(
//     MONGODB_URI,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     let newObj = {
//       title: 'sample title',
//       content: 'sample content'
//     };

//     return Note.create(newObj);
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

// mongoose
//   .connect(
//     MONGODB_URI,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     const id = '000000000000000000000004';
//     let newObj = {
//       title: 'sample title',
//       content: 'sample content'
//     };

//     return Note.findByIdAndUpdate(id, newObj);
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

// mongoose
//   .connect(
//     MONGODB_URI,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     const id = '000000000000000000000004';

//     return Note.findByIdAndRemove(id);
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });
