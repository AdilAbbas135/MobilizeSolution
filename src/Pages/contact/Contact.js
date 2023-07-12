import React, { useState } from "react";
import Header from "../../components/navigation/Header";
import Footer from "../../components/navigation/Footer/Footer";
import axios from "axios";
import { createAlert } from "../../Redux/Alert";
import { useDispatch } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState({});
  const [btnloading, setbtnloading] = useState(false);

  const SendMail = async () => {
    setbtnloading(true);
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/sendmail`, Data)
      .then((response) => {
        console.log(response);
        setbtnloading(false);
        setData({});
        dispatch(
          createAlert({
            type: "success",
            message: "Email Sent Successfully we will Shorty Contact You",
          })
        );
      })
      .catch((error) => {
        setbtnloading(false);
        dispatch(
          createAlert({
            type: "error",
            message: "Something went wrong! Try again later",
          })
        );
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Contact Us
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3 capitalize">
              Send Us a Message and we Will Shortly be in contact With You
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              SendMail();
            }}
          >
            <div className="mx-auto md:w-2/3 lg:w-1/2">
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={Data?.Name}
                      onChange={(e) => {
                        setData({ ...Data, Name: e.target.value });
                      }}
                      className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={Data?.Email}
                      onChange={(e) => {
                        setData({ ...Data, Email: e.target.value });
                      }}
                      className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={Data?.Subject}
                      required
                      onChange={(e) => {
                        setData({ ...Data, Subject: e.target.value });
                      }}
                      className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    ></input>
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={Data?.Message}
                      required
                      onChange={(e) => {
                        setData({ ...Data, Message: e.target.value });
                      }}
                      className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    type="submit"
                    disabled={btnloading ? true : false}
                    className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
