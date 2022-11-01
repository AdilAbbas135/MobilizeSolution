import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../components/navigation/Header";
import { LoadingOutlined } from "@ant-design/icons";

const SingleOrganization = () => {
  const { state } = useLocation();
  const [organization, setorganization] = useState([]);
  const [offerings, setofferings] = useState([]);
  const [loading, setloading] = useState(true);
  const [finduser] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://beta.chainraise.info/manage/api/organizations/listing/${state.id}`
      )
      .then((result) => {
        console.log("the organization result is");
        console.log(result);
        setorganization(result.data.data);
      })
      .catch((err) => {
        toast.error("Something Went Wrong! Reload the Page", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

    axios
      .get(
        `https://beta.chainraise.info/api/organizations/${organization?.id}/offers`
      )
      .then((result) => {
        console.log("offering result is ");
        console.log(result);
        setofferings(result.data?.data?.offers);
        setloading(false);
      })
      .catch((err) => {
        toast.error("Something Went Wrong! Reload the Page", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ToastContainer />
      <Header />
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <div className=" bg-gray-100">
          <div className=" bg-blue-600" style={{ height: "150px" }}>
            <div className="flex px-10">
              <div className="mt-10 w-4/6  ">
                <div className="m-4 rounded-md border bg-white ">
                  <div className="flex p-4">
                    <div className="w-1/6">
                      <img
                        src="/assets/logomark.png"
                        alt=""
                        className="  p-2 "
                        width="80px"
                        height="80px"
                      />
                    </div>
                    <div className="w-4/6">
                      <h1 className="font-large mt-4 pt-4 pl-4 text-lg font-bold text-black">
                        {organization?.name}
                      </h1>
                      <p className="pl-4">{organization?.description}</p>
                    </div>
                    {finduser && (
                      <div className="w-1/6 ">
                        <button
                          // onClick={() => toggleModal(true)}
                          className="text-bold mt-5 ml-4 rounded border border-blue-800 p-2 text-blue-800"
                        >
                          New Offering
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col space-y-2  pt-2 text-center">
                    <div className=" grid grid-cols-3 items-center text-center">
                      <div className="flex  flex-1 flex-col justify-end">
                        <div className="border-rounded border bg-gray-100 p-4 text-center">
                          <h4>{offerings?.length} Live Offering</h4>
                        </div>
                      </div>
                      <div className="flex  flex-1 flex-col justify-end">
                        <div className="border-rounded border bg-gray-100 p-4 text-center">
                          <h4>240 Followers</h4>
                        </div>
                      </div>
                      <div className="flex  flex-1 flex-col justify-end">
                        <div className="border-rounded border bg-gray-100 p-4 text-center">
                          <h4>250000 dollars raised so far</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                  {offerings.map((offering) => (
                    <div className="relative">
                      <dt>
                        <a href={"/offerings/" + offering?.slug}>
                          <div className="col-6 border p-10">
                            <div className=" w-10  items-center bg-green-200 text-center text-xs text-green-800">
                              <UserGroupIcon className="h-10 w-10 p-2" />
                            </div>
                            <h1 className="pt-6 text-lg font-bold">
                              {offering?.name}
                            </h1>
                            <br />
                            <p>{offering?.shortDescription}</p>
                          </div>
                        </a>
                      </dt>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10  w-2/6  ">
                <div className="m-4 rounded-md border bg-white">
                  <div className=" p-10 ">
                    <div className="flex justify-end">
                      <div className=" ">
                        <h4 className="font-large text-md font-bold">
                          Announcements
                        </h4>
                      </div>
                      <div className="">
                        <button
                          // onClick={() => setAnnouncement(true)}
                          className="text-bold  ml-4 rounded border border-blue-800 p-2 text-blue-800"
                        >
                          New Announcement
                        </button>
                      </div>
                    </div>
                    {/* {isAnnouncement && (
                    <div>
                      <form onSubmit={addAnnouncement} action="#" method="POST">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div className="space-y-2">
                            <div>
                              <label>Title</label>
                              <input
                                type="text"
                                name="title"
                                className="mt-1 mb-1 w-full  rounded p-2"
                              />
                            </div>
                            <div>
                              <label>Detail</label>
                              <textarea
                                row="3"
                                name="description"
                                className="mt-1 mb-1 w-full  rounded p-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-200 px-4 py-3 text-right">
                          <button
                            type="button"
                            className="mr-2 rounded bg-gray-500 py-2 px-4 text-white hover:bg-gray-700"
                            onClick={() => setAnnouncement(false)}
                          >
                            <i className="fas fa-times"></i> Cancel
                          </button>
                          <button
                            type="submit"
                            className="mr-2 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
                          >
                            <i className="fas fa-plus"></i> Create
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  <Announcementsection id={props.organizationSingle.id} /> */}
                  </div>
                </div>

                {/* Team member ka code remove kiya hai baad mn wo add krna hai */}
              </div>
            </div>
          </div>
          <div
            // className={
            //   isToggle == true
            //     ? "show  top-0 left-0 z-10 w-full overflow-y-auto"
            //     : "fixed top-0 left-0 z-10 hidden w-full overflow-y-auto"
            // }
            id="modal"
          >
            <div className="min-height-100vh flex items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-900 opacity-75" />
              </div>
              <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
                &#8203;
              </span>
              <div
                className="align-center inline-block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <form action="#" method="POST">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <dl className="space-y-2 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                      <div>
                        <label>Enter Name</label>
                        <input
                          type="text"
                          // {...register("offeringName")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        />
                      </div>
                      <div>
                        <label>Start Date</label>
                        <input
                          type="date"
                          // {...register("startDate")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        />
                      </div>
                      <div>
                        <label>End Date</label>
                        <input
                          type="date"
                          // {...register("endDate")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        />
                      </div>
                      <div>
                        <label>Target Raise</label>
                        <input
                          type="number"
                          // {...register("targetAmount")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        />
                      </div>
                      <div>
                        <label>Minimum Investment</label>
                        <input
                          type="number"
                          // {...register("minimumAmount")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        />
                      </div>
                      <div>
                        <label>Maximum Investment</label>
                        <input
                          type="number"
                          // {...register("maximumAmount")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        />
                      </div>
                      <div>
                        <label>Price Per Unit</label>
                        <input
                          type="number"
                          // {...register("price")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        />
                      </div>
                      <div>
                        <label>Issue Type</label>
                        <input
                          type="text"
                          // {...register("issueType")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        />
                      </div>
                      <div>
                        <label>Short Description</label>
                        <textarea
                          // {...register("shortDescription")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        ></textarea>
                      </div>
                      <div>
                        <label>Description</label>
                        <textarea
                          // {...register("description")}
                          className="mt-1 mb-1 w-full  rounded p-2"
                        ></textarea>
                      </div>
                      <div>
                        {/*yeh input se commment kiyaa hai   ref={inputFileRef} */}
                        <input type="file" name="myfile" />
                      </div>
                    </dl>
                  </div>
                  <div className="bg-gray-200 px-4 py-3 text-right">
                    <button
                      type="button"
                      className="mr-2 rounded bg-gray-500 py-2 px-4 text-white hover:bg-gray-700"
                      // onClick={() => toggleModal(false)}
                    >
                      <i className="fas fa-times"></i> Cancel
                    </button>
                    <button
                      type="submit"
                      className="mr-2 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
                    >
                      <i className="fas fa-plus"></i> Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleOrganization;
