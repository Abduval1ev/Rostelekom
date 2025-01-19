const { faker } = require("@faker-js/faker")

const getRandomArreyValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

const collections = ["street", "black", "casual", "orange", "line"]
const colors = ["purpure", "yellow", "orange", "black", "white"]
const compositions = ["cotton", "synthetics", "polyester"]
const clothTypes = ["t-shirt", "long-sleevers", "hoodie", "outerwear"]

const images = [
  `/images/clothes/cloth-hoodie-1.png`,
  `/images/clothes/cloth-t-shirt-1.png`,
  `/images/clothes/cloth-t-shirt-2.png`,
  `/images/clothes/cloth-outerwear-1.png`,
  `/images/clothes/cloth-outerwear-1.png`,
  `/images/clothes/cloth-long-sleevers-1.png`,
  `/images/clothes/cloth-long-sleevers-2.png`,
]

const lineImages = [
  `/images/black-t.png`,
  `/images/violet-t.png`,
  `/images/orange-t.png`,
]
const fabricTypes = [
  "natural",
  "non-natural",
  "mixed",
  "non-woven",
  "stockinette",
]
const features = [
  "breathabl material, knitwear",
  "contrasting color",
  "soft fabric",
  "hood, pockets",
]

const collars = [
  "polo",
  "shirt-rack",
  "apache",
  "tangerine",
  "golf",
  "round neck",
]

const sleeves = ['long', "short"]
const seasons = ['demi-season', "all season"]
const upperMaterials = ['synthectic material', "quilted jacket fabric", "eco leather", "denim"]
const liningMaterials = ['synthectic material', "quilted jacket fabric", "eco leather", "denim"]

module.exports = {
  async up(db) {
    console.log("Inserting cloth data...");
    const clothData = Array.from({ length: 50 }, () => {
      const type = getRandomArreyValue(clothTypes);

      const characteristics = {
        "t-shirt": {
          type: "t-shirt",
          color: getRandomArreyValue(colors),
          collar: getRandomArreyValue(collars),
          silhouette: "straight",
          print: "chocolate, print, melange",
          decor: faker.datatype.boolean(),
          composition: getRandomArreyValue(compositions),
          season: getRandomArreyValue(seasons),
          collection: getRandomArreyValue(collections),
        },
        "long-sleeves": {
          type: "long-sleeves",
          color: getRandomArreyValue(colors),
          collar: getRandomArreyValue(collars),
          silhouette: "straight",
          print: "chocolate, print, melange",
          decor: faker.datatype.boolean(),
          composition: getRandomArreyValue(compositions),
          features: getRandomArreyValue(features),
          fabricType: getRandomArreyValue(fabricTypes),
          sleeve: getRandomArreyValue(sleeves),
          season: getRandomArreyValue(seasons),
          collection: getRandomArreyValue(collections),
        },
        hoodie: {
          type: "hoodie",
          color: getRandomArreyValue(colors),
          collar: getRandomArreyValue(collars),
          silhouette: "straight",
          print: "chocolate, print, melange",
          decor: faker.datatype.boolean(),
          composition: getRandomArreyValue(compositions),
          features: getRandomArreyValue(features),
          fabricType: getRandomArreyValue(fabricTypes),
          sleeve: getRandomArreyValue(sleeves),
          clasp: faker.datatype.boolean(),
          season: getRandomArreyValue(seasons),
        },
        outerwear: {
          type: "outerwear",
          color: getRandomArreyValue(colors),
          collar: getRandomArreyValue(collars),
          decor: faker.datatype.boolean(),
          composition: getRandomArreyValue(compositions),
          features: getRandomArreyValue(features),
          upperMaterial: getRandomArreyValue(upperMaterials),
          liningMaterial: getRandomArreyValue(liningMaterials),
          collection: getRandomArreyValue(collections),
        },
      };

      return {
        category: "cloth",
        type,
        price: +faker.string.numeric(4).replace(/.{0,2}$/, 99),
        name: faker.lorem.sentence(2),
        characteristics: characteristics[type],
        images:
          type === "t-shirt" &&
            characteristics[type].collection === "line"
            ? [getRandomArreyValue(lineImages)]
            : images.filter((item) => item.includes(type)),
        vendorCode: faker.string.numeric(4),
        inStock: faker.string.numeric(2),
        isBestseller: faker.datatype.boolean(),
        isNew: faker.datatype.boolean(),
        popularity: +faker.string.numeric(3),
        size: {
          s: faker.datatype.boolean(),
          l: faker.datatype.boolean(),
          m: faker.datatype.boolean(),
          xl: faker.datatype.boolean(),
          xxl: faker.datatype.boolean(),
        },
      };
    });

    await db.collection("cloth").insertMany(clothData);
  },

  async down(db) {
    return db.collection('cloth').upDateMany([])
  }
};
