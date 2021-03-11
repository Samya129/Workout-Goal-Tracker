const Workout = require("../models/workout");
const router = require("express").Router();

//display getLastWorkout from api.js within public
router.get("/api/workouts", function (req, res) {
  Workout.find({}) //Find all objects of workout then
    .then((workoutDb) => { //callback 
      res.json(workoutDb);
    })
    .catch((err) => { //throw error function
      res.json(err);
    });
});




module.exports = router
