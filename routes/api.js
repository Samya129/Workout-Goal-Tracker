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

//Creating a exercise:
router.post("/api/workouts", function (req, res) {
  Workout.create(req.body)
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Fourth route from front-end that is needed:
router.get("/api/workout/range", function (req, res) {
  Workout.find({})
  //code for each sort that needs to be done... Indexes?
  // .sort({ date: -1 }) ?? sort by each 
  .then(dbExercise => {
    res.json(dbExercise);
  })
  .catch(err => { //throw error if issue
    res.status(400).json(err);
  });
});

module.exports = router
