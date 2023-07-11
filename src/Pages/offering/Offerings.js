import React, { useState } from "react";
import { AiOutlineFieldTime, AiOutlineSearch } from "react-icons/ai";
import { HiBookOpen, HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdLocate } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcHighPriority } from "react-icons/fc";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Spin, Select, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Header from "../../components/navigation/Header";
import { createAlert } from "../../Redux/Alert";
import { useDispatch } from "react-redux";
import { FaVoteYea } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { CircularProgress } from "@mui/material";
import { MdOutlineDoneAll, MdPending } from "react-icons/md";
import { SiProgress } from "react-icons/si";

const Offerings = () => {
  const dispatch = useDispatch();
  const [AllProblems, setAllProblems] = useState([]);
  const [loading, setloading] = useState(true);
  const [SearchData, setSearchData] = useState({});
  const [SearchBtnLoading, setSearchBtnLoading] = useState(false);

  const ChangePriority = (value) => {
    setSearchData({ ...SearchData, Priority: value });
  };

  const FetchAllProblems = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/find/problems`)
      .then((response) => {
        console.log(response);
        setAllProblems(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong! Try Again",
          })
        );
      });
  };

  useEffect(() => {
    FetchAllProblems();
    //eslint-disable-next-line
  }, []);

  const SearchProblem = async () => {
    setSearchBtnLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/find/searchproblem`,
        SearchData
      )
      .then((response) => {
        setSearchBtnLoading(false);
        console.log(response);
        setAllProblems(response.data);
      })
      .catch((error) => {
        setSearchBtnLoading(false);
        console.log(error);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong! Try Again",
          })
        );
      });
  };

  return (
    <>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <div className="bg-gray-100">
          <Header />
          <div className="pb-10">
            <div className="w-full mx-auto max-w-7xl pb-10 rounded-b-md">
              <div className="mt-10">
                <h1 className="text-2xl font-bold leading-6 text-gray-900 border-l-4 border-cr-primary pl-2">
                  FIND PROBLEMS AS YOU WANT
                </h1>
                <div
                  className={`mt-5 h-16 bg-white md:flex items-center space-x-2 text-black justify-between px-5 rounded-md w-full`}
                >
                  <div className="w-full flex items-center space-x-2 border-r-2">
                    <Input
                      type="text"
                      size="large"
                      placeholder="Prolem Title"
                      className="w-full"
                      value={SearchData?.Title}
                      onChange={(e) => {
                        setSearchData({ ...SearchData, Title: e.target.value });
                      }}
                      prefix={
                        <AiOutlineSearch className="text-2xl text-gray-400" />
                      }
                    />

                    {/* <input type={"text"} placeholder="Prolem Title" /> */}
                  </div>
                  <div className="w-full flex items-center space-x-2 border-r-2">
                    <Input
                      type="text"
                      size="large"
                      placeholder="Enter Location"
                      className="w-full"
                      value={SearchData?.Location}
                      onChange={(e) => {
                        setSearchData({
                          ...SearchData,
                          Location: e.target.value,
                        });
                      }}
                      prefix={<IoMdLocate className="text-2xl text-gray-400" />}
                    />
                  </div>
                  <div className="w-full flex items-center space-x-2 border-r-2">
                    <HiBookOpen className="text-2xl text-gray-400" />
                    <Select
                      allowClear
                      defaultValue="Select Priority"
                      style={{ width: "100%" }}
                      onChange={ChangePriority}
                      size="large"
                      options={[
                        { value: "0", label: "Low" },
                        { value: "1", label: "Medium" },
                        { value: "2", label: "High" },
                      ]}
                    />
                    {/* <input
                      type={"text"}
                      placeholder="Select Priority"
                      className="w-full"
                      value={SearchData?.Priority}
                      onChange={(e) => {
                        setSearchData({
                          ...SearchData,
                          Priority: e.target.value,
                        });
                      }}
                    /> */}
                  </div>

                  <Button
                    onClick={() => SearchProblem()}
                    className="w-[50%] px-4 bg-cr-primary text-white font-semibold rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={SearchBtnLoading ? true : false}
                  >
                    {SearchBtnLoading ? (
                      <CircularProgress size={"15px"} sx={{ color: "white" }} />
                    ) : (
                      <span> Search</span>
                    )}
                  </Button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-10 gap-x-3">
                <div className="col-span-10 border-2 border-gray-200 bg-white p-5 rounded-sm">
                  <div className="flex justify-between items-center border-b pb-3">
                    <h1 className="font-bold text-text_color_secondary opacity-90 text-lg uppercase">
                      {AllProblems?.length} Problems
                    </h1>
                  </div>
                  <div className="space-y-5">
                    {AllProblems.map((question, index) => {
                      return (
                        <div
                          key={index}
                          className="border-b py-5 px-5 grid grid-cols-10 gap-3 bg-gray-100 rounded-md"
                        >
                          <div className="col-span-3">
                            <img
                              src={question?.featuredImage}
                              className="h-full w-full object-cover"
                              alt=""
                            />
                          </div>
                          <div className="col-span-7 qaheader flex space-x-3">
                            <img
                              src={
                                question?.User[0]?.ProfilePicture
                                  ? `${question?.User[0]?.ProfilePicture}`
                                  : "./assets/logo.png"
                              }
                              alt=""
                              className="h-[45px] w-[45px] rounded-full border-2 border-gray-300 p-[2px] object-cover"
                            />
                            <div className="w-full">
                              <div className="w-full flex items-center justify-between">
                                <h1 className="font-semibold text-sm text-text_color_secondary_2">
                                  By{" "}
                                  {question?.UserDetails[0]?.UserName
                                    ? question?.UserDetails[0]?.UserName
                                    : "Not Found"}
                                </h1>

                                <p className="flex items-center text-sm text-text_color_secondary_2">
                                  <AiOutlineFieldTime
                                    size={20}
                                    className="mr-1 text-cr-primary"
                                  />
                                  {moment(question.createdAt).fromNow()}
                                </p>
                              </div>
                              <Link to={`/problems/${question?._id}`}>
                                <h1 className="text-3xl font-bold text-text_color hover:text-cr-primary transition-all cursor-pointer capitalize">
                                  {question.Name}
                                </h1>
                              </Link>
                              <p className="mt-2">
                                {question.Description.length > 500 ? (
                                  <span>
                                    {question.Description.substring(0, 500)} ...
                                  </span>
                                ) : (
                                  question.Description
                                )}{" "}
                              </p>
                              <div className="mt-2 flex items-center space-x-2">
                                <p className="bg-[rgba(0,116,86,.05)] font-semibold text-cr-primary w-fit flex items-center px-4 py-1 rounded-md">
                                  <HiOutlineLocationMarker
                                    size={18}
                                    className="mr-1"
                                  />{" "}
                                  {question?.Location}
                                </p>
                                <p className="bg-[rgba(0,116,86,.05)] font-semibold text-cr-primary w-fit flex items-center px-4 py-1 rounded-md">
                                  <FcHighPriority size={18} className="mr-1" />
                                  {question?.Priority === 0 && <span>Low</span>}
                                  {question?.Priority === 1 && (
                                    <span>Medium</span>
                                  )}
                                  {question?.Priority === 2 && (
                                    <span>High</span>
                                  )}
                                </p>
                                <p className="bg-[rgba(0,116,86,.05)] font-semibold text-cr-primary w-fit flex items-center px-4 py-1 rounded-md">
                                  {question?.Status === 0 && (
                                    <>
                                      <MdPending size={18} className="mr-1" />
                                      <span>Pending</span>
                                    </>
                                  )}
                                  {question?.Status === 1 && (
                                    <>
                                      <SiProgress size={18} className="mr-1" />
                                      <span>In Progress</span>
                                    </>
                                  )}
                                  {question?.Status === 2 && (
                                    <>
                                      <MdOutlineDoneAll
                                        size={18}
                                        className="mr-1"
                                      />
                                      <span>Completed</span>
                                    </>
                                  )}
                                </p>
                                <p className="bg-[rgba(0,116,86,.05)] font-semibold text-cr-primary w-fit flex items-center px-4 py-1 rounded-md">
                                  <FaVoteYea size={18} className="mr-1" />{" "}
                                  {question?.Votes?.length} votes
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offerings;
