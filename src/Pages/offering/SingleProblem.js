import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Header from "../../components/navigation/Header";
import Footer from "../../components/navigation/Footer/Footer";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { createAlert } from "../../Redux/Alert";
import axios from "axios";
import { FaVoteYea } from "react-icons/fa";
import { BsArrowUpCircle } from "react-icons/bs";

const SingleProblem = () => {
  const token = localStorage.getItem("authtoken");
  const location = useLocation();
  const dispatch = useDispatch();
  const ProblemId = location.pathname.split("/").slice(-1);
  const session = useSelector((state) => state.session.session);
  const [pageLoading, setpageLoading] = useState(true);
  const [Discussion, setDiscussion] = useState({});
  const [Answers, setAnswers] = useState([]);
  const [AnswerValue, setAnswerValue] = useState("");
  const [btnloading, setbtnloading] = useState(false);
  const [Votes, setVotes] = useState(0);
  const [isAlreadyApplied, setisAlreadyApplied] = useState(false);

  const FetchReplies = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/find/replies?ProblemId=${ProblemId}`,
        { profileId: session?.user?.profileId }
      )
      .then((result) => {
        console.log(result);
        setDiscussion(result.data.Problem);
        setAnswers(result.data.Replies);
        setVotes(result.data.Votes);
        setisAlreadyApplied(result.data?.isAlreadyApplied?._id ? true : false);
        setpageLoading(false);
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          createAlert({
            type: "error",
            message: error?.response?.data?.error
              ? error?.response?.data?.error
              : "Something went wrong! Try again later",
          })
        );
      });
  };

  const SubmitAnswer = async () => {
    setbtnloading(true);
    const Data = { Answer: AnswerValue };
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/offerings/post-reply?DiscussionId=${ProblemId}`,
        Data,
        { headers: { token: token } }
      )
      .then((result) => {
        console.log(result);
        dispatch(
          createAlert({
            type: "success",
            message: "Posted Successfully",
          })
        );
        setbtnloading(false);
        setAnswerValue("");
        FetchReplies();
      })
      .catch((error) => {
        console.log(error);
        setbtnloading(false);
        dispatch(
          createAlert({
            type: "error",
            message: error?.response?.data?.error
              ? error?.response?.data?.error
              : "Something went wrong",
          })
        );
      });
  };
  const GiveVote = async (type) => {
    setbtnloading(true);
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/offerings/post-vote?DiscussionId=${ProblemId}`,
        { Vote: type },
        { headers: { token: token } }
      )
      .then((result) => {
        setVotes(Votes + 1);
        console.log(result);
        dispatch(
          createAlert({
            type: "success",
            message: "Vote Added Successfully",
          })
        );
        setbtnloading(false);
        FetchReplies();
      })
      .catch((error) => {
        console.log(error);
        setbtnloading(false);
        dispatch(
          createAlert({
            type: "error",
            message: error?.response?.data?.error
              ? error?.response?.data?.error
              : "Something went wrong",
          })
        );
      });
  };
  useEffect(() => {
    FetchReplies();
    //eslint-disable-next-line
  }, []);

  const GiveReplyVote = async (AnswerId, Vote) => {
    setbtnloading(true);
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/offerings/post-reply-vote?DiscussionId=${ProblemId}`,
        { Vote: Vote, AnswerId },
        { headers: { token: token } }
      )
      .then((res) => {
        setbtnloading(false);
        FetchReplies();
        console.log(res);
        dispatch(
          createAlert({
            type: "success",
            message: "Vote Added Successfully",
          })
        );
      })
      .catch((error) => {
        console.log(error);
        setbtnloading(false);
        dispatch(
          createAlert({
            type: "error",
            message: error?.response?.data?.error
              ? error?.response?.data?.error
              : "Something went wrong",
          })
        );
      });
  };

  return (
    <>
      {pageLoading ? (
        <div className="h-[100vh] w-full flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading...</h2>
        </div>
      ) : (
        <>
          <Header page={"singlequestion"} />
          <div className="my-10 sm:mx-6 lg:mx-auto lg:max-w-7xl">
            <div className="mt-5 grid grid-cols-10 gap-x-3">
              <div className="col-span-10 border-2 border-gray-200 bg-white p-5 rounded-sm">
                {/* <img
                  src={Discussion.bannerImage}
                  className="h-[300px] w-full object-cover bg-center aspect-1"
                  alt=""
                /> */}
                <div className=" py-5">
                  <div className="qaheader flex space-x-3">
                    <img
                      src={
                        // Discussion?.Student[0]?.ProfilePicture
                        //   ? Discussion?.Student[0]?.ProfilePicture
                        //   :
                        "/assets/logo.png"
                      }
                      alt=""
                      className="h-[45px] w-[45px] rounded-full border-2 border-gray-300 p-[2px]"
                    />
                    <div className="w-full">
                      <div className="w-full flex items-center justify-between">
                        <h1 className="font-semibold text-sm text-text_color_secondary_2 capitalize">
                          {Discussion?.UserDetails[0]?.UserName
                            ? Discussion?.UserDetails[0]?.UserName
                            : "not found"}
                        </h1>
                        <div className="flex items-center gap-4">
                          <p className="flex items-center text-sm text-text_color_secondary_2">
                            <AiOutlineFieldTime
                              size={20}
                              className="mr-1 text-cr-primary"
                            />
                            {moment(Discussion?.createdAt).fromNow()}
                          </p>

                          <p className="flex items-center text-sm text-text_color_secondary_2">
                            <FaVoteYea
                              size={20}
                              className="mr-1 text-cr-primary"
                            />
                            {Votes} People Voted
                          </p>
                        </div>
                      </div>
                      <h1 className="text-3xl font-bold text-text_color capitalize">
                        {Discussion.Name}
                        {/* This is Problem Title */}
                      </h1>
                      <img
                        src={Discussion.featuredImage}
                        className="h-[300px] w-[300px] object-cover bg-center aspect-1"
                        alt=""
                      />
                      <p className="mt-2">
                        {Discussion.Description}
                        {/* Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis dicta inventore rerum recusandae fuga at
                        aut, placeat accusantium! Repellat illum nulla earum
                        animi numquam repudiandae debitis voluptates? Minus vel
                        hic atque impedit voluptatum, laudantium exercitationem
                        incidunt nobis architecto. Aspernatur dolorem non eaque,
                        maiores est maxime quam sit. Assumenda, minus
                        voluptatibus. */}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h1 className=" text-xl font-bold text-text_color capitalize">
                      Vote This Problem
                    </h1>
                    {token ? (
                      <>
                        <div className="mt-3 flex items-center space-x-2">
                          <img
                            src={"/assets/logo.png"}
                            alt=""
                            className="h-[50px] w-[50px] rounded-full border-2 border-gray-300 p-[2px]"
                          />
                          <Button
                            onClick={() => GiveVote(1)}
                            disabled={
                              btnloading || isAlreadyApplied ? true : false
                            }
                            className="bg-cr-primary text-white transition-all hover:bg-cr-primary hover:text-white px-5 py-2 rounded-sm shadow-none hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {btnloading ? (
                              <CircularProgress
                                size={18}
                                disableShrink
                                sx={{ color: "white" }}
                              />
                            ) : (
                              <span className=" flex items-center justify-center">
                                <AiOutlineArrowUp size={15} /> Up
                              </span>
                            )}
                          </Button>
                          <Button
                            onClick={() => GiveVote(0)}
                            disabled={
                              btnloading || isAlreadyApplied ? true : false
                            }
                            className="bg-red-500  text-white transition-all px-5 py-2 rounded-sm shadow-none hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {btnloading ? (
                              <CircularProgress
                                size={18}
                                disableShrink
                                sx={{ color: "white" }}
                              />
                            ) : (
                              <span className=" flex items-center justify-center">
                                <AiOutlineArrowDown size={15} /> Low
                              </span>
                            )}
                          </Button>
                        </div>
                        {isAlreadyApplied && (
                          <p className="text-red-500 italic text-sm">
                            You Have Already Voted to this Problem
                          </p>
                        )}
                      </>
                    ) : (
                      <Link to={"/auth/signin"}>
                        <Button className="bg-transparent border-2 border-cr-primary text-cr-primary transition-all hover:bg-cr-primary hover:text-white px-5 py-2 rounded-sm shadow-none hover:shadow-none">
                          Sign In to Vote
                        </Button>
                      </Link>
                    )}
                  </div>
                  <div className="mt-5">
                    <h1 className=" text-xl font-bold text-text_color capitalize">
                      Show Your Support
                    </h1>
                    {token ? (
                      <div className="mt-3 flex items-center space-x-2">
                        <img
                          src={
                            // Discussion?.Student[0]?.ProfilePicture
                            //   ? Discussion?.Student[0]?.ProfilePicture
                            //   :
                            "/assets/logo.png"
                          }
                          alt=""
                          className="h-[50px] w-[50px] rounded-full border-2 border-gray-300 p-[2px]"
                        />
                        <div className="w-full">
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              SubmitAnswer();
                            }}
                          >
                            <textarea
                              rows={5}
                              value={AnswerValue}
                              required
                              onChange={(e) => setAnswerValue(e.target.value)}
                              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none"
                            />
                            <Button
                              type="submit"
                              disabled={btnloading ? true : false}
                              className="bg-cr-primary border-2 border-cr-primary text-white transition-all hover:bg-cr-primary hover:text-white px-5 py-2 rounded-sm shadow-none hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {btnloading ? (
                                <CircularProgress
                                  size={18}
                                  disableShrink
                                  sx={{ color: "white" }}
                                />
                              ) : (
                                <>Support</>
                              )}
                            </Button>
                            {/* <div className="flex items-center space-x-2">
                          <TextField
                            id="standard-basic"
                            label="Post Your Answer"
                            variant="outlined"
                            className="w-full"
                          />
                          <Button className="bg-transparent border-2 border-cr-primary text-cr-primary transition-all hover:bg-cr-primary hover:text-white px-10 py-2 rounded-sm shadow-none hover:shadow-none">
                            Post
                          </Button>
                        </div> */}
                          </form>
                        </div>
                      </div>
                    ) : (
                      <Link to={"/auth/signin"}>
                        <Button className="bg-transparent border-2 border-cr-primary text-cr-primary transition-all hover:bg-cr-primary hover:text-white px-5 py-2 rounded-sm shadow-none hover:shadow-none">
                          Sign In to Post Your Answer
                        </Button>
                      </Link>
                    )}
                  </div>
                  <div className="mt-5 bg-gray-100 py-3">
                    <h1 className="px-5 rounded-sm text-xl font-bold text-text_color_secondary capitalize">
                      {Answers.length} People Supported
                    </h1>
                  </div>
                  {Answers.length > 0 &&
                    Answers.map((Answer, index) => {
                      return (
                        <div key={index} className="border-b py-5">
                          <div className="qaheader flex space-x-3">
                            <div className="flex flex-col space-y-2">
                              <img
                                src={"/assets/logo.png"}
                                alt=""
                                className="h-[45px] w-[45px] rounded-full border-2 border-gray-300 p-[2px]"
                              />
                            </div>
                            <div className="w-full">
                              <div className="w-full flex items-center justify-between">
                                <h1 className="font-semibold text-[18px] text-text_color_secondary_2 uppercase">
                                  {Answer.UserDetails?.[0]?.UserName}
                                </h1>
                                <p className="flex items-center text-sm text-text_color_secondary_2">
                                  <AiOutlineFieldTime
                                    size={20}
                                    className="mr-1 text-cr-primary"
                                  />
                                  {moment(Answer?.createdAt).fromNow()}{" "}
                                  {/* 2 days ago */}
                                </p>
                              </div>
                              <p className="mt-2 text-[16px]">
                                {Answer?.Answer}
                              </p>
                              <div className="flex items-center gap-3">
                                <Button
                                  onClick={() => GiveReplyVote(Answer?._id, 1)}
                                  disabled={
                                    btnloading ||
                                    Answer?.Votes?.some(function (obj) {
                                      return (
                                        obj?.profileId ===
                                        session?.user?.profileId
                                      );
                                    })
                                      ? true
                                      : false
                                  }
                                  className="bg-cr-primary text-white transition-all hover:bg-cr-primary hover:text-white px-5 py-2 rounded-sm shadow-none hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  {btnloading ? (
                                    <CircularProgress
                                      size={18}
                                      disableShrink
                                      sx={{ color: "white" }}
                                    />
                                  ) : (
                                    <span className=" flex items-center justify-center">
                                      <AiOutlineArrowUp size={15} /> Up
                                    </span>
                                  )}
                                </Button>

                                <p className="mb-0 px-4 border-2 border-cr-primary font-bold text-[16px] text-cr-primary">
                                  {Answer?.Votes?.length
                                    ? Answer?.Votes?.length
                                    : 0}
                                </p>
                                <Button
                                  onClick={() => GiveReplyVote(Answer?._id, 0)}
                                  disabled={
                                    btnloading ||
                                    Answer?.Votes?.some(function (obj) {
                                      return (
                                        obj?.profileId ===
                                        session?.user?.profileId
                                      );
                                    })
                                      ? true
                                      : false
                                  }
                                  className="bg-red-500  text-white transition-all px-5 py-2 rounded-sm shadow-none hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  {btnloading ? (
                                    <CircularProgress
                                      size={18}
                                      disableShrink
                                      sx={{ color: "white" }}
                                    />
                                  ) : (
                                    <span className=" flex items-center justify-center">
                                      <AiOutlineArrowDown size={15} /> Low
                                    </span>
                                  )}
                                </Button>
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
          <Footer />
        </>
      )}
    </>
  );
};

export default SingleProblem;
