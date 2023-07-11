import Header from "../../components/navigation/Header";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { clearSession, createAdminSession } from "../../Redux/SessionRedux";
import { FetchProfile } from "../../Redux/AdminDashboardData";
import { TiPlus } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";
import AllProblems from "./AllProblems";

const AdminProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.session);
  const dashboard = useSelector((state) => state.AdminDashboardData);
  const error = useSelector((state) => state.AdminDashboardData.error);
  useEffect(() => {
    dispatch(FetchProfile());
    //eslint-disable-next-line
  }, [dispatch]);
  useEffect(() => {
    if (dashboard?.isProfileFetched) {
      dispatch(createAdminSession());
    }
    //eslint-disable-next-line
  }, [dashboard?.isProfileFetched]);
  if (error) {
    dispatch(clearSession());
    navigate("/admin", {
      state: { PageError: true, error: dashboard?.errorMessage },
    });
  }
  const cards = [
    {
      name: "Total Problems Posted",
      href: "#",
      icon: TiPlus,
      amount: dashboard?.Problems?.length,
    },
    {
      name: "High Priority Problems",
      href: "#",
      icon: HiUserGroup,
      amount: dashboard?.OtherDetails?.HighPriorityProblems,
    },
    {
      name: "Solved Problems",
      href: "#",
      icon: AiFillCheckCircle,
      amount: dashboard?.OtherDetails?.SolvedProblems,
    },

    // More items...
  ];
  return (
    <>
      {dashboard.loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <div className="min-h-full">
          {/* {console.log(UserInfo)} */}

          <Header />
          <div className="flex flex-1 flex-col bg-main-bg-color">
            <main className="flex-1 pb-8">
              <div>
                <div className=" sm:px-6 lg:mx-auto lg:max-w-7xl">
                  <div
                    // style={{
                    //   boxShadow:
                    //     "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
                    // }}
                    className="shadow-sm py-6 px-6 my-10 rounded-md md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200 bg-white "
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center ">
                        <div>
                          <div className="flex items-center">
                            <div className="h-20 w-20 rounded-full cursor-pointer shadow-xl flex items-center flex-col justify-center">
                              <img src="/assets/icons8-user-96.png" alt="" />
                            </div>
                            <div className="ml-5">
                              <h1 className=" text-2xl font-sans font-bold  text-text-color mb-0 ">
                                {session?.user?.UserName ? (
                                  <span className="capitalize">
                                    {session?.user?.UserName}
                                  </span>
                                ) : (
                                  session?.user?.email
                                )}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                      <div className="px-5">
                        <h1 className="font-bold text-xl mb-0 text-center">
                          {dashboard?.Problems?.length}
                        </h1>
                        <h1 className="font-[400] text-[1em]">
                          Total Problems Posted
                        </h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-xl mb-0 text-center">
                          {dashboard?.OtherDetails?.SolvedProblems}
                        </h1>
                        <h1 className="font-[400] text-[1em]">
                          Total Problems Solved
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto mt-10 mb-10 w-full max-w-7xl">
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                      Overview
                    </h2>

                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Card */}
                      {cards.map((card) => (
                        <div
                          key={card.name}
                          className="rounded-lg bg-white shadow"
                        >
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <card.icon
                                  className="h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-5 w-0 flex-1">
                                <dl>
                                  <dt className="truncate text-sm font-medium text-gray-500">
                                    {card.name}
                                  </dt>
                                  <dd>
                                    <div className="text-lg font-medium text-gray-900">
                                      {card.amount}
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          {/* <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                              <a
                                href={card.href}
                                className="font-medium text-cyan-700 hover:text-cyan-900"
                              >
                                View all
                              </a>
                            </div>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                  <AllProblems />

                  {/* <Tabs
                    defaultActiveKey="1"
                    type="line"
                    size={"large"}
                    tabBarGutter={30}
                  >
                    <Tabs.TabPane key={"All Problems"} tab="All Problems">
                      <AllProblems />
                    </Tabs.TabPane>
                  </Tabs> */}
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminProfile;
