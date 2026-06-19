const mongoose = require('mongoose');

const fashionEntrySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    happenedAt: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('fashionEntry', fashionEntrySchema);
