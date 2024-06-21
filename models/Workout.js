const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  difficulty: { type: String, required: true },
  imageUrl: { type: String, required: false },
});

module.exports = mongoose.model('Workout', WorkoutSchema);
