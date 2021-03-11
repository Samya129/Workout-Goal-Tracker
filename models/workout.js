//Require dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a workout collection??
const WorkoutSchema = new Schema({
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
        duration: Number, //creating a constructor of number to call later for the duration total of the said workout.
        weight: {
          type: Number,
          trim: true,
          //Using a default for exercises that perhaps do not consist of using any weights, sets, reps, and/or distance.
          default: 0
        },
        sets: {
          type: Number,
          trim: true,
          default: 0
        },
        reps: {
          type: Number,
          trim: true,
          default: 0
        },
        //For cardio exercise, want to track the distance traveled.
        distance: {
          type: Number,
          trim: true,
          default: 0
        }
      }
    ],
  });
  
  //need to call workoutSchema somehow to highlight and activate it...
  

