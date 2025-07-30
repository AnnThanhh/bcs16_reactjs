import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailByIDActionThunk } from "../redux/reducers/productReducer";
const Details = () => {
  const param = useParams();
  // const [prodDetail, setProdDetail] = useState({});
  const { prodDetail } = useSelector((state) => state.productReducer);
  const [transformValue, setTransformValue] = useState("rotate(0deg)");
  
  console.log(param);
  const dispatch = useDispatch();
  const getProductByID = async () => {
    // const res = await axios.get(
    //   `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.prodID}`
    // );
    // const data = res.data.content;
    // console.log(data);
    // setProdDetail(data);
    const actionThunk = getProductDetailByIDActionThunk(param.prodID);
    dispatch(actionThunk);
  };

  useEffect(() => {
    //gọi api sau khi html load xong
    getProductByID();
  }, [param.prodID]);

  return (
    <div>
      Details - {param.prodID}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={prodDetail.image}
            alt="Nike Adapt BB"
            style={{ transform: transformValue }}
            className="w-full max-w-sm object-contain rounded-2xl shadow-lg"
          />
          <div className="flex space-x-4 mt-10">
            {prodDetail.detaildetailedImages?.map((deg, index) => (
              <img
                key={index}
                src={prodDetail.image}
                onClick={() => {
                  setTransformValue(deg);
                }}
                style={{ transform: deg }}
                className="w-24 h-24 object-contain border rounded-xl shadow-sm"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold capitalize">{prodDetail.name}</h1>
          <p className="text-gray-500 text-sm">
            Alias: <span className="text-black">{prodDetail.alias}</span>
          </p>
          <p className="text-xl font-semibold text-green-600">$350</p>
          <p className="text-gray-700 text-base leading-relaxed">
            <strong>Short Description:</strong>
            <br />
            {prodDetail.shortDescription}
          </p>
          <div>
            <strong className="block mb-1">Available Sizes:</strong>
            <div className="flex space-x-2">
              {prodDetail.size?.map((size, index) => {
                return (
                  <span
                    key={index}
                    className="px-3 py-1 border rounded-lg bg-gray-100"
                  >
                    {size}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <strong className="block mb-1">Description:</strong>
            <p className="text-gray-600 text-sm">{prodDetail.description}</p>
          </div>
          <button className="mt-4 bg-black text-white py-2 px-6 rounded-xl hover:bg-gray-800 transition duration-200 w-max">
            Add to Cart
          </button>

          <div className="max-w-6xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {prodDetail.relatedProducts?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
                  >
                    <img
                      src={item.image}
                      alt="Nike Air Max 270"
                      className="w-full max-w-[200px] object-contain mb-4"
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-green-600 font-bold">${item.price}</p>
                    <button className="mt-4 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-200">
                      <NavLink to={`/user/detail/${item.id}`}>
                        View Details
                      </NavLink>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
