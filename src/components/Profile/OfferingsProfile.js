import { Modal, Spin, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./offeringProfile.css";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import { createAlert } from "../../Redux/Alert";
import { Link } from "react-router-dom";
import { Cities } from "../../data";

const OfferingsProfile = () => {
  let submitBtn = useRef();
  const dispatch = useDispatch();
  const token = localStorage.getItem("authtoken");
  const session = useSelector((state) => state.session.session);
  const [allofferings, setallofferings] = useState([]);
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [offeringdata, setofferingdata] = useState({
    offeringName: "",
    startDate: "",
    endDate: "",
    target: "",
    minInvestment: 0,
    maxInvestment: 0,
    ppUnit: 0,
    issueType: "",
    issuerId: session.user.userId,
  });
  const [featuredImage, setfeaturedImage] = useState();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    submitBtn.click();
  };

  const ChangePriority = (value) => {
    setofferingdata({
      ...offeringdata,
      Priority: value,
    });
  };
  const ChangeCity = (value) => {
    setofferingdata({ ...offeringdata, Location: value });
  };
  const AddOffering = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("featuredImage", featuredImage);
    data.append("Name", offeringdata.Name);
    data.append("Location", offeringdata.Location);
    data.append("Priority", offeringdata.Priority);
    data.append("Description", offeringdata.Description);

    await toast.promise(
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/api/offerings/addoffering`,
          data,
          { headers: { token: token } }
        )
        .then((result) => {
          setOpen(false);
          setConfirmLoading(false);
          FetchMyProblems();
        })
        .catch((err) => {
          setConfirmLoading(false);
        }),
      {
        pending: "Adding Offering Please Wait",
        success: "Your Offering Has been added Successfully",
        error: "Error in creating your offering! Try Again",
      },
      { autoClose: 3000, closeOnClick: true, pauseOnHover: false }
    );
  };
  const FetchMyProblems = () => {
    setloading(true);
    axios
      .post(
        `http://localhost:5000/api/offerings/getofferings/${session.user.profileId}`
      )
      .then((result) => {
        console.log(result);
        setallofferings(result.data.offerings);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong! Try Again",
          })
        );
      });
  };

  const deleteOffering = async (id) => {
    axios
      .post("http://localhost:5000/api/offerings/deleteoffering", { id })
      .then((result) => {
        dispatch(
          createAlert({
            type: "success",
            message: "Problem Deleted Successfully",
          })
        );
        FetchMyProblems();
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong! Try Again",
          })
        );
      });
  };
  useEffect(() => {
    FetchMyProblems();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="oofering-container">
      {loading ? (
        <div className="h-[30vh] flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading your Problems</h2>
        </div>
      ) : (
        <div className="bg-white">
          <div
            // style={{
            //   boxShadow:
            //     "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
            // }}
            className="w-full shadow-md rounded-lg border bg-white px-5 py-5"
          >
            <div className="md:flex p-4 md:justify-between">
              <div className="md:w-3/5">
                <h1 className="font-large text-lg font-bold text-black">
                  Your Problems
                </h1>
                <p>All of Your Problems Posted By lies here</p>
              </div>

              <div className="md:w-1/5 pl-0 p-4 md:flex md:justify-end">
                <button
                  onClick={showModal}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add New Problem
                </button>
                <Modal
                  title="Add New Problem"
                  open={open}
                  onOk={handleOk}
                  onCancel={() => setOpen(false)}
                  confirmLoading={confirmLoading}
                  width={900}
                  style={{ top: 20 }}
                  okText="Add New Problem"
                >
                  <div>
                    <form onSubmit={(e) => AddOffering(e)}>
                      <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                        <dl className="space-y-2 md:grid md:grid-cols-4 md:gap-x-5 md:gap-y-5">
                          <div className="col-span-4">
                            <label>Problem Title</label>
                            <input
                              required
                              type="text"
                              name="offering-name"
                              value={offeringdata.Name}
                              onChange={(e) => {
                                setofferingdata({
                                  ...offeringdata,
                                  Name: e.target.value,
                                });
                              }}
                              className="mt-1 mb-1 w-full  rounded p-2"
                            />
                          </div>
                          <div className="col-span-2">
                            <label>Location</label>
                            <Select
                              allowClear
                              showSearch
                              // defaultValue="Select City"
                              placeholder="Select City"
                              style={{ width: "100%" }}
                              onChange={ChangeCity}
                              size="large"
                              options={Cities.map((city) => {
                                return {
                                  value: city,
                                  label: city,
                                };
                              })}
                            />
                            {/* <input
                            required
                            type="text"
                            value={offeringdata?.Location}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                Location: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          /> */}
                          </div>
                          <div className="col-span-2">
                            {/* <label>
                            Priority (0 for Low, 1 For Medium, 2 For High)
                          </label>
                          <input
                            required
                            type="text"
                            value={offeringdata?.Priority}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                Priority: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          /> */}
                            <label className="">SelectPriority</label>
                            <Select
                              defaultValue="Select"
                              size="large"
                              aria-required
                              style={{ width: "100%", marginTop: "4px" }}
                              className=" w-full  rounded p-2"
                              onChange={ChangePriority}
                              options={[
                                { value: "0", label: "Low" },
                                { value: "1", label: "Medium" },
                                { value: "2", label: "High" },
                              ]}
                            />
                          </div>

                          <div className="col-span-4">
                            <label>Description</label>
                            <textarea
                              required
                              rows={6}
                              value={offeringdata.Description}
                              onChange={(e) => {
                                setofferingdata({
                                  ...offeringdata,
                                  Description: e.target.value,
                                });
                              }}
                              className="mt-1 mb-1 w-full  rounded p-2"
                            ></textarea>
                          </div>

                          <div>
                            <label>Featured Image</label>
                            <input
                              required
                              type="file"
                              name="myfile"
                              accept="image/*"
                              onChange={(e) =>
                                setfeaturedImage(e.target.files[0])
                              }
                            />
                          </div>
                        </dl>
                      </div>
                      <div className="hidden bg-gray-200 px-4 py-3 text-right">
                        {/* <button
                      type="button"
                      className="mr-2 rounded bg-gray-500 py-2 px-4 text-white hover:bg-gray-700"
                      //   onClick={() => toggleModal(false)}
                    >
                      <i className="fas fa-times"></i> Cancel
                    </button> */}
                        <button
                          ref={(elem) => (submitBtn = elem)}
                          type="submit"
                          className="hidden mr-2 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
                        >
                          <i className="fas fa-plus"></i> Create
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
          {allofferings.length > 0 ? (
            <div className="p-2">
              <table className="md:min-w-full table rounded border">
                <thead>
                  <tr>
                    <th className="hidden md:block border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      S#
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Name
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Priority
                    </th>
                    <th className="hidden md:block border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Location
                    </th>
                    <th className="hidden md:block border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
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
                      <td className="hidden md:block py-3 px-5">
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
                      <td className="py-3 px-5 hidden md:block">
                        {offering.Location}
                      </td>

                      <td className="py-3 px-5 hidden md:block">
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

                      <td className="py-3 md:px-5 flex items-center gap-x-2">
                        {/* eslint-disable-next-line */}
                        <Link
                          to={`/problems/${offering._id}`}
                          className={`delete-btn bg-[#fff5f8] p-2 rounded-lg hover:bg-[#f1416c]`}
                        >
                          <AiFillEye
                            size={20}
                            className="delete-icon text-[#f1416c]"
                          />
                        </Link>
                        {/* <a
                          href="/"
                          className="edit-btn p-2 rounded-lg bg-[#fff8dd] hover:bg-[#ffc700]"
                        >
                          <AiFillEdit
                            size={20}
                            className="text-[#ffc700] edit-icon"
                          />
                        </a> */}
                        {/* eslint-disable-next-line */}
                        <div
                          onClick={() => deleteOffering(offering._id)}
                          className={`delete-btn bg-[#fff5f8] p-2 rounded-lg hover:bg-[#f1416c] cursor-pointer`}
                        >
                          <MdDelete
                            size={20}
                            className="delete-icon text-[#f1416c]"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h1 className="text-[15px] font-bold text-red-500">
              You Have not added any problem Yet
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default OfferingsProfile;
