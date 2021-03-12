//Require dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a workout collection??
const WorkoutSchema = new Schema({
  day: { //current date
    type: Date,
    default: Date.now()
  },
  //For the following exercises:  
  exercises: [ 
      {
        name: {
          type: String,
          trim: true,
        },
        type: {
          type: String,
          trim: true,
        },
        duration: Number,
        weight: {
          type: Number,
          //Using a default for exercises that perhaps do not consist of using any weights, sets, reps, and/or distance.
          default: 0
        },
        sets: {
          type: Number,
          default: 0
        },
        reps: {
          type: Number,
          default: 0
        },
        //For cardio exercise, want to track the distance traveled.
        distance: {
          type: Number,
          default: 0
        }
      }
    ],
    totalDuration: { //For all exercises
      type: Number,
      default: 0,
    },
  });
  
  //need to call workoutSchema and export it
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;