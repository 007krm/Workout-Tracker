const router = require("express").Router();
const { Workout } = require("../models");

//api/workouts, last exercises
router.get("/api/workouts", async (req, res) => {
  try {
    const info = await Workout.find();
    res.json(info);
  } catch (error) {
    console.log(error);
  }
});

//api/workouts by id, adding exercises to the list of workouts
router.put("/api/workouts/:id", async (req, res) => {
  try {
    const info = await Workout.updateMany(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    );
    res.json(info);
  } catch (error) {
    console.log(error);
  }
});

//api/workouts, adds new exercises to database
router.post("/api/workouts", async (req, res) => {
  Workout.create(req.body)
    .then((info) => {
      res.json(info);
    })
    .catch((error) => {
      console.log(error);
    });
});

//api/workouts by range
router.get("/api/workouts/range", async (req, res) => {
  try {
    const info = await Workout.find();
    res.json(info);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;