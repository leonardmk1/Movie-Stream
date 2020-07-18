const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
  title: {
    type: String,
  },
  movieId: {
    type: Number,
  },
  userId: {
    type: String,
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
  },
});

let Reviews = mongoose.model("Reviews", ReviewsSchema);

module.exports = Reviews;
