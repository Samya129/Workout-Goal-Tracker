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

//Update information within exercises array of different objects
router.put("/api/workouts/:id", function (req, res) {
  Workout.findOneAndUpdate(
    req.params.id, //with the params of that specific id
    { $push: { exercises: req.body } }, //pushing everything into the req.body of exercises from schema created
    { new: true }
  )
    .then((dbWorkout) => { //pass the dbWorkout argument and pass the response of it in json.
      res.json(dbWorkout);
    })
    .catch((err) => { //throw error
      res.json(err);
    });
});





module.exports = router
