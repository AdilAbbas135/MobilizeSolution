import { LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { signInWithGoogle } from "../../firebase";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Signin = () => {
  // eslint-disable-next-line
  const [email, setemail] = useState();
  // eslint-disable-next-line
  const [password, setpassword] = useState();
  const [loading, setloading] = useState(false);

  const { linkedInLogin } = useLinkedIn({
    clientId: "77zu88iv7ao431",
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const TryLogin = () => {
    setloading(true);
    axios
      .post("https://beta.chainraise.info/manage/api/auth/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.redirect) {
          setloading(false);
          window.location.replace(
            result?.data?.redirect + `?email=${email}&password=${password}`
          );
        }
      })
      .catch((err) => {
        setloading(false);
        toast.error("Wrong Credentials! Try Again", {
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
  };
  useEffect(() => {}, []);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100">
        <div className="py-6">
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white py-6 px-12">
              <div>
                <Link to="/">
                  {/* eslint-disable-next-line */}
                  <a>
                    <img
                      className="mx-auto h-12 w-auto"
                      src="/assets/chainraise_logo_black_text.png"
                      alt="Chainraise Logo"
                    />
                  </a>
                </Link>
                <h2 className="mt-6 text-center text-xl font-bold text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <div className=" grid grid-cols-3 gap-x-2">
                <div className="    ">
                  <button
                    className="flex border border-gray-300 px-10  py-2 text-center text-gray-900"
                    // onClick={() =>
                    //   signIn("facebook", {
                    //     callbackUrl: "/profile",
                    //   })
                    // }
                  >
                    <FaFacebookSquare size={25} />
                  </button>
                </div>
                <div className="  ">
                  <button
                    className="flex border border-gray-300 px-10 py-2 text-center"
                    onClick={signInWithGoogle}
                  >
                    <SiGmail size={25} />
                  </button>
                </div>
                <div className="">
                  <button
                    className="flex border border-gray-300 px-10 py-2 text-center "
                    onClick={linkedInLogin}
                  >
                    <GrLinkedin size={25} />
                  </button>
                </div>
              </div>
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 flex-shrink text-gray-400">
                  Or Continue with
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
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
                      onChange={(e) => setpassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    {/* eslint-disable-next-line */}
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    disabled={loading ? true : false}
                    type="submit"
                    className="h-10 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
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
