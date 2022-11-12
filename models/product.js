import mongoose from 'mongoose';

/* Creating a schema for the product model. */
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        isNewProduct: { type: Boolean, default: false },
        category: { type: String, required: true },
        thumbnail: { type: String, required: true },
        image: [
            {
                url: String
            }
        ],
        price: [
            {
                amount: Number,
                method: String
            }
        ],
        options: [
            {
                method: String
            }
        ],
        rating: { type: Number, required: true, default: 0 },
        numReviews: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },
        description: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);