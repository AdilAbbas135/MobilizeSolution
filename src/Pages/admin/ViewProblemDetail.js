import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { Button } from "@material-tailwind/react";
import { createAlert } from "../../Redux/Alert";
import Header from "../../components/navigation/Header";
import { FaLocationArrow } from "react-icons/fa";
import { TbMilitaryRank } from "react-icons/tb";
import { AiFillClockCircle } from "react-icons/ai";
import { SiStatuspal } from "react-icons/si";

const ViewProblemDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("admin-token");
  const session = useSelector((state) => state.session.session.user);
  const [Problem, setProblem] = useState({});
  const [YesVotes, setYesVotes] = useState(0);
  const [loading, setloading] = useState(true);
  const [Priority, setPriority] = useState(Problem?.Priority);
  const [Status, setStatus] = useState(Problem?.Status);
  const [btnloading, setbtnloading] = useState(false);

  // DELETE CONFIRM DIALOG
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
  };
  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  };

  const ChangePriority = (event) => {
    setPriority(event.target.value);
  };
  const ChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const UpdateProblem = async () => {
    setbtnloading(true);
    await axios
      .post(
        `${
          process.env.REACT_APP_BACKEND_URL
        }/api/admin/offerings/${location.pathname.split("/").slice(-1)}/update`,
        { Priority, Status },
        { headers: { token: token } }
      )
      .then((response) => {
        setbtnloading(false);
        console.log(response);
        dispatch(
          createAlert({
            type: "success",
            message: "Probem Updated successfully",
          })
        );
        FetchProblem();
      })
      .catch((err) => {
        console.log(err);
        setbtnloading(false);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong! Reload the Page",
          })
        );
      });
  };

  const DeleteProblem = async () => {
    setbtnloading(true);
    await axios
      .post(
        `${
          process.env.REACT_APP_BACKEND_URL
        }/api/admin/offerings/${location.pathname.split("/").slice(-1)}/delete`,
        {},
        { headers: { token: token } }
      )
      .then((response) => {
        setbtnloading(false);
        console.log(response);
        dispatch(
          createAlert({
            type: "success",
            message: "Probem Deleted successfully",
          })
        );
        navigate("/admin-dashboard");
      })
      .catch((err) => {
        console.log(err);
        setbtnloading(false);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong! Reload the Page",
          })
        );
      });
  };
  const FetchProblem = async () => {
    setloading(true);
    await axios
      .post(
        `${
          process.env.REACT_APP_BACKEND_URL
        }/api/admin/offerings/${location.pathname.split("/").slice(-1)}`,
        {},
        { headers: { token: token } }
      )
      .then((response) => {
        console.log(response);
        setProblem(response.data?.Problem);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong! Reload the Page",
          })
        );
      });
  };
  useEffect(() => {
    FetchProblem();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (Problem?.Votes) {
      for (let index = 0; index < Problem?.Votes.length; index++) {
        if (Problem.Votes[index].Vote === 1) {
          setYesVotes(YesVotes + 1);
        }
      }
    }
    //eslint-disable-next-line
  }, [Problem]);

  return (
    <>
      <Header />
      <div className="mt-10 pb-10 grid grid-cols-2 gap-4 w-full max-w-7xl mx-auto">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-900">Problem Details:</h1>
          <div className="question p-5 bg-white border-2 border-gray-200 rounded-md flex flex-col space-y-2">
            {loading ? (
              <>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "30px", lineHeight: "30px" }}
                />
                <Skeleton variant="text" sx={{ fontSize: "10px" }} />
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%" }}
                  height={60}
                />
                <div className="mt-10 cta flex items-center space-x-2">
                  <Skeleton variant="rectangular" width={100} height={50} />
                  <Skeleton variant="rectangular" width={100} height={50} />
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900">
                  {Problem?.Name}
                </h1>
                <p className="text-lg">
                  {Problem?.Description
                    ? Problem?.Description
                    : "No Description Found"}
                </p>

                <div className="pt-5 pb-5 space-y-3">
                  <div className="flex items-center gap-2 text-[15px]">
                    <AiFillClockCircle size={18} className="text-cr-primary" />
                    <p className="mb-0">
                      {moment(Problem?.createdAt).format("MMMM DD, YYYY")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[15px]">
                    <FaLocationArrow size={18} className="text-cr-primary" />
                    <p className="mb-0">{Problem?.Location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[15px]">
                    <TbMilitaryRank size={18} className="text-cr-primary" />
                    <p className="mb-0">
                      {Problem?.Priority === 0 && <span>Low</span>}
                      {Problem?.Priority === 1 && <span>Medium</span>}
                      {Problem?.Priority === 2 && <span>High</span>}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[15px]">
                    <SiStatuspal size={18} className="text-cr-primary" />
                    <p className="mb-0">
                      {Problem?.Status === 0 && <span>Pending</span>}
                      {Problem?.Status === 1 && <span>In Progress</span>}
                      {Problem?.Status === 2 && <span>Completed</span>}
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-cr-primary underline">
                    Take Action
                  </h1>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      UpdateProblem();
                    }}
                  >
                    <div className="mt-5 space-y-5">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Set Priority
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={Priority}
                          label="Set Priority"
                          onChange={ChangePriority}
                        >
                          <MenuItem value={0}>Low</MenuItem>
                          <MenuItem value={1}>Medium</MenuItem>
                          <MenuItem value={2}>High</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Change Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={Status}
                          label="Change Status"
                          onChange={ChangeStatus}
                        >
                          <MenuItem value={0}>Pending</MenuItem>
                          <MenuItem value={1}>In Progres</MenuItem>
                          <MenuItem value={2}>Completed</MenuItem>
                        </Select>
                      </FormControl>
                      <div className="mt-10 cta flex items-center space-x-2">
                        <Button
                          ripple
                          className="bg-cr-primary text-white px-7 py-4 shadow-none hover:shadow-none font-semibold text-[15px] rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                          type="submit"
                          disabled={btnloading ? true : false}
                        >
                          {btnloading ? (
                            <CircularProgress
                              size={17}
                              sx={{ color: "white" }}
                            />
                          ) : (
                            <span> UPDATE PROBLEM</span>
                          )}
                        </Button>
                        <Button
                          onClick={() => DeleteProblem()}
                          ripple
                          className="bg-red-500 text-white px-6 py-4 shadow-none hover:shadow-none font-semibold text-[15px] rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                          disabled={btnloading ? true : false}
                        >
                          {btnloading ? (
                            <CircularProgress
                              size={17}
                              sx={{ color: "white" }}
                            />
                          ) : (
                            <span>DELETE PROBLEM</span>
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Votes Details</h1>
            <div className=" border-2 border-gray-200 bg-white rounded-md p-5">
              <div className=" flex flex-col space-y-5">
                {loading ? (
                  <>
                    <div className="flex items-center justify-between space-x-3">
                      <div className="flex items-center space-x-1">
                        <Skeleton variant="circular" width={45} height={45} />
                        <Skeleton
                          variant="text"
                          width={100}
                          sx={{ fontSize: "18px", lineHeight: "28px" }}
                        />
                      </div>
                      <div className="buttons flex items-center space-x-2">
                        <Skeleton
                          variant="rectangular"
                          width={100}
                          height={50}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={100}
                          height={50}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="flex items-center justify-between">
                        <h1 className="font-bold text-cr-primary text-lg">
                          Total Votes
                        </h1>
                        <p className="text-lg font-bold">
                          {Problem.Votes.length}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <h1 className="font-bold text-cr-primary text-lg">
                          People Supporting This
                        </h1>
                        <p className="text-lg font-bold">{YesVotes}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <h1 className="font-bold text-cr-primary text-lg">
                          No votes
                        </h1>
                        <p className="text-lg font-bold">
                          {Problem.Votes.length - YesVotes}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Comments</h1>
            <div className="border-2 border-gray-200 bg-white rounded-md p-5">
              <div className=" flex flex-col space-y-5">
                {loading ? (
                  <>
                    <div className="flex items-center justify-between space-x-3">
                      <div className="flex items-center space-x-1">
                        <Skeleton variant="circular" width={45} height={45} />
                        <Skeleton
                          variant="text"
                          width={100}
                          sx={{ fontSize: "18px", lineHeight: "28px" }}
                        />
                      </div>
                      <div className="buttons flex items-center space-x-2">
                        <Skeleton
                          variant="rectangular"
                          width={100}
                          height={50}
                        />
                        <Skeleton
                          variant="rectangular"
                          width={100}
                          height={50}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {Problem?.Replies.length < 1 ? (
                      <h1 className="italic text-red-500 text-[16px] font-bold">
                        No One Commented Till Now
                      </h1>
                    ) : (
                      Problem?.Replies?.map((reply, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between space-x-3"
                          >
                            <div className="flex items-center space-x-1">
                              <img
                                src={"/assets/default_user.png"}
                                alt=""
                                className="h-[50px] w-[50px] rounded-full"
                              />
                              <h1 className="capitalize font-semibold text-[15px] ">
                                {/* {Problem?.Teacher[
                                index
                              ]?.FirstName.toLowerCase() +
                                " " +
                                Problem?.Teacher[index]?.LastName.toLowerCase()} */}
                                {reply.Answer}
                              </h1>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const DeleteDialogue = ({Question}) => {
//   const token = localStorage.getItem("authtoken");
//   const dispatch=useDispatch()
//   const navigate = useNavigate();
//   const [deleteLoading, setdeleteLoading] = useState(false);
//   const CloseRoom = async () => {
//     setdeleteLoading(true);
//     const data = { questionid: Question._id };
//     await axios
//       .post(`${process.env.REACT_APP_BACKEND_URL}/qahub/deletequestion`, data, {
//         headers: { token: token },
//       })
//       .then((response) => {
//         console.log(response);
//         dispatch(
//           createAlert({
//             type: "success",
//             message: "Question Deleted Successfully",
//           })
//         );
//         navigate("/user/student/questions");
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch(
//           createAlert({
//             type: "error",
//             message: "Error in Deleting the Question",
//           })
//         );
//       });
//   };
//   return (
//     <Dialog
//       open={openConfirmModal}
//       onClose={handleCloseConfirmModal}
//       aria-labelledby="alert-dialog-title"
//       aria-describedby="alert-dialog-description"
//     >
//       <div className="px-10 py-5 flex flex-col items-center justify-center space-y-3">
//         <img
//           src="/assets/icons8-warning-shield-64.png"
//           className="h-[100px] w-[100px] object-cover"
//           alt=""
//         />
//         <h1 className="text-2xl font-bold">
//           Do You Really Want to Close the Room?
//         </h1>
//         {/* <p className="px-3 py-1 bg-blue-200 w-fit font-semibold italic rounded-sm">
//         {SelectedTution?.Title}
//       </p> */}
//         <DialogActions>
//           <Button
//             disabled={deleteLoading ? true : false}
//             onClick={handleCloseConfirmModal}
//             className="text-red-500 border border-red-500 px-5 py-3 shadow-none hover:shadow-none"
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={() => {
//               CloseRoom();
//             }}
//             disabled={deleteLoading ? true : false}
//             className="text-white bg-hover_color px-5 py-3 shadow-none hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {deleteLoading ? (
//               <CircularProgress
//                 size={18}
//                 disableShrink
//                 sx={{ color: "white" }}
//               />
//             ) : (
//               <>Confirm</>
//             )}
//           </Button>
//         </DialogActions>
//       </div>
//     </Dialog>
//   );
// };

export default ViewProblemDetail;
