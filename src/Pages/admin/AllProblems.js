import React from "react";
import "./offeringProfile.css";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const AllProblems = () => {
  const currentMode = "light";
  const allofferings = useSelector(
    (state) => state.AdminDashboardData?.Problems
  );

  const deleteOffering = async (id) => {
    await toast.promise(
      axios
        .post("http://localhost:5000/api/offerings/deleteoffering", { id })
        .then((result) => {
          // FetchAllProblems();
        })
        .catch((err) => {}),
      {
        pending: "Deleting Offering Please Wait",
        success: "Offering Deleted Successfully",
        error: "Error in Deleting offering! Try Again",
      },
      { autoClose: 3000, closeOnClick: true, pauseOnHover: false }
    );
  };

  const DataGridStyles = {
    "& .MuiButtonBase-root": {
      color: "white",
    },
    // TOOLBAR COLORS
    "& .MuiDataGrid-toolbarContainer": {
      backgroundColor: currentMode === "dark" ? "#212121" : "#000000",
      // backgroundColor: "#3b3d44",
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    // TOOLBAR BUTTON
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiInputBase-root::before": {
      color: "white",
      // borderColor: "white",
    },
    "& .MuiInputBase-root:hover::before": {
      color: "white",
      // borderColor: "white",
    },

    // Background color of header of data grid
    "& .MuiDataGrid-columnHeaders": {
      border: "none",
      backgroundColor: "#4b1dff",
      color: currentMode === "dark" ? "white" : "white",
      fontWeight: 700,
    },
    "& .MuiIconButton-sizeSmall": {
      color: currentMode === "dark" ? "white" : "white",
    },
    // background color of main table content
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: currentMode === "dark" ? "#212121" : "#ffffff",
      color: currentMode === "dark" ? "white" : "black",
    },
    // changing rows hover color
    "& .css-1uhmucx-MuiDataGrid-root,& .MuiDataGrid-row:hover": {
      backgroundColor: currentMode === "dark" && "#000000",
      border: "none",
    },
    // changing row colors
    "& .even": {
      backgroundColor: currentMode === "dark" ? "#212121" : "#ffffff",
    },
    // changing rows right border
    // "& .MuiDataGrid-cell": {
    //   borderRight: "1px solid rgb(240, 240, 240)",
    // },
    // BACKGROUND COLOR OF FOOTER
    "& .MuiDataGrid-footerContainer": {
      border: "none",
      backgroundColor: "#4b1dff",
      color: "white",
    },
    "& .MuiTablePagination-selectLabel": {
      color: "white",
    },
    "& .MuiTablePagination-select ": { color: "white" },
    "& .MuiSvgIcon-fontSizeMedium ": { color: "white" },
    "& .MuiTablePagination-displayedRows": { color: "white" },
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      // width: 150,
      minWidth: 80,
      // flex: 1,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            className={`${
              currentMode === "dark" ? "bg-gray-800" : "bg-gray-200"
            } w-full h-full flex justify-center items-center px-5 font-semibold`}
          >
            1
          </div>
        );
      },
    },
    {
      field: "Name",
      headerName: "Name",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "Priority",
      headerName: "Priority",
      headerAlign: "center",
      width: 100,
      renderCell: (cellValues) => {
        return (
          <div className="mx-auto">
            {cellValues?.row?.Priority === 0 && (
              <span className="bg-green-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                Low
              </span>
            )}
            {cellValues?.row?.Priority === 1 && (
              <span className="bg-blue-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                Medium
              </span>
            )}
            {cellValues?.row?.Priority === 2 && (
              <span className="bg-red-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                High
              </span>
            )}
          </div>
        );
      },
    },
    {
      field: "Location",
      headerName: "Location",
      headerAlign: "center",
      minWidth: 200,
    },
    {
      field: "Status",
      headerName: "Status",
      minWidth: 150,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div className="mx-auto">
            {cellValues?.row?.Status === 0 && (
              <span className="bg-red-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                Pending
              </span>
            )}
            {cellValues?.row?.Status === 1 && (
              <span className="bg-blue-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                In Progress
              </span>
            )}
            {cellValues?.row?.Status === 2 && (
              <span className="bg-green-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                Completed
              </span>
            )}
          </div>
        );
      },
    },
    {
      field: "Votes",
      headerName: "Votes",
      minWidth: 80,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            className={`${
              currentMode === "dark" ? "bg-gray-800" : "bg-gray-200"
            } w-full h-full flex justify-center items-center px-5 font-semibold`}
          >
            {cellValues.row?.votes?.length}
          </div>
        );
      },
    },
    {
      field: "Comments",
      headerName: "Comments",
      minWidth: 80,
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <div
            className={`${
              currentMode === "dark" ? "bg-gray-800" : "bg-gray-200"
            } w-full h-full flex justify-center items-center px-5 font-semibold`}
          >
            {cellValues.row?.replies?.length}
          </div>
        );
      },
    },
    {
      field: "Actions",
      headerName: "Actions",
      headerAlign: "center",
      minWidth: 110,
      renderCell: (cellValues) => {
        return (
          <div className="w-full flex items-center">
            <Link
              to={`/admin-dashboard/${cellValues?.row?._id}`}
              className={`w-full delete-btn bg-[#fff5f8] py-2 rounded-lg hover:bg-[#f1416c] text-[#f1416c] hover:text-white font-bold flex items-center justify-center gap-1 transition-all`}
            >
              <AiFillEye size={20} className="delete-icon" />{" "}
              <span className="">View</span>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="oofering-container">
      <div className="w-full shadow-md rounded-lg border bg-white px-5 py-5">
        <div className="flex p-4 justify-between">
          <div className="w-3/5">
            <h1 className="font-large text-lg font-bold text-black">
              All Problems
            </h1>
            <p>All Problems Posted By Anyone lies here</p>
          </div>
        </div>
        <Box width={"100%"} sx={DataGridStyles}>
          <DataGrid
            autoHeight
            width="auto"
            pagination
            rows={allofferings}
            getRowId={(row) => row._id}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10, 30, 50, 100]}
            disableRowSelectionOnClick
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
        {/* {allofferings.length > 0 ? (
            <div className="p-2">
              <table className="min-w-full rounded border">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      S#
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Name
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Priority
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Location
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Status
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allofferings.map((offering, index) => (
                    <tr className="border-b" key={index}>
                      <td className="py-3 px-5">
                        <div className="flex">
                          <div className="pl-2 pt-1">{index + 1}</div>
                        </div>
                      </td>
                      <td className="py-3 px-5">{offering?.Name}</td>
                      <td className="py-3 px-5">
                        {offering?.Priority === 0 && (
                          <span className="bg-green-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                            Low
                          </span>
                        )}
                        {offering?.Priority === 1 && (
                          <span className="bg-blue-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                            Medium
                          </span>
                        )}
                        {offering?.Priority === 2 && (
                          <span className="bg-red-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                            High
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-5">{offering.Location}</td>

                      <td className="py-3 px-5">
                        {offering?.Status === 0 && (
                          <span className="bg-red-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                            Pending
                          </span>
                        )}
                        {offering?.Status === 1 && (
                          <span className="bg-blue-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                            In Progress
                          </span>
                        )}
                        {offering?.Status === 2 && (
                          <span className="bg-green-500 py-2 px-3 rounded-md text-white text-sm font-semibold">
                            Completed
                          </span>
                        )}
                      </td>

                      <td className="py-3 px-5 flex">
                        <Link
                          to={`/admin-dashboard/${offering?._id}`}
                          className="edit-btn p-2 rounded-lg bg-[#fff8dd] hover:bg-[#ffc700]"
                        >
                          <AiFillEdit
                            size={20}
                            className="text-[#ffc700] edit-icon"
                          />
                        </Link>
                       
                        <a
                          onClick={() => deleteOffering(offering._id)}
                          className={`delete-btn ml-2 bg-[#fff5f8] p-2 rounded-lg hover:bg-[#f1416c]`}
                        >
                          <MdDelete
                            size={20}
                            className="delete-icon text-[#f1416c]"
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h1>No Problems to Show</h1>
          )} */}
      </div>
    </div>
  );
};

export default AllProblems;
