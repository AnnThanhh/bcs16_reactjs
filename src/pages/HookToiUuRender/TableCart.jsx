import React, { memo } from "react";

const TableCart = (props) => {
  console.log("child render");
  return (
    <div>
      <h3>Table</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default memo(TableCart); //shallow compare props
