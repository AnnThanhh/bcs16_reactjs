import React from "react";
import PhoneCard from "./PhoneCard";

const data = [
  { id: 1, name: "phone 1", price: 1000 },
  { id: 2, name: "phone 2", price: 2000 },
  { id: 3, name: "phone 3", price: 3000 },
  { id: 4, name: "phone 4", price: 4000 },
  { id: 5, name: "phone 5", price: 5000 },
];
const RenderWithMap = () => {
  const renderTrPhone = () => {
    const arrJSX = [];
    for (let item of data) {
      let tagJSX = (
        <tr
          key={item.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.id}
          </th>
          <td className="px-6 py-4">{item.name}</td>
          <td className="px-6 py-4">${item.price}</td>
        </tr>
      );
      arrJSX.push(tagJSX);
    }
    return arrJSX; //output: arrJSX [<tr></tr>,<tr></tr>,<tr></tr>]
  };

  const renderTrMap = () => {
    const arrJSX = data.map((item) => {
      return (
        <tr
          key={item.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.id}
          </th>
          <td className="px-6 py-4">{item.name}</td>
          <td className="px-6 py-4">${item.price}</td>
        </tr>
      );
    });

    return arrJSX;
  };

  const renderPhoneCard = () => {
    const arrCard = data.map((item) => {
      return (
        <div key={item.id}>
          <PhoneCard dataPhone={item} />
        </div>
      );
    });
    return arrCard
  };
  return (
    <div className="relative overflow-x-auto container mx-auto">
      <h2>Table product</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {renderTrPhone()} */}
          {renderTrMap()}
        </tbody>
      </table>

      <h2>List Phone</h2>
      <div className="grid grid-cols-4 gap-3">
        {renderPhoneCard()}
      </div>
    </div>
  );
};

export default RenderWithMap;
