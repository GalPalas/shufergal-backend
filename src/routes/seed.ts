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
        images: [
          "https://i5.walmartimages.com/asr/4b15d1c6-03e7-489b-96cb-7d4b1edeb927.042464e5bc52fa0421f255d04ec525a4.jpeg",
          "https://i5.walmartimages.com/asr/7add0fca-f0c0-4ce9-8ff0-2fa04cbf14d3.dffd75b9f172d67448964ce6f625270e.jpeg",
          "https://i5.walmartimages.com/asr/4e05cc56-3cb8-4383-999e-c423959297a1.1885372ef7e5544b3978447ae6de6e9f.jpeg",
        ],
      },
      {
        name: "Fresh USDA Organic Strawberries, 1 lb.",
        price: 3.86,
        image:
          "https://i5.walmartimages.com/asr/fb148fa5-193e-479c-8e89-dca9d61e2ff7_1.0d26c201e069d9940a4d0cb0c85d776d.jpeg",
        category: { name: "Organic Fruit" },
        description: "Fresh USDA Organic Strawberries, 1 lb.",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/fb148fa5-193e-479c-8e89-dca9d61e2ff7_1.0d26c201e069d9940a4d0cb0c85d776d.jpeg",
          "https://i5.walmartimages.com/asr/28d62c85-566d-447a-ae05-42d7eef152ac.5bb54a0a21135aaa120af23a9f9c024c.jpeg",
          "https://i5.walmartimages.com/asr/afd4f4e9-81a9-4009-8d1a-5b1eafe2354a.661262df7be3af79f47df176c2d630cd.jpeg",
          "https://i5.walmartimages.com/asr/ba2c8706-4ec8-45f2-8ed3-1ee5c4efe083_1.e868646f27f557d7a97fb0e354f83589.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/e2982700-db46-4cc7-adbf-9a9cc3d9bb3e.d8e5c0df21a288aa64a54035f1fd9c0c.jpeg",
          "https://i5.walmartimages.com/asr/639b28ee-41c5-423c-8f8f-0c838d347d70.fb2fcdc305abaf4e189540e952ae4294.jpeg",
          "https://i5.walmartimages.com/asr/47d26dac-fa2c-4d57-b1bb-ac1731258e7d.ca5be343c7481401619fcf2c264bd5e6.jpeg",
          "https://i5.walmartimages.com/asr/bd94cd82-beb0-4cfb-ba97-5b0918eb6df9.5dc262a43e00aa8f02683670218a0722.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/8a64d395-4511-4393-9e32-f6440ebf74f1.c7bf160c8203cbd0dd2a695dd68930d0.jpeg",
          "https://i5.walmartimages.com/asr/9531e0f5-bc7f-4137-9a15-342d47bd4158.8887997f7204700ca5cda0ca63443189.jpeg",
          "https://i5.walmartimages.com/asr/e5369df2-53ec-4e7d-b3e3-23dee919e8ce.c5b16a391a7611461d00372cdf3f85ee.jpeg",
          "https://i5.walmartimages.com/asr/df0fd49a-e791-4c8a-9f66-83c3497537ca.2f283e71bb6b3c59136f8a93cf7e752d.jpeg",
        ],
      },
      {
        name: "Freshness Guaranteed Fuji Apples, 3 lb Bag",
        price: 5.12,
        image:
          "https://i5.walmartimages.com/asr/e14b3d1e-e43b-48b5-a543-e5176fec8f3d.7cc2dff9ef7ed800509f51bea5eb7a3e.jpeg",
        category: { name: "Organic Fruit" },
        description: "Freshness Guaranteed Fuji Apples, 3 lb Bag",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/e14b3d1e-e43b-48b5-a543-e5176fec8f3d.7cc2dff9ef7ed800509f51bea5eb7a3e.jpeg",
          "https://i5.walmartimages.com/asr/e12f5210-8821-4ee9-84ad-deb02edd68e4.a3211ba6be086c17b4ae5ad18818bca0.jpeg",
          "https://i5.walmartimages.com/asr/4bd13d87-37cf-4b94-8e7f-94cde14c7155.2d4b57a737dab74508598d6c46715a19.jpeg",
        ],
      },
      {
        name: "Freshness Guaranteed Granny Smith Apples, 3 lb Bag",
        price: 5.42,
        image:
          "https://i5.walmartimages.com/asr/7851ccc3-7c26-4437-846a-b677ec2650a6.013da5c0c4d55cfa68c4a54b760d0d4d.jpeg",
        category: { name: "Organic Fruit" },
        description: "Freshness Guaranteed Granny Smith Apples, 3 lb Bag",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/7851ccc3-7c26-4437-846a-b677ec2650a6.013da5c0c4d55cfa68c4a54b760d0d4d.jpeg",
          "https://i5.walmartimages.com/asr/1bb009ef-880b-4157-a4bd-5854909358ad.00d132b5c7e1afa37afd1b77cc8d014c.jpeg",
          "https://i5.walmartimages.com/asr/d4da8074-6505-42e5-a518-2fb6351bcf5b.f79bd078ef00fa2d6832617f22d544d4.jpeg",
        ],
      },
      {
        name: "Organic Honeycrisp Apples, 2 lb Pouch",
        price: 6.12,
        image:
          "https://i5.walmartimages.com/asr/7c3a4e9c-4eea-4c91-93d5-030df482fbe5.85b46e2eb7db9662206eb33251d40b29.jpeg",
        category: { name: "Organic Fruit" },
        description: "Organic Honeycrisp Apples, 2 lb Pouch",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/7c3a4e9c-4eea-4c91-93d5-030df482fbe5.85b46e2eb7db9662206eb33251d40b29.jpeg",
          "https://i5.walmartimages.com/asr/a58121e1-6b2f-4274-9518-ddfc6e5d779d.fc3245d7e114a0ff2297092cbc4d0d65.jpeg",
          "https://i5.walmartimages.com/asr/72f59c9b-c5a5-4a7a-ac4d-1cc5b4074a4f.2784a1119efc4d235f825e3815b1d6b1.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/82a2657c-0d82-4021-978f-227cba61602d_1.e00eabdbe34e90357e7acfa06fe86aa4.jpeg",
          "https://i5.walmartimages.com/asr/93f96489-0d0c-4602-867f-35edec696a63_1.977428c00929e670912ee4f3129361e1.jpeg",
        ],
      },
      {
        name: "Great Value Strawberry Banana Blend, 48 oz (Frozen)",
        price: 7.74,
        image:
          "https://i5.walmartimages.com/asr/76f2fe41-a194-4a74-9426-da8590ad4677.b4ba706a1cf4cca6a7049b054a941fac.jpeg",
        category: { name: "Organic Fruit" },
        description: "Great Value Strawberry Banana Blend, 48 oz (Frozen)",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/76f2fe41-a194-4a74-9426-da8590ad4677.b4ba706a1cf4cca6a7049b054a941fac.jpeg",
          "https://i5.walmartimages.com/asr/93f3682f-6580-4541-af9c-6d8f48ba8db8.de95ce15e1773fd23677deb440cccc10.jpeg",
          "https://i5.walmartimages.com/asr/1a9576ec-0f49-4e91-a0b8-fe05528c18f8.11eea3ac980d52df7ddbd3f993465c6c.jpeg",
          "https://i5.walmartimages.com/asr/1c865922-9e2b-4d83-8e21-3b29dc317061.cd866dab1a0f0e1f8d2d49fb93d33221.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/5a75448b-ff06-494c-b82d-52fbbe49e0fc.08d1f2e97605a15173a3d434ec6e1726.jpeg",
          "https://i5.walmartimages.com/asr/1508f962-c494-4c99-9307-4595aecaf447.8c119e34e6830f335df953d903b3dd67.jpeg",
          "https://i5.walmartimages.com/asr/921262f5-05d7-4652-8538-27f2c48f2187.3cf931bc84f81785031a538781d95961.jpeg",
        ],
      },
      {
        name: "Viva Naturals, Organic Goji Berries 1 Lb",
        price: 26.0,
        image:
          "https://i5.walmartimages.com/asr/639a63c6-e94b-4e72-a9dc-187049416400.e16bc8fea1b8558ae4e96c4e17670651.jpeg",
        category: { name: "Organic Fruit" },
        description: "Viva Naturals, Organic Goji Berries 1 Lb",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/639a63c6-e94b-4e72-a9dc-187049416400.e16bc8fea1b8558ae4e96c4e17670651.jpeg",
          "https://i5.walmartimages.com/asr/9874af21-431e-44ea-b773-3956d26a1aff.c92f0833ab75829484af899e25d9751b.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/c54da0f4-9606-42fc-b847-c8cd729b57ed.a34aaee11479b301f007eae4e612f2b9.jpeg",
          "https://i5.walmartimages.com/asr/b81e6dea-3762-48f7-9f48-dd799ec76fdc.126900ddc674f3ec359ce36c54c58736.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/fa41578e-f8be-4e38-9eed-65e119ad74f4_1.a275a50d8f6cf85fb6c0b130260f6ca6.jpeg",
          "https://i5.walmartimages.com/asr/fa41578e-f8be-4e38-9eed-65e119ad74f4_1.a275a50d8f6cf85fb6c0b130260f6ca6.jpeg",
        ],
      },
      {
        name: "Marketside Organic Gold Potatoes, 3 lb Bag",
        price: 4.88,
        image:
          "https://i5.walmartimages.com/asr/cf9ea3c9-308b-492a-a90c-99a63b4a94a1.dc1df887b49cf8e49eaad121fdaf584d.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Gold Potatoes, 3 lb Bag",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/cf9ea3c9-308b-492a-a90c-99a63b4a94a1.dc1df887b49cf8e49eaad121fdaf584d.jpeg",
          "https://i5.walmartimages.com/asr/e9ac46e7-6fec-451b-beab-f8c7b5c73f4b.3ac7548cd4e95153ad222659823f7d8c.jpeg",
          "https://i5.walmartimages.com/asr/fc17cdf0-9f8e-420a-a8de-9fa4c8154b0a.0aacad4e8459cb1d3949fac4876ffe5e.jpeg",
          "https://i5.walmartimages.com/asr/5fe7e54d-148f-484c-ad36-7276d2b3427f.674cb62db364c4868e28e17611bfbe59.jpeg",
        ],
      },
      {
        name: "Fresh & Organic Italian Parsley, Bunch 1 Pack",
        price: 0.98,
        image:
          "https://i5.walmartimages.com/asr/dfd45cbc-0f22-4b7b-8b1e-d54ec50fc97c_1.add07ac355762219273ff743ec2b2efc.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Fresh & Organic Italian Parsley, Bunch 1 Pack",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/dfd45cbc-0f22-4b7b-8b1e-d54ec50fc97c_1.add07ac355762219273ff743ec2b2efc.jpeg",
        ],
      },
      {
        name: "Organic Romaine Lettuce Hearts, 3 Pack",
        price: 3.46,
        image:
          "https://i5.walmartimages.com/asr/03492e51-3793-4a1c-b920-96c461cc8a6c.6a64ac56efebaafc00503fd379cfa49b.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Organic Romaine Lettuce Hearts, 3 Pack",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/03492e51-3793-4a1c-b920-96c461cc8a6c.6a64ac56efebaafc00503fd379cfa49b.jpeg",
          "https://i5.walmartimages.com/asr/e44a80b7-1c80-43d3-900e-e1ccdb52d53a.eda828d165739a0dabf9a185659fdd7a.jpeg",
          "https://i5.walmartimages.com/asr/4a51e0d8-aba0-4cab-8327-a0c2b3ae9443.dc7b804f5d430c07c4883f377b54bafd.jpeg",
        ],
      },
      {
        name: "Fresh & Organic Whole Carrots, 2 lb Bag",
        price: 1.96,
        image:
          "https://i5.walmartimages.com/asr/4ccb4d13-7f9d-43c4-9044-ee855cb00418.a19543f9c2a7152d279db832d6c7f2f9.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Fresh & Organic Whole Carrots, 2 lb Bag",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/4ccb4d13-7f9d-43c4-9044-ee855cb00418.a19543f9c2a7152d279db832d6c7f2f9.jpeg",
          "https://i5.walmartimages.com/asr/6c4c7c77-f80b-4e30-99b2-04b53af0aa7b.5e5f2643ba7b972fc73a3a9f1cd39bf8.jpeg",
          "https://i5.walmartimages.com/asr/3ca19486-107f-4761-9575-1b91e2864430.e278be10f09450a20e58a41ef55991cd.jpeg",
        ],
      },
      {
        name: "Marketside Organic Baby Spinach, 16 Oz",
        price: 5.13,
        image:
          "https://i5.walmartimages.com/asr/03b1e82b-ae79-43b8-a361-325ae87396f1.692883c91785230e2a0595e99fe0172b.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Baby Spinach, 16 Oz",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/03b1e82b-ae79-43b8-a361-325ae87396f1.692883c91785230e2a0595e99fe0172b.jpeg",
          "https://i5.walmartimages.com/asr/7b763c58-fdbf-4d2c-b5c1-c4f9a2a45e7a_6.efb76210f6862fdff696e1cf3c8865c4.jpeg",
          "https://i5.walmartimages.com/asr/90470ca1-8142-4522-8a84-3304e89842ad_2.10c8c3d0ce5418fae5d37468b1365f0d.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/6989391c-7793-442e-b937-f2d0562fef2b.7979218cc798806f9f713c77e3da4939.jpeg",
          "https://i5.walmartimages.com/asr/5da8c3ac-6c24-449d-8b15-9984dbac94a1_1.5848bcf880f19d670a31ee8cd533f108.jpeg",
        ],
      },
      {
        name: "Fresh Whole Brown Mushrooms, 16 oz",
        price: 4.12,
        image:
          "https://i5.walmartimages.com/asr/65bf3e3c-8035-4248-8fb2-421224fa7bb6.6cf09bedb23b189244faca2102e8f3a5.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Fresh Whole Brown Mushrooms, 16 oz",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/65bf3e3c-8035-4248-8fb2-421224fa7bb6.6cf09bedb23b189244faca2102e8f3a5.jpeg",
          "https://i5.walmartimages.com/asr/9fd7aae9-d4f2-4159-a97a-9d35ea19f350.e4240fde91b236d8310b5e26327ea9d6.jpeg",
          "https://i5.walmartimages.com/asr/e9467aae-c4c2-4afb-9279-dd28e8269386.67d80f84304f444d84bbb4d78ee37958.jpeg",
        ],
      },
      {
        name: "Marketside Organic Spring Mix Salad Blend, 16 oz.",
        price: 5.13,
        image:
          "https://i5.walmartimages.com/asr/edfbc3c6-7b3a-406b-bd0c-6e7c93cf8482.dcce949a59ac11af8024f1a8ee27c5f4.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Spring Mix Salad Blend, 16 oz.",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/edfbc3c6-7b3a-406b-bd0c-6e7c93cf8482.dcce949a59ac11af8024f1a8ee27c5f4.jpeg",
          "https://i5.walmartimages.com/asr/246fb1e9-5092-45d6-b6f9-2b7773c0e751.d967d199a807591f40bd9278ef9245c5.jpeg",
          "https://i5.walmartimages.com/asr/d46b5a8d-4a6e-4106-b120-6da55f1e6fd1.5f5c43d45adddea77dddba74f5f8c459.jpeg",
        ],
      },
      {
        name: "Marketside Organic Gala Apples, 3 lb Bag",
        price: 4.98,
        image:
          "https://i5.walmartimages.com/asr/5480c119-02f7-46fa-b4fd-8fbf23371acf.f2a52e284233521d879585c73e8a85e3.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Gala Apples, 3 lb Bag",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/5480c119-02f7-46fa-b4fd-8fbf23371acf.f2a52e284233521d879585c73e8a85e3.jpeg",
          "https://i5.walmartimages.com/asr/a16f0393-4e16-4dea-92d3-92cef24b0207.c14875b899d31bf486b8f4339299fe7a.jpeg",
          "https://i5.walmartimages.com/asr/ad6d8f41-5d8e-489d-839b-990130867515.7ea93d759aaff72713fb8f00b008e359.jpeg",
        ],
      },
      {
        name: "Marketside Organic Yellow Onions, 3 lb Bag",
        price: 3.78,
        image:
          "https://i5.walmartimages.com/asr/3ee85713-0ffb-44fd-896e-658c3784194e_1.ac4d932734a589cecf3e7f979c1955fc.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Yellow Onions, 3 lb Bag",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/3ee85713-0ffb-44fd-896e-658c3784194e_1.ac4d932734a589cecf3e7f979c1955fc.jpeg",
          "https://i5.walmartimages.com/asr/2bb64e9d-ed6e-47aa-8dfa-5f0fa88ed63f.fc2752f7ec4668f6a577cf78058ae001.jpeg",
          "https://i5.walmartimages.com/asr/c90c9114-d114-433e-958d-7ab2d6acf8ee.f658cc9f222c886b5ea2b213811a3979.jpeg",
        ],
      },
      {
        name: "Marketside Organic Russet Potatoes, 3 lb Bag",
        price: 4.48,
        image:
          "https://i5.walmartimages.com/asr/7eff0856-f39c-4202-9e30-5bf67e174859_3.9af0cc38a55f1aad4b3b13681e6bf414.jpeg",
        category: { name: "Organic Vegetable" },
        description: "Marketside Organic Russet Potatoes, 3 lb Bag",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/7eff0856-f39c-4202-9e30-5bf67e174859_3.9af0cc38a55f1aad4b3b13681e6bf414.jpeg",
          "https://i5.walmartimages.com/asr/42a99457-f8dd-4b9d-81f6-e860c27df2c3_3.78ae39ce5ffa5c57d65fde37bc264ab0.jpeg",
          "https://i5.walmartimages.com/asr/b5ffcf7e-f09c-4ea3-81fb-c316aa5e9e86_3.8810969c22d4fa214054ce10b794c623.jpeg",
          "https://i5.walmartimages.com/asr/3658ed1b-a4c9-453c-81f6-f13b9ff14914_1.f4be21e44a378fbc9b606080f7a8965e.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/7f2a74af-e075-409c-948a-54ddc6909b5a.4d7fd73e1a96c4aba0740d157df6ce78.jpeg",
          "https://i5.walmartimages.com/asr/b284765e-d8fd-4b46-b822-e8e753814280.73fa341a1b6e9558079fca89c147eca6.jpeg",
          "https://i5.walmartimages.com/asr/db8a21cb-b86d-462c-ae26-d98f2960c720.3252ee43fc94eaac8b037fe449dfbc89.jpeg",
          "https://i5.walmartimages.com/asr/287d8722-3eea-4b35-b019-069778592b56.47df321215318ef4aa0a600f3aebe647.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/c03dfe72-c1dd-4223-8ef3-b4615d4b94af.77d33a2fa2a44112bb028c60926d76d2.jpeg",
          "https://i5.walmartimages.com/asr/9b315fa6-4337-47e2-a3b3-78412d3d67cb.ec64b8695732df7b0d1444a909c8651c.jpeg",
          "https://i5.walmartimages.com/asr/1c219f68-fdc7-40b1-88ab-48475a0b7987.5e78f285aa67f790fc41797575b687fe.jpeg",
          "https://i5.walmartimages.com/asr/28f4d777-9dd0-499b-9f6a-06ec547291b3.2d27db6af04a7a189e98adf2ea937ad4.jpeg",
        ],
      },
      {
        name: "Oroweat Whole Grains 100% Whole Wheat Bread, 24 oz",
        price: 4.48,
        image:
          "https://i5.walmartimages.com/asr/effec52c-2cd8-4fb1-aeed-9080999ff509.9d9e5a79e01602eac69a69aacc89b4d4.jpeg",
        category: { name: "Bread" },
        description: "Oroweat Whole Grains 100% Whole Wheat Bread, 24 oz",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/effec52c-2cd8-4fb1-aeed-9080999ff509.9d9e5a79e01602eac69a69aacc89b4d4.jpeg",
          "https://i5.walmartimages.com/asr/3b6a2806-4a80-4c9c-af22-ce1365d1700c_1.280701b18e4ea3b183d1b892cf8956b6.jpeg",
          "https://i5.walmartimages.com/asr/1c9825e6-d828-424a-897e-e9d387efd80e_1.e82cd3a3561ea2ac9fccae31ae05adea.jpeg",
          "https://i5.walmartimages.com/asr/4e4d84c6-423b-4fcd-bd34-78226b387f31_1.425b2ee04ee6b38e6d097e4e205a148b.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/7f2a74af-e075-409c-948a-54ddc6909b5a.4d7fd73e1a96c4aba0740d157df6ce78.jpeg",
          "https://i5.walmartimages.com/asr/b284765e-d8fd-4b46-b822-e8e753814280.73fa341a1b6e9558079fca89c147eca6.jpeg",
          "https://i5.walmartimages.com/asr/db8a21cb-b86d-462c-ae26-d98f2960c720.3252ee43fc94eaac8b037fe449dfbc89.jpeg",
          "https://i5.walmartimages.com/asr/287d8722-3eea-4b35-b019-069778592b56.47df321215318ef4aa0a600f3aebe647.jpeg",
        ],
      },
      {
        name: "Oroweat Whole Grains Oatnut Bread, Free from Artificial Preservatives, 24 oz",
        price: 4.48,
        image:
          "https://i5.walmartimages.com/asr/1bc12d4c-9633-4ab9-b2d3-82eb57e90860.a4e7c984ebddc5c85cfbf82160d3c0c1.jpeg",
        category: { name: "Bread" },
        description:
          "Oroweat Whole Grains Oatnut Bread, Free from Artificial Preservatives, 24 oz",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/1bc12d4c-9633-4ab9-b2d3-82eb57e90860.a4e7c984ebddc5c85cfbf82160d3c0c1.jpeg",
          "https://i5.walmartimages.com/asr/c87ce89f-8072-4b9f-b7c7-1e5500e5122a.cdc29e6d89257a7c47ab0cdddf2aaa24.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/5caf0993-7be5-4850-afc2-80cab69b326f.ece3ef386d85857ef9643a73b20a9f70.jpeg",
          "https://i5.walmartimages.com/asr/b5cb0516-7364-4409-834b-036691b6d752.170e6a86ce0e8f41360e978294ab78c3.jpeg",
          "https://i5.walmartimages.com/asr/db8a21cb-b86d-462c-ae26-d98f2960c720.3252ee43fc94eaac8b037fe449dfbc89.jpeg",
          "https://i5.walmartimages.com/asr/287d8722-3eea-4b35-b019-069778592b56.47df321215318ef4aa0a600f3aebe647.jpeg",
        ],
      },
      {
        name: "Nature's Own Butterbread White Bread Loaf, 20 oz",
        price: 3.13,
        image:
          "https://i5.walmartimages.com/asr/905a72ca-3ad7-4ac6-a1d4-d6d92b1c3d49.77d036c6c794ea7cc777e0df0c626e31.jpeg",
        category: { name: "Bread" },
        description: "Nature's Own Butterbread White Bread Loaf, 20 oz",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/905a72ca-3ad7-4ac6-a1d4-d6d92b1c3d49.77d036c6c794ea7cc777e0df0c626e31.jpeg",
          "https://i5.walmartimages.com/asr/c592c3eb-4168-4a18-99dc-7be4a5a1fe3c.5c7c851e70dea1da2843b72fd1640a15.jpeg",
          "https://i5.walmartimages.com/asr/625603c9-c487-4512-9f6f-470ca7238ca9.efabe2fd0d67e348e4a92a36f4cb4f76.jpeg",
          "https://i5.walmartimages.com/asr/770c0e9c-bde4-4a01-9034-435b7d623bba.075b4f1f9859a645a43ac08468e27ecb.jpeg",
        ],
      },
      {
        name: "Great Value White Round Top Bread Loaf, 20 oz",
        price: 1.32,
        image:
          "https://i5.walmartimages.com/asr/5d163ebc-27cb-43f2-97a8-755f71271097.0ef8653389f91c1b6c7eb0acd64cf78e.jpeg",
        category: { name: "Bread" },
        description: "Great Value White Round Top Bread Loaf, 20 oz",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/5d163ebc-27cb-43f2-97a8-755f71271097.0ef8653389f91c1b6c7eb0acd64cf78e.jpeg",
          "https://i5.walmartimages.com/asr/aa877a8a-7b88-419c-9a63-31092add8086.aa01f1a0eda5003ace15169a60ff9cac.jpeg",
          "https://i5.walmartimages.com/asr/90c355a0-ef5d-4d45-8ec6-f979cce1516c.d976808526ea24a47aafa18b5290e1e3.jpeg",
          "https://i5.walmartimages.com/asr/25902456-8568-47f4-af5f-149a991cb140.1db01b293604cf6e50e90084145c8102.jpeg",
        ],
      },
      {
        name: "Great Value 100% Whole Wheat Round Top Bread Loaf, 20 oz",
        price: 1.88,
        image:
          "https://i5.walmartimages.com/asr/f11b5c59-f37b-45bc-bfba-6526d33b9aea.ea14bb479babb4850347ce1a135a709b.jpeg",
        category: { name: "Bread" },
        description: "Great Value 100% Whole Wheat Round Top Bread Loaf, 20 oz",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/f11b5c59-f37b-45bc-bfba-6526d33b9aea.ea14bb479babb4850347ce1a135a709b.jpeg",
          "https://i5.walmartimages.com/asr/7553505e-8a0e-459f-942b-b8df69073d78.d7ec9a74586f2453f869c68b21651560.jpeg",
          "https://i5.walmartimages.com/asr/20ee5a2e-1e60-4f86-a02b-10460a5bde82.e9860b7270d8c57e75e5d148b4a202f3.jpeg",
        ],
      },
      {
        name: "Great Value Multi Grain Bread, 24 oz",
        price: 2.44,
        image:
          "https://i5.walmartimages.com/asr/6f0c5cb6-73e4-4970-903d-c2be744b90ec.a35822bf73d3e92cef62f40f0a93c743.jpeg",
        category: { name: "Bread" },
        description: "Great Value Multi Grain Bread, 24 oz",
        numberInStock: 100,
        images: [
          "https://i5.walmartimages.com/asr/6f0c5cb6-73e4-4970-903d-c2be744b90ec.a35822bf73d3e92cef62f40f0a93c743.jpeg",
          "https://i5.walmartimages.com/asr/f6d5f3b8-5f03-467b-a565-c68641e8c338.c04a7b34e00094faba7ed6de51a31f91.jpeg",
          "https://i5.walmartimages.com/asr/aaf7b8e8-fc75-400a-83d2-fe6eca3fcc14_1.58e42863f1e7468b11a31569b88a64c8.jpeg",
          "https://i5.walmartimages.com/asr/86e56566-8aed-429d-8093-3cc3a79147f3.56452e559a2f7325a300a972fd1e096b.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/7f2a74af-e075-409c-948a-54ddc6909b5a.4d7fd73e1a96c4aba0740d157df6ce78.jpeg",
          "https://i5.walmartimages.com/asr/b284765e-d8fd-4b46-b822-e8e753814280.73fa341a1b6e9558079fca89c147eca6.jpeg",
          "https://i5.walmartimages.com/asr/db8a21cb-b86d-462c-ae26-d98f2960c720.3252ee43fc94eaac8b037fe449dfbc89.jpeg",
          "https://i5.walmartimages.com/asr/287d8722-3eea-4b35-b019-069778592b56.47df321215318ef4aa0a600f3aebe647.jpeg",
        ],
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
        images: [
          "https://i5.walmartimages.com/asr/347f8b53-f6e4-46fe-b39a-5784eb42c9a2.b0cb08c0b01a626a9e007d2877852a4b.jpeg",
          "https://i5.walmartimages.com/asr/3094ab1e-6e95-4bb4-b994-d5d9c6ede0dd.0e8df3444f45acdb98db5099745c31fa.jpeg",
          "https://i5.walmartimages.com/asr/eb099288-d147-4ae6-bef1-aa79fb5ed088.db45c3cb364aebb136f9c5618a65b6f2.jpeg",
          "https://i5.walmartimages.com/asr/f0ef0827-5218-4e9a-92ad-1942ee7a4822.d3cca14841720b7462d82d31c3d42dcf.jpeg",
        ],
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
