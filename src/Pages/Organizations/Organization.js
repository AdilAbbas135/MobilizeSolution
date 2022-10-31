import React, { useEffect, useState } from "react";
import Header from "../../components/navigation/Header";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";
import { HiUserGroup } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

const Organization = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [organizations, setallorganizations] = useState([]);

  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Ending Soon", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Minimum: Low to High", href: "#", current: false },
    { name: "Minimum: High to Low", href: "#", current: false },
  ];
  const subCategories = [
    { name: "Energy", href: "#" },
    { name: "Fintech & Finance", href: "#" },
    { name: "Media", href: "#" },
    { name: "Real Estate", href: "#" },
    { name: "Technology", href: "#" },
  ];

  useEffect(() => {
    axios
      .get("https://beta.chainraise.info/api/organizations/listing")
      .then((result) => {
        console.log(result);
        setallorganizations(result?.data?.data);
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
  }, []);
  return (
    <div>
      <Header />
      <ToastContainer />
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <div className="py-6">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-8">
              <h1 className="text-3xl font-semibold leading-6 text-gray-900">
                Invest in the next big opportunity here!
              </h1>
              <h2 className="text-l mt-4 leading-6 text-gray-600">
                All companies are vetted & have passed our due dilligence
                process.{" "}
              </h2>
              <h2 className="text-l leading-6 text-gray-600">
                {" "}
                Click <span className="cursor-pointer text-cyan-500">
                  here
                </span>{" "}
                to learn more.
              </h2>
              {/* 
            <div className="flex items-center justify-end">
              <Menu className="relative z-40 inline-block">
                <div className="">
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <HiChevronDown
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            // className={classNames(
                            //   option.current
                            //     ? "font-medium text-gray-900"
                            //     : "text-gray-500",
                            //   active ? "bg-gray-100" : "",
                            //   "block px-4 py-2 text-sm"
                            // )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </div> */}

              <hr className="my-4" />

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-4">
                {organizations.map((organization) => (
                  <div
                    key={organization.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <div className=" h-22 p-10  group-hover:opacity-75 sm:aspect-none">
                      <img
                        src="/assets/logomark.png"
                        alt="organization-image--here"
                        className="h-full w-full object-cover object-center p-2 sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-10 text-center">
                      <h3 className=" font-large text-gray-900">
                        <a
                          onClick={() => {
                            navigate(`/organizations/${organization.name}`, {
                              state: organization,
                            });
                          }}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {organization.name}
                        </a>
                      </h3>
                      <div className=" rounded-full bg-green-200 px-3  pt-1 pb-1 text-xs text-green-800">
                        {organization.category}
                      </div>
                      <p className="text-sm text-gray-500">
                        {organization.description}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col space-y-2  text-center">
                      <div className=" grid grid-cols-2 items-center text-center">
                        <div className="flex flex-1 flex-col justify-end">
                          <div className="border text-center">
                            <button className="pl-30 flex  p-2 text-center text-gray-800">
                              <HiUserGroup className="h-5 w-5 pr-1" />
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-end">
                          <div className="border text-center">
                            <button
                              //   onClick={() => goToPage(organization.id)}
                              className="pl-30 flex p-2 text-center text-gray-800"
                            >
                              <FiLogIn className=" h-5 w-5 pr-1" />
                              Visit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
            <aside className="mt-36 hidden sm:col-span-4 sm:block">
              <div className="sticky top-6 space-y-4">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b pb-6 text-sm font-medium text-gray-900"
                >
                  <li
                    key=""
                    className="{selectedCategory=='' &&(text-orange-600)}"
                  >
                    <button
                    // onClick={() => getOrganization("")}
                    // className={` ${
                    //   selectedCategory == "" ? "text-orange-600" : ""
                    // }
                    // `}
                    >
                      All
                    </button>
                  </li>
                  {subCategories.map((category) => (
                    <li
                      key={category.name}
                      // className={` ${
                      //   selectedCategory == category.name ? "text-orange-600" : ""
                      // }
                      // `}
                    >
                      <button
                        //   onClick={() => getOrganization(category.name)}
                        className=""
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
};

export default Organization;
