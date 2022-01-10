const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
     type: String,
     required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function formatDate (date) {
        return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
      }
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    _id: false,
  }
);

module.exports = reactionSchema;
