const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "blog",
      required: true, // Ensure the comment is linked to a blog
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true, // Ensure the comment has a creator
    },
  },
  { timestamps: true }
);

const Comment = model("comment", commentSchema);

module.exports = Comment;