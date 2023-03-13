import mongoose from "mongoose";
import { Category } from "../models/category";
import { Product } from "../models/product";

const data = [
  {
    name: "Organic Fruits",
    products: [
      {
        name: "Marketside Organic Bananas,Bunch, 2 lb",
        price: 1.7,
        image:
          "https://i5.walmartimages.com/asr/4b15d1c6-03e7-489b-96cb-7d4b1edeb927.042464e5bc52fa0421f255d04ec525a4.jpeg",
        category: { name: "Organic Fruit" },
        description: "Marketside Organic Bananas, Bunch, 2 lb",
        numberInStock: 15,
        liked: true,
      },
      {
        name: "Fresh USDA Organic Strawberries, 1 lb.",
        price: 3.86,
        image:
          "https://i5.walmartimages.com/asr/fb148fa5-193e-479c-8e89-dca9d61e2ff7_1.0d26c201e069d9940a4d0cb0c85d776d.jpeg",
        category: { name: "Organic Fruit" },
        description: "Fresh USDA Organic Strawberries, 1 lb.",
        numberInStock: 100,
      },
      {
        name: "Pitaya Foods Frozen Organic Unsweetened Acai Fruit Smoothie Mix Packs, 14oz, 4pk",
        price: 4.98,
        image:
          "https://i5.walmartimages.com/asr/e2982700-db46-4cc7-adbf-9a9cc3d9bb3e.d8e5c0df21a288aa64a54035f1fd9c0c.jpeg",
        category: { name: "Organic Fruit" },
        description:
          "Pitaya Foods Frozen Organic Unsweetened Acai Fruit Smoothie Mix Packs, 14oz, 4pk",
        numberInStock: 100,
      },
      {
        name: "Pitaya Foods Frozen Dragon Fruit Bite Sized Pieces for Smoothies, 12 oz",
        price: 3.98,
        image:
          "https://i5.walmartimages.com/asr/8a64d395-4511-4393-9e32-f6440ebf74f1.c7bf160c8203cbd0dd2a695dd68930d0.jpeg",
        category: { name: "Organic Fruit" },
        description:
          "Pitaya Foods Frozen Dragon Fruit Bite Sized Pieces for Smoothies, 12 oz",
        numberInStock: 100,
      },
      {
        name: "Freshness Guaranteed Fuji Apples, 3 lb Bag",
        price: 5.12,
        image:
          "https://i5.walmartimages.com/asr/e14b3d1e-e43b-48b5-a543-e5176fec8f3d.7cc2dff9ef7ed800509f51bea5eb7a3e.jpeg",
        category: { name: "Organic Fruit" },
        description: "Freshness Guaranteed Fuji Apples, 3 lb Bag",
        numberInStock: 100,
      },
      {
        name: "Freshness Guaranteed Granny Smith Apples, 3 lb Bag",
        price: 5.42,
        image:
          "https://i5.walmartimages.com/asr/7851ccc3-7c26-4437-846a-b677ec2650a6.013da5c0c4d55cfa68c4a54b760d0d4d.jpeg",
        category: { name: "Organic Fruit" },
        description: "Freshness Guaranteed Granny Smith Apples, 3 lb Bag",
        numberInStock: 100,
      },
      {
        name: "Organic Honeycrisp Apples, 2 lb Pouch",
        price: 6.12,
        image:
          "https://i5.walmartimages.com/asr/7c3a4e9c-4eea-4c91-93d5-030df482fbe5.85b46e2eb7db9662206eb33251d40b29.jpeg",
        category: { name: "Organic Fruit" },
        description: "Organic Honeycrisp Apples, 2 lb Pouch",
        numberInStock: 100,
      },
      {
        name: "BAREORGANICS Goji Berries (Organic - Sun Dried) (8Oz) 227G",
        price: 15.96,
        image:
          "https://i5.walmartimages.com/asr/82a2657c-0d82-4021-978f-227cba61602d_1.e00eabdbe34e90357e7acfa06fe86aa4.jpeg",
        category: { name: "Organic Fruit" },
        description:
          "BAREORGANICS Goji Berries (Organic - Sun Dried) (8Oz) 227G",
        numberInStock: 100,
      },
      {
        name: "Great Value Strawberry Banana Blend, 48 oz (Frozen)",
        price: 7.74,
        image:
          "https://i5.walmartimages.com/asr/76f2fe41-a194-4a74-9426-da8590ad4677.b4ba706a1cf4cca6a7049b054a941fac.jpeg",
        category: { name: "Organic Fruit" },
        description: "Great Value Strawberry Banana Blend, 48 oz (Frozen)",
        numberInStock: 100,
      },
      {
        name: "Freshness Guaranteed Organic Sweetened Dried Cranberries, 10 oz",
        price: 5.38,
        image:
          "https://i5.walmartimages.com/asr/5a75448b-ff06-494c-b82d-52fbbe49e0fc.08d1f2e97605a15173a3d434ec6e1726.jpeg",
        category: { name: "Organic Fruit" },
        description:
          "Freshness Guaranteed Organic Sweetened Dried Cranberries, 10 oz",
        numberInStock: 100,
      },
      {
        name: "Viva Naturals, Organic Goji Berries 1 Lb",
        price: 26.0,
        image:
          "https://i5.walmartimages.com/asr/639a63c6-e94b-4e72-a9dc-187049416400.e16bc8fea1b8558ae4e96c4e17670651.jpeg",
        category: { name: "Organic Fruit" },
        description: "Viva Naturals, Organic Goji Berries 1 Lb",
        numberInStock: 100,
      },
      {
        name: "Organic Medjool Dates, 14 oz (397 g), Bergin Fruit and Nut Company",
        price: 16.71,
        image:
          "https://i5.walmartimages.com/asr/c54da0f4-9606-42fc-b847-c8cd729b57ed.a34aaee11479b301f007eae4e612f2b9.jpeg",
        category: { name: "Organic Fruit" },
        description:
          "Organic Medjool Dates, 14 oz (397 g), Bergin Fruit and Nut Company",
        numberInStock: 100,
      },
    ],
  },
  {
    name: "Organic Vegetables",
    products: [
      {
        name: "Local Organic Asparagus, bunch, 1 lb",
        price: 5.96,
        image:
          "https://i5.walmartimages.com/asr/fa41578e-f8be-4e38-9eed-65e119ad74f4_1.a275a50d8f6cf85fb6c0b130260f6ca6.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Local Organic Asparagus, bunch, 1 lb",
        numberInStock: 100,
      },
      {
        name: "Marketside Organic Gold Potatoes, 3 lb Bag",
        price: 4.88,
        image:
          "https://i5.walmartimages.com/asr/cf9ea3c9-308b-492a-a90c-99a63b4a94a1.dc1df887b49cf8e49eaad121fdaf584d.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Gold Potatoes, 3 lb Bag",
        numberInStock: 100,
      },
      {
        name: "Fresh & Organic Italian Parsley, Bunch 1 Pack",
        price: 0.98,
        image:
          "https://i5.walmartimages.com/asr/dfd45cbc-0f22-4b7b-8b1e-d54ec50fc97c_1.add07ac355762219273ff743ec2b2efc.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Fresh & Organic Italian Parsley, Bunch 1 Pack",
        numberInStock: 100,
      },
      {
        name: "Organic Romaine Lettuce Hearts, 3 Pack",
        price: 3.46,
        image:
          "https://i5.walmartimages.com/asr/03492e51-3793-4a1c-b920-96c461cc8a6c.6a64ac56efebaafc00503fd379cfa49b.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Organic Romaine Lettuce Hearts, 3 Pack",
        numberInStock: 100,
      },
      {
        name: "Fresh & Organic Whole Carrots, 2 lb Bag",
        price: 1.96,
        image:
          "https://i5.walmartimages.com/asr/4ccb4d13-7f9d-43c4-9044-ee855cb00418.a19543f9c2a7152d279db832d6c7f2f9.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Fresh & Organic Whole Carrots, 2 lb Bag",
        numberInStock: 100,
      },
      {
        name: "Marketside Organic Baby Spinach, 16 Oz",
        price: 5.13,
        image:
          "https://i5.walmartimages.com/asr/03b1e82b-ae79-43b8-a361-325ae87396f1.692883c91785230e2a0595e99fe0172b.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Baby Spinach, 16 Oz",
        numberInStock: 100,
      },
      {
        name: "Boskovich Farms Iceberg Lettuce, Fresh Produce, USA Grown, 1 Head",
        price: 1.68,
        image:
          "https://i5.walmartimages.com/asr/6989391c-7793-442e-b937-f2d0562fef2b.7979218cc798806f9f713c77e3da4939.jpeg",
        category: { name: "Organic Vegetable" },
        description:
          "Boskovich Farms Iceberg Lettuce, Fresh Produce, USA Grown, 1 Head",
        numberInStock: 100,
      },
      {
        name: "Fresh Whole Brown Mushrooms, 16 oz",
        price: 4.12,
        image:
          "https://i5.walmartimages.com/asr/65bf3e3c-8035-4248-8fb2-421224fa7bb6.6cf09bedb23b189244faca2102e8f3a5.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Fresh Whole Brown Mushrooms, 16 oz",
        numberInStock: 100,
      },
      {
        name: "Marketside Organic Spring Mix Salad Blend, 16 oz.",
        price: 5.13,
        image:
          "https://i5.walmartimages.com/asr/edfbc3c6-7b3a-406b-bd0c-6e7c93cf8482.dcce949a59ac11af8024f1a8ee27c5f4.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Spring Mix Salad Blend, 16 oz.",
        numberInStock: 100,
      },
      {
        name: "Marketside Organic Gala Apples, 3 lb Bag",
        price: 4.98,
        image:
          "https://i5.walmartimages.com/asr/5480c119-02f7-46fa-b4fd-8fbf23371acf.f2a52e284233521d879585c73e8a85e3.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Gala Apples, 3 lb Bag",
        numberInStock: 100,
      },
      {
        name: "Marketside Organic Yellow Onions, 3 lb Bag",
        price: 3.78,
        image:
          "https://i5.walmartimages.com/asr/3ee85713-0ffb-44fd-896e-658c3784194e_1.ac4d932734a589cecf3e7f979c1955fc.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Yellow Onions, 3 lb Bag",
        numberInStock: 100,
      },
      {
        name: "Marketside Organic Russet Potatoes, 3 lb Bag",
        price: 4.48,
        image:
          "https://i5.walmartimages.com/asr/7eff0856-f39c-4202-9e30-5bf67e174859_3.9af0cc38a55f1aad4b3b13681e6bf414.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Russet Potatoes, 3 lb Bag",
        numberInStock: 100,
      },
    ],
  },
  {
    name: "Bread",
    products: [
      {
        name: "Thomas’ Cinnamon Raisin Swirl Bread, 16 Oz Cinnamon Raisin Bread",
        price: 3.28,
        image:
          "https://i5.walmartimages.com/asr/7f2a74af-e075-409c-948a-54ddc6909b5a.4d7fd73e1a96c4aba0740d157df6ce78.jpeg",
        category: { name: "Bread" },
        description:
          "Thomas’ Cinnamon Raisin Swirl Bread, 16 Oz Cinnamon Raisin Bread",
        numberInStock: 100,
      },
      {
        name: "Alfaro's Artesano Golden Wheat Bakery Bread, No Artificial Colors or Flavors, 1 Pound 4 Ounce Loaf",
        price: 3.64,
        image:
          "https://i5.walmartimages.com/asr/c03dfe72-c1dd-4223-8ef3-b4615d4b94af.77d33a2fa2a44112bb028c60926d76d2.jpeg",
        category: { name: "Bread" },
        description:
          "Alfaro's Artesano Golden Wheat Bakery Bread, No Artificial Colors or Flavors, 1 Pound 4 Ounce Loaf",
        numberInStock: 100,
      },
      {
        name: "Oroweat Whole Grains 100% Whole Wheat Bread, 24 oz",
        price: 4.48,
        image:
          "https://i5.walmartimages.com/asr/effec52c-2cd8-4fb1-aeed-9080999ff509.9d9e5a79e01602eac69a69aacc89b4d4.jpeg",
        category: { name: "Bread" },
        description: "Oroweat Whole Grains 100% Whole Wheat Bread, 24 oz",
        numberInStock: 100,
      },
      {
        name: "Thomas’ Cinnamon Raisin Swirl Bread",
        price: 3.28,
        image:
          "https://i5.walmartimages.com/asr/7f2a74af-e075-409c-948a-54ddc6909b5a.4d7fd73e1a96c4aba0740d157df6ce78.jpeg",
        category: { name: "Bread" },
        description:
          "Thomas’ Cinnamon Raisin Swirl Bread, 16 Oz Cinnamon Raisin Bread",
        numberInStock: 100,
      },
      {
        name: "Oroweat Whole Grains Oatnut Bread, Free from Artificial Preservatives, 24 oz",
        price: 4.48,
        image:
          "https://i5.walmartimages.com/asr/1bc12d4c-9633-4ab9-b2d3-82eb57e90860.a4e7c984ebddc5c85cfbf82160d3c0c1.jpeg?",
        category: { name: "Bread" },
        description:
          "Oroweat Whole Grains Oatnut Bread, Free from Artificial Preservatives, 24 oz",
        numberInStock: 100,
      },
      {
        name: "Thomas' Cinnamon Swirl Bread made with real Indonesian Cinnamon, 16 oz",
        price: 3.28,
        image:
          "https://i5.walmartimages.com/asr/5caf0993-7be5-4850-afc2-80cab69b326f.ece3ef386d85857ef9643a73b20a9f70.jpeg",
        category: { name: "Bread" },
        description:
          "Thomas' Cinnamon Swirl Bread made with real Indonesian Cinnamon, 16 oz",
        numberInStock: 100,
      },
      {
        name: "Nature's Own Butterbread White Bread Loaf, 20 oz",
        price: 3.13,
        image:
          "https://i5.walmartimages.com/asr/905a72ca-3ad7-4ac6-a1d4-d6d92b1c3d49.77d036c6c794ea7cc777e0df0c626e31.jpeg",
        category: { name: "Bread" },
        description: "Nature's Own Butterbread White Bread Loaf, 20 oz",
        numberInStock: 100,
      },
      {
        name: "Great Value White Round Top Bread Loaf, 20 oz",
        price: 1.32,
        image:
          "https://i5.walmartimages.com/asr/5d163ebc-27cb-43f2-97a8-755f71271097.0ef8653389f91c1b6c7eb0acd64cf78e.jpeg",
        category: { name: "Bread" },
        description: "Great Value White Round Top Bread Loaf, 20 oz",
        numberInStock: 100,
      },
      {
        name: "Great Value 100% Whole Wheat Round Top Bread Loaf, 20 oz",
        price: 1.88,
        image:
          "https://i5.walmartimages.com/asr/f11b5c59-f37b-45bc-bfba-6526d33b9aea.ea14bb479babb4850347ce1a135a709b.jpeg",
        category: { name: "Bread" },
        description: "Great Value 100% Whole Wheat Round Top Bread Loaf, 20 oz",
        numberInStock: 100,
      },
      {
        name: "Great Value Multi Grain Bread, 24 oz",
        price: 2.44,
        image:
          "https://i5.walmartimages.com/asr/6f0c5cb6-73e4-4970-903d-c2be744b90ec.a35822bf73d3e92cef62f40f0a93c743.jpeg",
        category: { name: "Bread" },
        description: "Great Value Multi Grain Bread, 24 oz",
        numberInStock: 100,
      },
      {
        name: "Thomas’ Cinnamon Raisin Swirl Bread",
        price: 3.28,
        image:
          "https://i5.walmartimages.com/asr/7f2a74af-e075-409c-948a-54ddc6909b5a.4d7fd73e1a96c4aba0740d157df6ce78.jpeg",
        category: { name: "Bread" },
        description:
          "Thomas’ Cinnamon Raisin Swirl Bread, 16 Oz Cinnamon Raisin Bread",
        numberInStock: 100,
      },
      {
        name: "The Rustik Oven Sourdough Bread, Slow Baked Delicious Artisan Bread, Non-GMO, 16 oz",
        price: 4.37,
        image:
          "https://i5.walmartimages.com/asr/347f8b53-f6e4-46fe-b39a-5784eb42c9a2.b0cb08c0b01a626a9e007d2877852a4b.jpeg",
        category: { name: "Bread" },
        description:
          "The Rustik Oven Sourdough Bread, Slow Baked Delicious Artisan Bread, Non-GMO, 16 oz",
        numberInStock: 100,
      },
    ],
  },
];

async function seed() {
  await mongoose.connect(process.env.DATABASE_NAME!);
  await Product.deleteMany({});
  await Category.deleteMany({});

  for (let category of data) {
    const { _id: categoryId } = await new Category({
      name: category.name,
    }).save();
    const products = category.products.map((product) => ({
      ...product,
      category: { _id: categoryId, name: category.name },
    }));
    await Product.insertMany(products);
  }

  mongoose.disconnect();

  console.info("Done!");
}

// seed();

export default seed;
