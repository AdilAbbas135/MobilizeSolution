import React from "react";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

import Header from "../../components/navigation/Header";
import { Button, Spin } from "antd";
import { CircularProgress, TextField, TextareaAutosize } from "@mui/material";

const DonateToOffering = () => {
  const [loading, setloading] = useState(false);
  const [addLoading, setaddLoading] = useState(false);
  const [TutionData, setTutionData] = useState({});

  return (
    <>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <>
          <Header page="SingleTution" />
          <div className="py-10 w-full max-w-7xl mx-auto">
            <h1 className="text-2xl text-text_color_secondary font-bold text-center uppercase">
              Complete Your Donation
            </h1>

            <div className="mt-5">
              <div className="grid grid-cols-10 gap-10">
                <div className="col-span-6">
                  <div className="border-2 border-dashed border-gray-500 p-5 rounded-md">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        // AddBooking();
                      }}
                    >
                      <div className="grid grid-cols-1 gap-x-5 gap-y-5">
                        <div className="col-span-1 grid grid-cols-2 gap-2">
                          <TextField
                            name="first-name"
                            id="FirstName"
                            type={"text"}
                            required
                            label="First Name"
                            className="w-full mt-1"
                            variant="outlined"
                            size="medium"
                            value={TutionData?.FirstName}
                            onChange={(e) => {
                              setTutionData({
                                ...TutionData,
                                FirstName: e.target.value,
                              });
                            }}
                          />
                          <TextField
                            name="last-name"
                            id="LastName"
                            type={"text"}
                            required
                            label="Last Name"
                            className="w-full mt-1"
                            variant="outlined"
                            size="medium"
                            value={TutionData?.LastName}
                            onChange={(e) => {
                              setTutionData({
                                ...TutionData,
                                LastName: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="col-span-1">
                          <TextField
                            name="email"
                            id="email"
                            type={"text"}
                            required
                            label="Your Email"
                            className="w-full mt-1"
                            variant="outlined"
                            size="medium"
                            value={TutionData?.Email}
                            onChange={(e) => {
                              setTutionData({
                                ...TutionData,
                                Email: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="col-span-1">
                          <TextField
                            name="mobile"
                            id="mobile"
                            type={"text"}
                            required
                            label="Your Mobile Number"
                            className="w-full mt-1"
                            variant="outlined"
                            size="medium"
                            value={TutionData?.Number}
                            onChange={(e) => {
                              setTutionData({
                                ...TutionData,
                                Number: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="col-span-1">
                          <TextField
                            name="event-type"
                            id="event-type"
                            type={"text"}
                            required
                            label="Event Type (e.g. Wedding/Birthday)"
                            className="w-full mt-1"
                            variant="outlined"
                            size="medium"
                            value={TutionData?.Event}
                            onChange={(e) => {
                              setTutionData({
                                ...TutionData,
                                Event: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <div className="col-span-1">
                          <label
                            for="description"
                            className="font-semibold text-text_color_secondary_2"
                          >
                            Additional Comments
                          </label>
                          <TextareaAutosize
                            id="description"
                            name="description"
                            aria-label="minimum height"
                            minRows={5}
                            required
                            minLength={5}
                            placeholder="Additional Comments"
                            className="w-full border px-2 py-4"
                            value={TutionData?.Description}
                            onChange={(e) => {
                              setTutionData({
                                ...TutionData,
                                Description: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <div className="col-span-1 mt-5">
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={addLoading ? true : false}
                            className="w-full text-[16px] bg-hover_color flex items-center justify-center shadow-none hover:shadow-none rounded-[4px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {addLoading ? (
                              <CircularProgress
                                size={18}
                                disableShrink
                                sx={{ color: "white" }}
                              />
                            ) : (
                              <>Place Order</>
                            )}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="col-span-4 sticky top-5 h-fit space-y-5 ">
                  <div className="border-2 border-dashed border-gray-500 p-5 rounded-md">
                    <div className="">
                      <h1 className="text-2xl text-text_color_secondary font-bold">
                        Selected Package
                      </h1>
                      <div className="mt-5">
                        <img
                          src={
                            Tution?.Picture
                              ? `${
                                  process.env.REACT_APP_BACKEND_URL +
                                  "/" +
                                  Tution.Picture
                                }`
                              : "/assets/TH1.jpg"
                          }
                          alt=""
                          className="h-[200px] w-full object-contain"
                        />
                        <h1 className="font-bold text-xl capitalize text-text_color_secondary_2">
                          {Tution?.Title}
                        </h1>

                        <h1 className="mt-2 font-bold text-xl text-hover_color">
                          Bill Details:
                        </h1>
                        <span className="h-1 w-10 bg-hover_color block rounded-md"></span>
                        <div className="mt-3 w-full space-y-1">
                          <div className="flex items-center justify-between font-semibold">
                            <p>{Tution?.Title}</p>
                            <p className="text-hover_color">
                              PKR {Tution?.Price}
                            </p>
                          </div>
                        </div>
                        <h1 className="font-bold text-xl text-hover_color">
                          Total:
                        </h1>
                        <span className="mt-2 h-1 w-10 bg-hover_color block rounded-md"></span>
                        <div className="mt-2 text-white rounded-md font-bold text-center bg-hover_color w-full py-2">
                          Pay: {Number(Tution?.Price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DonateToOffering;
