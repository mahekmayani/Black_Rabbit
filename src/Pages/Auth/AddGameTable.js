import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import AddGame from "./AddGame";



const rows = [
    { id: 1, description: 'Snow', name: 'Jon', price: 35, category: 'c', Image: 'Image' },
    { id: 2, description: 'Lannister', name: 'Cersei', price: 42, category: 'c++', Image: 'Image' },
    { id: 3, description: 'Lannister', name: 'Jaime', price: 45, category: 'java', Image: 'Image' },
    { id: 4, description: 'Stark', name: 'Arya', price: 16, category: 'asp.net', Image: 'Image' },
    { id: 5, description: 'Targaryen', name: 'Daenerys', price: null, category: 'react', Image: 'Image' },
    { id: 6, description: 'Melisandre', name: null, price: 150, category: 'c', Image: 'Image' },
    { id: 7, description: 'Clifford', name: 'Ferrara', price: 44, category: 'c++', Image: 'Image' },
    { id: 8, description: 'Frances', name: 'Rossini', price: 36, category: 'java', Image: 'Image' },
    { id: 9, description: 'Roxie', name: 'Harvey', price: 65, category: 'asp.net', Image: 'Image' },
];



// toast.configure();

const categoryDropDown = [
    { label: "c", value: "c" },
    { label: "c++", value: "c++" },
    { label: "java", value: "java" },
    { label: "asp.net", value: "asp.net" },
    { label: "react", value: "react" },
];

const AddGameTable = () => {

    const [openPopUp, setOpenPopUp] = useState(false)
    const [deleteRowId , setDeleteRowId] = useState()
    const [show , setShow] = useState(false)

    const handleClose = () => {
        setShow()
    }
  
    

    const navigator = useNavigate();
    
    const [RowsRecords ,setRowsRecords] = useState({
        description:'',
        name:'',
        price:'',
        category:'',
        Image:'',

    })
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'description', headerName: 'description', width: 150 },
        { field: 'name', headerName: 'name', width: 150 },
        { field: 'price', headerName: 'price', width: 150 },
        { field: 'category', headerName: 'category', width: 150 },
        { field: 'Image', headerName: 'Image', width: 150 },
        // action
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        {/* <button
                            className="btn btn-primary edit-btn"
                            onClick={() => {
                                console.log(params.row.id);
                            }}
                        >
                            Edit
                        </button> */}
                        {/* // edit icon  */}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            height="20px" width="20px"
                            className="edit-icon" onClick={() => {

                                navigator(`/addGame`, { state: params.row })
                            }}
                            style={{ marginRight: '10px', cursor: 'pointer' }}
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            height="20px" width="20px"
                            className="edit-icon" onClick={(e) => {
                                // console.log("e",params.row.id);
                                setOpenPopUp(true)
                                setDeleteRowId(params.row.id)
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                    </>
                );
            },
        },
    ];

    const deleteRecord = (id) => {
// console.log("mhk",id);
    }

    return (
        <>
        <div> 
          
            <DataGrid rows={rows} columns={columns} pageSize={5}
                components={{
                    Toolbar: () => (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <GridToolbar />
                            <div>
                                <button
                                    className="btn btn-primary edit-btn"
                                    style={{ marginRight: '10px', cursor: 'pointer', padding: '10px 10px' }}
                                    onClick={() => {
                                        navigator(`/addGame`)

                                    }}
                                >Add Book</button>
                            </div>
                        </div>
                    ),
                }}
                style={{ height: '80vh', width: '100%', padding: '20px' }}
                onRowClick={(e) => {
                    console.log(e)
                }}
                className="custom-data-grid"
            />
            {
                console.log("helo", rows.id)
            }
            {openPopUp && 
            <div>
                hello
                <button onClick={()=>deleteRecord(deleteRowId)}>Yes</button>
                <button onClick={()=>{setOpenPopUp(false)}}>No</button>
            </div>
            }
            </div>

        </>
    )
}


export default AddGameTable;