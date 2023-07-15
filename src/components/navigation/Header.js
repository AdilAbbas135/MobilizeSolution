/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useSelector } from "react-redux";

const Header = () => {
  // const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const session = useSelector((state) => state.session.session);
  const dashboard = useSelector((state) => state.DashboardData);

  // console.log(session);
  const navigation = {
    categories: [
      {
        name: "Browse Offerings",
        link: "/offerings",
        featured: [
          {
            name: "Offerings",
            href: "/offerings",
            imageSrc: "/assets/logomark.png",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Organizations",
            href: "/organizations",
            imageSrc:
              "https://media.istockphoto.com/photos/stack-of-hands-unity-and-teamwork-concept-picture-id1289963489?b=1&k=20&m=1289963489&s=170667a&w=0&h=5RZ6cQ5UWYgyjK52ele9lSmyIBem2uMIR66S-1faWSs=",
            imageAlt:
              "Model wearing minimalist watch with black wristband and white watch face.",
          },
        ],
      },
    ],
    pages: [
      { name: "Home", href: "/" },
      { name: "Problems", href: "/problems" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  const userNavigation = [{ name: "My Account", href: "/profile/update" }];

  return (
    <>
      <header className="relative z-20">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="flex lg:flex-1 lg:items-center">
                  {/* <span className="sr-only">Care & Share</span> */}
                  <Link to="/">
                    <img
                      className="h-[100px] w-auto cursor-pointer"
                      src="/assets/logo.png"
                      alt="profile-picture"
                    />
                  </Link>
                </div>

                {/* MAIN DESKTOP MENU */}
                <div className="hidden h-full lg:flex items-center">
                  <div className="flex h-full justify-center space-x-8 border-none">
                    {navigation.pages.map((page, index) => (
                      <Link
                        to={page.href}
                        key={index}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-cr-secondary"
                      >
                        {/* eslint-disable-next-line */}
                        <a className="text-gray-700">{page.name}</a>
                      </Link>
                    ))}

                    {session.user.userId && (
                      <div className="my-auto h-8 border border-gray-300"></div>
                    )}
                    {session.user.userId && (
                      <Link
                        to={
                          session?.user?.role === "admin"
                            ? "/admin-dashboard"
                            : "/profile/update"
                        }
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-cr-secondary"
                      >
                        My Account
                      </Link>
                    )}
                  </div>
                </div>

                {/* DESKTOP LOGIN AND SIGNUP LINKS */}
                {session.user.userId ? (
                  <div className="flex flex-1 items-center justify-end lg:ml-8">
                    <Link
                      onClick={() => {
                        localStorage.removeItem("authtoken");
                        localStorage.removeItem("admin-token");
                        window.open("/", "_self");
                      }}
                      className="hidden mr-5 text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                    >
                      Sign Out
                    </Link>
                    <span className="relative inline-block">
                      <Link
                        to={
                          session?.user?.role === "admin"
                            ? "/admin-dashboard"
                            : "/profile/update"
                        }
                      >
                        <img
                          className="h-12 w-12 cursor-pointer rounded-full"
                          src={
                            dashboard?.Details?.ProfilePicture
                              ? `${dashboard?.Details?.ProfilePicture}`
                              : "/assets/default_user.png"
                          }
                          alt=""
                        />
                      </Link>
                      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-cr-secondary ring-2 ring-white" />
                    </span>
                    <div className="lg:hidden">
                      <button
                        type="button"
                        className="rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setOpen(!open)}
                      >
                        <span className="sr-only">Open menu</span>
                        <HiMenu className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="hidden flex-1 items-center justify-end lg:block">
                    <div className="flex space-x-5 justify-end">
                      <Link
                        to="/auth/signin"
                        className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                      >
                        {/* eslint-disable-next-line */}
                        <a>Sign In </a>
                      </Link>
                      <Link
                        to="/auth/signup"
                        className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
              <div className="lg:hidden px-4 py-2 transition-all ease-in space-y-3">
                {navigation.pages.map((page, index) => (
                  <Link
                    to={page.href}
                    key={index}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-cr-secondary"
                  >
                    {/* eslint-disable-next-line */}
                    <a className="text-gray-700">{page.name}</a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
