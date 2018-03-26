import mongoose, { Schema } from 'mongoose';

// Define product schema
var productSchema = new Schema({
  product_name: String,
  upc: String,
});

// Export Mongoose model
export default mongoose.model('Product', productSchema);
