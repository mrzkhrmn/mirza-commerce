export const data = [
  {
    title: "Basic Cotton T-Shirt",
    price: 19.99,
    category: "Clothing",
    discountPercentage: 10,
    ratings: [5, 4, 3],
    stock: 0,
    description: "Comfortable and breathable cotton t-shirt for daily wear.",
    images: [
      "https://example.com/images/tshirt1.jpg",
      "https://example.com/images/tshirt2.jpg",
    ],
    attributes: {
      sizes: [
        { size: "S", stock: 10 },
        { size: "M", stock: 20 },
        { size: "L", stock: 15 },
        { size: "XL", stock: 5 },
      ],
      colours: ["Black", "White", "Blue"],
    },
  },
  {
    title: "Wireless Mouse",
    price: 29.99,
    category: "Mouse",
    discountPercentage: 15,
    ratings: [4, 5],
    stock: 100,
    description: "Ergonomic wireless mouse with a 2-year battery life.",
    images: [
      "https://example.com/images/mouse1.jpg",
      "https://example.com/images/mouse2.jpg",
    ],
    attributes: {
      sizes: [],
      colours: ["Black", "White"],
    },
  },
  {
    title: "Running Shoes",
    price: 49.99,
    category: "Shoes",
    discountPercentage: 5,
    ratings: [5, 5, 4, 3],
    stock: 0,
    description: "Lightweight and comfortable running shoes for all terrains.",
    images: [
      "https://example.com/images/shoes1.jpg",
      "https://example.com/images/shoes2.jpg",
    ],
    attributes: {
      sizes: [
        { size: "39", stock: 8 },
        { size: "40", stock: 12 },
        { size: "41", stock: 10 },
        { size: "42", stock: 5 },
      ],
      colours: ["Black", "Gray"],
    },
  },
  {
    title: "Leather Wallet",
    price: 24.99,
    category: "Daily",
    discountPercentage: 0,
    ratings: [4, 4, 5],
    stock: 50,
    description: "Durable leather wallet with multiple compartments.",
    images: ["https://example.com/images/wallet1.jpg"],
    attributes: {
      sizes: [],
      colours: ["Brown", "Black"],
    },
  },
];
