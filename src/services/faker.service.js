import faker from "faker";

const FakerService = {
  /**
   * Generate fake data list of a given size
   * @param {*} size
   * @returns products
   */
  getProducts: (size) => {
    const products = [];

    for (let i = 0; i < size; i++) {
      let product = {
        id: faker.datatype.number(),
        productName: faker.commerce.productName(),
        imageUrl: faker.image.image(),
        currency: "USD",
        price: faker.commerce.price(),
        productDescription: faker.commerce.productDescription(),
      };

      products.push(product);
    }

    return Promise.resolve(products);
  },
};

export default FakerService;
