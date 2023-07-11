import { HiLockClosed } from "react-icons/hi";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { createAdminSession } from "../../Redux/SessionRedux";
import { createAlert } from "../../Redux/Alert";

const Signin = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = localStorage.getItem("admin-token");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const TryLogin = async () => {
    setloading(true);
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/admin/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        dispatch(
          createAlert({
            type: "success",
            message: "Login Successfull",
            options: {
              position: "top-right",
            },
          })
        );
        localStorage.setItem("admin-token", response.data.token);
        dispatch(createAdminSession());
        navigate(`/admin-dashboard`);
        setloading(false);
      })
      .catch((err) => {
        console.log("ok i am in the error");
        console.log(err);
        setloading(false);
        dispatch(
          createAlert({
            type: "error",
            message: err?.response?.data?.msg
              ? err?.response?.data?.msg
              : "Wrong Credentials! Try Again",
          })
        );
      });
  };
  useEffect(() => {
    if (token) {
      navigate(`/admin-dashboard`);
    }
    if (location?.state?.error) {
      dispatch(
        createAlert({
          type: "error",
          message: location?.state?.error
            ? location?.state?.error
            : "Something Went Wrong! Try Again",
        })
      );
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="py-6">
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white py-6 px-12">
              <div>
                <Link to="/">
                  {/* eslint-disable-next-line */}
                  <a>
                    <img
                      className="mx-auto h-[100px] w-auto"
                      src="/assets/logo.png"
                      alt="Mobilize Solution Logo"
                    />
                  </a>
                </Link>
                <h2 className="mt-6 text-center text-xl font-bold text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  TryLogin();
                }}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      autoComplete="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mt-8 space-y-6">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  <button
                    disabled={loading ? true : false}
                    type="submit"
                    className="disabled:opacity-50 disabled:cursor-not-allowed h-10 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <HiLockClosed
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    {loading ? (
                      <Spin
                        indicator={
                          <LoadingOutlined
                            className="text-white"
                            style={{ fontSize: 20, color: "white" }}
                            spin
                          />
                        }
                      />
                    ) : (
                      <span>Sign in</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
