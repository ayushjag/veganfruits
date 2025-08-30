const NewArrival = require("../models/NewArrival");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//create new arrivals

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newArrival = new NewArrival(req.body);

  try {
    const savedArrival = await newArrival.save();
    res.status(200).json(savedArrival);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  UPDATE PRODUCT

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedArrival = await NewArrival.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedArrival);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // --------------------------------------------------------------------------------------------------------------------

//DELETE PRODUCT

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await NewArrival.findByIdAndDelete(req.params.id);
    res.status(200).json("New Arrival has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// // -----------------------------------------------------------------------------------------------------------

//GET PRODUCT

router.get("/find/:id", async (req, res) => {
  try {
    const arrival = await NewArrival.findById(req.params.id);

    res.status(200).json(arrival);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // --------------------------------------------------------------------------------------------------------

//GET ALL PRODUCTS

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let arrivals;

    if (qNew) {
      arrivals = await NewArrival.find().sort({ createdAt: -1 }).limit(2);
    } else if (qCategory) {
      arrivals = await NewArrival.find({ categories: { $in: [qCategory] } });
    } else {
      arrivals = await NewArrival.find();
    }
    res.status(200).json(arrivals);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
