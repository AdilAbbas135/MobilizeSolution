import axios from "axios";
import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createAlert } from "../../Redux/Alert";
import { CircularProgress } from "@mui/material";
const FeaturedJobs = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const [Problems, setProblems] = useState([]);

  const FetchProblems = () => {
    setloading(true);
    axios
      .get(`http://localhost:5000/api/find/homeproblems`)
      .then((result) => {
        console.log(result);
        setProblems(result.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong while fetch problems",
          })
        );
      });
  };
  // const jobs = [
  //   {
  //     ProfilePicture: "/assets/img 1.jpeg",
  //     JobTitle: "Problem Title 1",
  //     Dscription:
  //       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum natus molestias pariatur rerum ipsa quisquam corrupti eveniet incidunt nesciunt assumenda excepturi dicta odio, rem nostrum placeat repudiandae laboriosam officiis voluptas.",
  //     Location: "Phalia, Punjab, Pakistan",
  //     "Institute name": "Punjab College Phalia",
  //     JobType: "High",
  //   },
  //   {
  //     ProfilePicture: "/assets/img 1.jpeg",
  //     JobTitle: "Problem Title 2",
  //     Dscription:
  //       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum natus molestias pariatur rerum ipsa quisquam corrupti eveniet incidunt nesciunt assumenda excepturi dicta odio, rem nostrum placeat repudiandae laboriosam officiis voluptas.",
  //     Location: "Phalia, Punjab, Pakistan",
  //     "Institute name": "Punjab College Phalia",
  //     JobType: "Low",
  //   },
  //   {
  //     ProfilePicture: "/assets/img 1.jpeg",
  //     JobTitle: "Problem Title 3",
  //     Dscription:
  //       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum natus molestias pariatur rerum ipsa quisquam corrupti eveniet incidunt nesciunt assumenda excepturi dicta odio, rem nostrum placeat repudiandae laboriosam officiis voluptas.",
  //     Location: "Phalia, Punjab, Pakistan",
  //     "Institute name": "Punjab College Phalia",
  //     JobType: "High",
  //   },
  //   {
  //     ProfilePicture: "/assets/img 1.jpeg",
  //     JobTitle: "Problem Title 4",
  //     Dscription:
  //       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum natus molestias pariatur rerum ipsa quisquam corrupti eveniet incidunt nesciunt assumenda excepturi dicta odio, rem nostrum placeat repudiandae laboriosam officiis voluptas.",
  //     Location: "Phalia, Punjab, Pakistan",
  //     "Institute name": "Punjab College Phalia",
  //     JobType: "High",
  //   },
  // ];

  useEffect(() => {
    FetchProblems();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="px-5 w-full max-w-7xl mx-auto">
        <div className="mt-10 mb-5 flex justify-between items-center">
          <h1 className="pb-1 w-fit h-fit text-2xl md:text-3xl font-bold font-sans uppercase border-b-2 border-search_color">
            Latest Problems Around You
          </h1>
          <button className="hidden md:block px-10 py-2 bg-hover_color text-white font-semibold rounded-sm">
            View More
          </button>
        </div>
        {loading ? (
          <div className="flex items-center gap-2">
            <CircularProgress size={20} /> Loading{" "}
          </div>
        ) : (
          <div className="grid grid-cols-1 tablets:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 text-black ">
            {Problems.map((problem, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col rounded-md overflow-hidden shadow-sm border border-gray-300 h-fit"
                >
                  <img
                    height={200}
                    width={300}
                    className="h-[150px] w-full object-cover"
                    src={problem?.featuredImage}
                    alt=""
                  />
                  <div className="detailContainer px-5 py-3 pb-5">
                    <h1 className="fpName text-2xl uppercase font-bold font-sans ">
                      {problem?.Name.length > 30 ? (
                        <span>{problem?.Name.substring(0, 30)} ...</span>
                      ) : (
                        problem?.Name
                      )}{" "}
                    </h1>
                    <p className="">
                      {problem?.Description.length > 100
                        ? problem?.Description.substring(0, 100)
                        : problem?.Description}{" "}
                      ...
                    </p>
                    <div className="mt-3 flex items-center text-[15px] space-x-1">
                      <MdLocationOn size={17} />
                      <p className="mb-0">{problem.Location}</p>
                    </div>
                    <div className="mt-3 flex items-center text-[15px] space-x-1">
                      <VscTypeHierarchySub size={17} />
                      <p className="mb-0">
                        {problem?.Priority === 0 && <span>Low </span>}
                        {problem?.Priority === 1 && <span>Medium</span>}
                        {problem?.Priority === 2 && <span>High</span>}
                      </p>
                    </div>
                    {/* <div className="mt-2 flex space-x-1 flex-wrap">
                    {teacher.Subjects.map((subject, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-main_color_2 px-4 py-1 rounded-md"
                        >
                          <p className="text-sm">{subject}</p>
                        </div>
                      );
                    })}
                  </div> */}
                    <Link to={`/problems/${problem?._id}`}>
                      <button className="mt-4 w-full py-2 bg-cr-primary text-white font-semibold rounded-sm">
                        View Problem
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FeaturedJobs;
