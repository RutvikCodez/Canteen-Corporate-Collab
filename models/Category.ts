import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  image: String,
});

const CategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [ItemSchema],
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
