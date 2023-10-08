import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import "../Auth/Css/AddGameTable.css";

// toast.configure();

const UserTable = () => {
    const [userRecord, setUserRecord] = useState([]);
    const token = localStorage.getItem("token")

    const getUserRecord = () => {
        axios.get("http://localhost:3000/api/v1/users/get",
        { headers: { "Authorization": `Bearer ${token}` } }).then((res) => {
            // console.log("helloo",res);
            setUserRecord(res.data);
        });
    };

    useEffect(() => {
        getUserRecord();
    }, []);

    const [openPopUp, setOpenPopUp] = useState(false);
    const [deleteRowId, setDeleteRowId] = useState();

    const navigator = useNavigate();
    const indexedData = userRecord.map((item, index) => ({
        ...item,
        index: index + 1,
    }));

    const columns = [
        { field: "index", headerName: "Id", width: 90 },
        { field: "firstName", headerName: "FirstName", width: 150 },
        { field: "lastName", headerName: "LastName", width: 150 },
        { field: "email", headerName: "Email", width: 150 },
        { field: "phone", headerName: "Mobile_No", width: 150 },
    
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

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            height='20px'
                            width='20px'
                            className='edit-icon'
                            onClick={() => {
                                navigator(`/addGame`, { state: params.row });
                            }}
                            style={{ marginRight: "10px", cursor: "pointer" }}
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                            />
                        </svg>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            height='20px'
                            width='20px'
                            className='edit-icon'
                            data-toggle='modal'
                            data-target='#exampleModal'
                            onClick={(e) => {
                                // console.log("e",params.row.id);
                                setOpenPopUp(true);
                                setDeleteRowId(params.row.id);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                            />
                        </svg>
                    </>
                );
            },
        },
    ];

    const deleteRecord = (id) => {
        axios
            .delete(`http://localhost:3000/api/v1/users/delete/${id}`)
            .then((res) => {
                // console.log("res.data",res.data);
                toast.success("Deleted successfully");
                getUserRecord();
            });
    };

    return (
        <>
            <div style={{ width: "81%", padding: "20px", marginLeft: "auto" }}>
                <DataGrid
                    rows={indexedData}
                    columns={columns}
                    pageSize={5}
                    components={{
                        Toolbar: () => (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <GridToolbar />
                                
                            </div>
                        ),
                    }}
                    style={{ height: "80vh", width: "100%", padding: "20px" }}
                    onRowClick={(e) => {
                        console.log(e);
                    }}
                    className='custom-data-grid'
                />
                {/* {
                console.log("helo", rows.id)
            } */}
                {openPopUp && (
                    <div>
                        hello
                {/* <button onClick={()=>deleteRecord(deleteRowId)}>Yes</button>
                <button onClick={()=>{setOpenPopUp(false)}}>No</button> */}

                        <div
                            class='modal fade'
                            id='exampleModal'
                            tabindex='-1'
                            role='dialog'
                            aria-labelledby='exampleModalLabel'
                            aria-hidden='true'
                        >
                            <div class='modal-dialog' role='document'>
                                <div class='modal-content'>
                                    <div class='modal-header'>
                                        <h5 class='modal-title' id='exampleModalLabel'>
                                            Delete
                                        </h5>
                                        <button
                                            type='button'
                                            class='close'
                                            data-dismiss='modal'
                                            aria-label='Close'
                                        >
                                            <span aria-hidden='true'>&times;</span>
                                        </button>
                                    </div>
                                    <div
                                        style={{
                                            textAlign: "center",
                                            fontSize: "18px",
                                            padding: "10px 20px",
                                        }}
                                    >
                                        Are you sure Delete?
                                    </div>
                                    <div class='modal-footer'>
                                        <button
                                            type='button'
                                            class='btn btn-secondary'
                                            data-dismiss='modal'
                                            onClick={() => {
                                                setOpenPopUp(false);
                                            }}
                                        >
                                            No
                                        </button>
                                        <button
                                            type='button'
                                            class='btn btn-danger'
                                            data-dismiss='modal'
                                            onClick={() => deleteRecord(deleteRowId)}
                                        >
                                            Yes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserTable;
