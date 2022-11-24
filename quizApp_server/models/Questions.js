import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    questions: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Question", QuestionSchema);
