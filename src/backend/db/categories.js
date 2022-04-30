import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Laptops",
    categoryKey: "laptop",
  },
  {
    _id: uuid(),
    categoryName: "Ear Phones",
    categoryKey: "earphone",
  },
  {
    _id: uuid(),
    categoryName: "Mobile Phones",
    categoryKey: "phone",
  },
  {
    _id: uuid(),
    categoryName: "Smart Watches",
    categoryKey: "watch",
  },
];
