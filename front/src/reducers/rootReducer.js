const initialState = {
  phones: [
    {
      id: 0,
      name: "iPhone 7",
      manufacturer: "Apple",
      description:
        "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
      color: "black",
      price: 769,
      imageFileName: "IPhone_7.png",
      screen: "4,7 inch IPS",
      processor: "A10 Fusion",
      ram: 2,
    },
    {
      id: 1,
      name: "Galaxy S7",
      manufacturer: "Samsung",
      description:
        "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
      color: "grey",
      price: 209,
      imageFileName: "Galaxy_S7.png",
      screen: "5,1 inch Quad-HD",
      processor: "Snapdragon 820",
      ram: 4,
    },
    {
      id: 2,
      name: "Honor 10",
      manufacturer: "Huawei",
      description:
        "Great phone with an excellent interface. One of the best mid price range phones in the market.",
      color: "blue",
      price: 399,
      imageFileName: "Honor_10.png",
      screen: "5,84 inch Full-HD",
      processor: "Kirin 970",
      ram: 6,
    },
    {
      id: 3,
      name: "P10 Lite",
      manufacturer: "Huawei",
      description:
        "Great phone with an excellent interface. One of the best mid price range phones in the market.",
      color: "white",
      price: 249,
      imageFileName: "P10_Lite.jpg",
      screen: "5,2 inch Full-HD",
      processor: "Kirin 658",
      ram: 4,
    },
  ],
  phone: {
    id: 7,
    name: "Moto G6",
    manufacturer: "Motorola",
    description:
      "Great phone with an excellent interface. One of the best mid price range phones in the market.",
    color: "black",
    price: 199,
    imageFileName: "Moto_G6.png",
    screen: "5,7 inch Full-HD",
    processor: "Snapdragon 450",
    ram: 3,
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
