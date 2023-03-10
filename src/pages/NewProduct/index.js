import React from "react";
import "./index.css";
const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form action="" className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file"></input>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods"></input>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123"></input>
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
