'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const nodes = [
      {
        id: 'f78a3ff8-e6b3-4c61-a155-ce3013e99e84',
        title: 'Multifunctional Bandana Freedom Basic',
        description: `This style today and tomorrow something different. This ultralight tube scarf is a true multi-talent. It can be worn multifunctionally as headband, neckerchief, bandana or headscarf – or simply as a breast pocket handkerchief. One item, lots of styles.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 10.95,
        amount: 99,
        categoryId: 'e919f1e5-b67f-460e-b3e0-3b1570b1f510',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '39b39aab-8659-440f-bf8f-ece09ec01fd7',
        title: 'Sidney Shetland Mix Flat Cap',
        description: `Sleek shape with a cosy touch. The head-hugging design of this five-part flat cap from Mayser is skilfully emphasised by the plain-coloured inserts on the sides and the peak that comes in the same fabric. All around, new wool in a heathered check forms the cosy basis and provides a pleasant amount of warmth. On the inside this flat cap has plenty of cotton for feel-good wearing comfort in handmade quality. Made in the EU, metallic brand pin at the side of the back.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 83.95,
        amount: 98,
        categoryId: 'e919f1e5-b67f-460e-b3e0-3b1570b1f510',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '2383c760-d109-43e7-a941-55b8e8a4608a',
        title: 'Samu Soft Pork Pie Wool Hat',
        description: `Particularly soft. This high-quality pork pie hat from the prestigious Mayser brand is made of 100% fine wool and impresses with its high level of wearing comfort. Thanks to the skin-friendly properties of the material, this elegant felt hat feels particularly comfortable atop the head. This handmade hat adds a visual highlight to outfits with its multicoloured fabric trim. Made in the EU.`,
        image: 'https://img.hatshopping.com/Samu-Soft-Pork-Pie-Wool-Hat-by-Mayser.57843_pf175.jpg',
        price: 103.95,
        amount: 4,
        categoryId: '65b906f9-fe32-49eb-b703-a6c156151cbc',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '72ecb668-921b-4371-8dca-0717df8be642',
        title: 'Ellendale Player Wool Felt Hat',
        description: `With oomph. This luxurious felt hat from Stetson is bound to win you over with its material of 100% wool and fashionable accent of a silver star on the side. Thanks to its water-repellent finish, this elegant hat with fabric trim band is also ideal for wearing in rainy weather. As this stylish outdoor hat has a crushable finish, it is also ideal for taking with you on trips.`,
        image: 'https://img.hatshopping.com/desktop/Ellendale-Player-Wool-Felt-Hat-by-Stetson-99-00-euro-.56552_tf4.jpg',
        price: 99.00,
        amount: 3,
        categoryId: 'f8d3de66-4f80-4f92-8c27-b02a5c886085',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '2dd3eceb-3e5f-4949-be38-12e2770f830e',
        title: 'Westcreek Lambswool Cap',
        description: `This style today and tomorrow something different. This ultralight tube scarf is a true multi-talent. It can be worn multifunctionally as headband, neckerchief, bandana or headscarf – or simply as a breast pocket handkerchief. One item, lots of styles.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 49,
        amount: 2,
        categoryId: '94a34efa-c3a7-4f5e-99b9-8ce502825b50',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 'e919f1e5-b67f-460e-b3e0-3b1570b1f510',
        title: 'Westcreek Lambswool Cap',
        description: `This style today and tomorrow something different. This ultralight tube scarf is a true multi-talent. It can be worn multifunctionally as headband, neckerchief, bandana or headscarf – or simply as a breast pocket handkerchief. One item, lots of styles.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 49,
        amount: 2,
        categoryId: '94a34efa-c3a7-4f5e-99b9-8ce502825b50',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '2c5e70b8-8732-4cb4-b3f5-0e669227df19',
        title: 'Westcreek Lambswool Cap',
        description: `This style today and tomorrow something different. This ultralight tube scarf is a true multi-talent. It can be worn multifunctionally as headband, neckerchief, bandana or headscarf – or simply as a breast pocket handkerchief. One item, lots of styles.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 49,
        amount: 2,
        categoryId: '94a34efa-c3a7-4f5e-99b9-8ce502825b50',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 'c6e567b7-25ad-4fb2-ba1a-b18ad19a8a5e',
        title: 'Westcreek Lambswool Cap',
        description: `This style today and tomorrow something different. This ultralight tube scarf is a true multi-talent. It can be worn multifunctionally as headband, neckerchief, bandana or headscarf – or simply as a breast pocket handkerchief. One item, lots of styles.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 49,
        amount: 2,
        categoryId: '94a34efa-c3a7-4f5e-99b9-8ce502825b50',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '155311a0-1061-4da6-9ccd-7f614430e78d',
        title: 'Westcreek Lambswool Cap',
        description: `This style today and tomorrow something different. This ultralight tube scarf is a true multi-talent. It can be worn multifunctionally as headband, neckerchief, bandana or headscarf – or simply as a breast pocket handkerchief. One item, lots of styles.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 49,
        amount: 2,
        categoryId: '94a34efa-c3a7-4f5e-99b9-8ce502825b50',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 'ad55d46e-e08f-4fc6-9daa-0f4e71a3921e',
        title: 'Westcreek Lambswool Cap',
        description: `This style today and tomorrow something different. This ultralight tube scarf is a true multi-talent. It can be worn multifunctionally as headband, neckerchief, bandana or headscarf – or simply as a breast pocket handkerchief. One item, lots of styles.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 49,
        amount: 2,
        categoryId: '94a34efa-c3a7-4f5e-99b9-8ce502825b50',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '92395910-0e2f-4858-b4cc-f8a2f1abb1de',
        title: 'Westcreek Lambswool Cap',
        description: `This style today and tomorrow something different. This ultralight tube scarf is a true multi-talent. It can be worn multifunctionally as headband, neckerchief, bandana or headscarf – or simply as a breast pocket handkerchief. One item, lots of styles.`,
        image: 'https://img.hatshopping.com/Sidney-Shetland-Mix-Flat-Cap-by-Mayser.57856_pf2.jpg',
        price: 49,
        amount: 2,
        categoryId: '94a34efa-c3a7-4f5e-99b9-8ce502825b50',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
    await queryInterface.bulkInsert('products', nodes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
