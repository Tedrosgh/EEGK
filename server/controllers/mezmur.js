import Mezmur from "../models/Mezmur.js";
export const getMezmurs = async (req, res, next) => {
  try {
    const mezmurs = await Mezmur.find(req.query);
    res.status(200).send(mezmurs);
  } catch (err) {
    next(err);
  }
};

export const addMezmur = async (req, res, next) => {
  try {
    const newMezmur = new Mezmur(req.body);
    await newMezmur.save();
    res.status(201).send(newMezmur);
  } catch (err) {
    next(err);
  }
};