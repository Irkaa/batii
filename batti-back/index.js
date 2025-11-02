require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>console.log('MongoDB connected')).catch(console.error);

// Simple product model (src/models/Product.js)
const { Schema, model } = require('mongoose');
const productSchema = new Schema({
  name: String,
  slug: { type: String, index: true },
  description: String,
  price: Number,
  brand: String,
  categories: [String],
  images: [String],
  inStock: Boolean
}, { timestamps: true });
const Product = model('Product', productSchema);

// Public API routes (for MVP)
app.get('/api/products', async (req, res) => {
  const products = await Product.find().limit(100);
  res.json(products);
});
app.get('/api/products/:slug', async (req, res) => {
  const p = await Product.findOne({ slug: req.params.slug });
  if(!p) return res.status(404).send({message:'Not found'});
  res.json(p);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log(`API listening ${PORT}`));
