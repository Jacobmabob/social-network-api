const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,

    },
    userId: {
      type: Number,
      required: true, 
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return `${this.reactions}`
  });

const Thought = model('course', thoughtSchema);

module.exports = Thought;
