import React from "react";
import ProductCard from "./ProductCard";
const data = [
  {
    sizes: [32, 33, 34, 35],
    id: 1,
    name: "vans black",
    alias: "vans-black-black",
    price: 200,
    description:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    size: "[32,33,34,35]",
    shortDescription:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 100,
    deleted: false,
    categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
    relatedProducts: "[2,3,1]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/vans-black-black.png",
    imgLink: "https://apistore.cybersoft.edu.vn/images/vans-black-black.png",
  },
  {
    sizes: [32, 33, 34, 35],
    id: 2,
    name: "vans old school",
    alias: "vans-old-school",
    price: 200,
    description:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    size: "[32,33,34,35]",
    shortDescription:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
    relatedProducts: "[3,2,1]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
    imgLink: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
  },
  {
    sizes: [32, 33, 34, 35],
    id: 3,
    name: "converse chuck taylor",
    alias: "converse-chuck-taylor",
    price: 250,
    description:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    size: "[32,33,34,35]",
    shortDescription:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
    relatedProducts: "[2,3,1]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png",
    imgLink:
      "https://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png",
  },
  {
    sizes: [32, 33, 34, 35],
    id: 4,
    name: "nike adapt bb",
    alias: "nike-adapt-bb",
    price: 350,
    description:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    size: "[32,33,34,35]",
    shortDescription:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "NIKE","category":"NIKE"}]',
    relatedProducts: "[5,6,7]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/nike-adapt-bb.png",
    imgLink: "https://apistore.cybersoft.edu.vn/images/nike-adapt-bb.png",
  },
];
const RenderShoeShop = () => {
  const renderCardItem = () => {
    const arrJSX = data.map((item) => {
      return (
        <div className="w-[25%]">
          <ProductCard dataShoe={item} />;
        </div>
      );
    });
    return arrJSX;
  };
  return (
    <div className="container mx-auto">
      <h1>Shoe shop</h1>
      <div className="flex gap-1">{renderCardItem()}</div>
    </div>
  );
};

export default RenderShoeShop;
