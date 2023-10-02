import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { ToastContainer } from "react-toastify";

const BoostrapTable = () => {
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
      sort: true,
    },
    {
      dataField: "price",
      text: "Product Price",
    },
    {
      dataField: "",
      text: "Action",
      formatter: (cell, row) => (
        <>
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger">Delete</button>
        </>
      ),
    },
  ];

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 5.99,
    },
    {
      id: 4,
      name: "Product 4",
      price: 66.99,
    },
  ];
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };
  
  return (
    <div>
      <BootstrapTable
        keyField='id'
        data={products}
        columns={columns}
        striped
        hover
        condensed
        selectRow={selectRow}
      />
    </div>
  );
};
<ToastContainer />
export default BoostrapTable;