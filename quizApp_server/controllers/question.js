import { createRequire } from "module";
import { createError } from "../error.js";
import Question from "../models/Questions.js";

//create gets a array
export const create = async (req, res, next) => {
  try {
    const q = new Question({ questions: req.body });
    await q.save();
    res.status(200).send(q);
  } catch (error) {
    return next(error);
  }
};

export const deleteAll = async (req, res, next) => {
  try {
    await Question.deleteMany({});
    res.status(200).json("Deleted!");
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const q = await Question.find({});
    res.status(200).send(q);
  } catch (error) {
    return next(error);
  }
};
