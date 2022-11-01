import Header from "../../components/navigation/Header";
import { CheckCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, DatePicker, Radio, Select, Tabs } from "antd";
import { AiFillEdit } from "react-icons/ai";

const UpdateProfile = () => {
  const { Option } = Select;
  const [DeliveryCheck, setDeliveryCheck] = useState(false);

  const onChangeDeliveryCheckBox = (e) => {
    setDeliveryCheck(e.target.checked);
  };
  const members = [
    {
      username: "matykiewiczjake@gmail.com",
      firstName: "test",
      lastName: "admin",
      image: null,
      name: "test-admin",
      email: "testadmin123@gmail.com",
    },
    {
      username: "matykiewiczjake@gmail.com",
      firstName: "test",
      lastName: "admin",
      image: null,
      name: "test-admin",
      email: "testadmin123@gmail.com",
    },
    {
      username: "matykiewiczjake@gmail.com",
      firstName: "test",
      lastName: "admin",
      image: null,
      name: "test-admin",
      email: "testadmin123@gmail.com",
    },
  ];
  return (
    <div className="min-h-full">
      <Header />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 pb-8">
          <div className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                <div className="min-w-0 flex-1">
                  {/* Profile */}
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                          Welcome to ChainRaise Test User
                          {/* {", " +
                            props.profile?.firstName +
                            " " +
                            props.profile?.lastName || "!"} */}
                        </h1>
                      </div>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Account status</dt>
                        <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                          <CheckCircleIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                            aria-hidden="true"
                          />
                          Verified account
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  >
                    Update Profile Information
                  </button>
                  <Link href="/profile">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    >
                      View Account Summary
                    </button>
                  </Link>
                </div>
              </div>

              <Tabs
                defaultActiveKey="1"
                type="card"
                size={"large"}
                tabBarGutter={10}
                className="mt-2"
              >
                {/* TAB 1 */}
                <Tabs.TabPane key={"Account"} tab="Account">
                  <div className="mt-8">
                    <div className="mx-4 rounded-md pt-4 shadow sm:mx-6 lg:mx-auto lg:max-w-6xl">
                      <div className="flex">
                        <div className="w-10/12 px-4">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            CONTACT INFORMATION
                          </h3>
                          <p className="mt-1 w-full text-sm text-gray-500">
                            ChainRaise has implemented this verification step to
                            stay legally compliant with KYC/AML (Know Your
                            Customer/Anti-Money Laundering) regulations. This is
                            an additional measure to ensure against accepting
                            fraudulent contributions. All investors must
                            complete the KYC/AML form before making any
                            investments through ChainRaise.
                          </p>
                        </div>
                        <div className="w-2/12">
                          <img
                            className="h-12 w-12 cursor-pointer rounded-full"
                            // src={
                            //   props.user
                            //     ? props.user.image
                            //     : "/default_user.png"
                            // }
                            // onClick={(e) => uploadImage(1)}
                            alt=""
                          />
                        </div>
                      </div>
                      <form
                        // onSubmit={handleSubmit(onSubmit)}
                        action="#"
                        method="POST"
                      >
                        <div className="mt-10 sm:mt-0">
                          <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="mt-10 md:col-span-3 md:mt-0">
                              <div className="overflow-hidden sm:rounded-md">
                                <div className="bg-white py-5 px-4">
                                  <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        First Name
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="middle-name"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Middle Name
                                      </label>
                                      <input
                                        type="text"
                                        id="middle-name"
                                        autoComplete="middle-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Last Name
                                      </label>
                                      <input
                                        type="text"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="Title"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Title
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="Title"
                                        autoComplete="Title"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="phone-number"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Phone Number
                                      </label>
                                      <input
                                        required
                                        type="tel"
                                        id="phone-number"
                                        autoComplete="telephone"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="date-of-birth"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                      >
                                        Date Of Birth
                                      </label>
                                      {/* <input
                                        required
                                        type="tel"
                                        id="phone-number"
                                        autoComplete="telephone"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      /> */}
                                      <DatePicker
                                        allowClear
                                        id="date-of-birth"
                                        size="large"
                                        className=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                  </div>

                                  <div className="mt-10 mb-5">
                                    <h3 className="text-xl font-medium leading-6 text-gray-900">
                                      Address
                                    </h3>
                                  </div>
                                  <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="street-address"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Street Address
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="suit/unit"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Suit/Unit
                                      </label>
                                      <input
                                        type="text"
                                        id="suit/unit"
                                        autoComplete="suit/unit"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        City
                                      </label>
                                      <input
                                        type="text"
                                        id="city"
                                        autoComplete="city"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="state"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        State/Region
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="state"
                                        autoComplete="state"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                      <label
                                        htmlFor="postal-code"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        ZIP / Postal code
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                  </div>

                                  {/* {Residence === "foreign-invester" && (
                                    <div className="flex justify-center items-center w-[500px] m-auto">
                                      <div className="mt-10 w-full">
                                        <label className="block text-sm font-medium text-gray-700">
                                          Plese Upload Your Documents Like
                                          Passport
                                        </label>
                                        <label
                                          htmlFor="dropzone-file"
                                          className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                          <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                            <svg
                                              aria-hidden="true"
                                              className="mb-3 w-10 h-10 text-gray-400"
                                              fill="none"
                                              stroke="currentColor"
                                              viewBox="0 0 24 24"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                              ></path>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                              <span className="font-semibold">
                                                Click to upload
                                              </span>{" "}
                                              or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                              SVG, PNG, JPG or GIF (MAX.
                                              800x400px)
                                            </p>
                                          </div>
                                          <input
                                            id="dropzone-file"
                                            type="file"
                                            className="hidden col-span-1"
                                            required
                                          />
                                        </label>
                                      </div>
                                    </div>
                                  )} */}

                                  <div className="my-7 electronic-delivery-checkbox p-3 m-auto rounded-md w-max border-2 border-gray-300">
                                    <Checkbox
                                      onChange={onChangeDeliveryCheckBox}
                                    >
                                      I agree to the Consent to Electronic
                                      Delivery
                                    </Checkbox>
                                  </div>

                                  <div className="mt-10 mb-5">
                                    <h3 className="text-xl font-medium leading-6 text-gray-900">
                                      IDENTITY VERIFICATION
                                    </h3>
                                  </div>
                                  <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="ssn"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Social Security # (US investors only)
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="ssn"
                                        autoComplete="ssn"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3"></div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="Nationality"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Nationality
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="Nationality"
                                        autoComplete="Nationality"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="Nationality"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Country Of Residence
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="Nationality"
                                        autoComplete="Nationality"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                      <label
                                        htmlFor="Nationality"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Identification Type
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        id="Nationality"
                                        autoComplete="Nationality"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex justify-center items-center w-full m-auto">
                                    <div className="mt-16 w-full">
                                      <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                      >
                                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                          <svg
                                            aria-hidden="true"
                                            className="mb-3 w-10 h-10 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            ></path>
                                          </svg>
                                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">
                                              Click to upload
                                            </span>{" "}
                                            or drag and drop
                                          </p>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX.
                                            800x400px)
                                          </p>
                                        </div>
                                        <input
                                          id="dropzone-file"
                                          type="file"
                                          className="hidden col-span-1"
                                          required
                                          accept=".jpg, .jpeg, .png"
                                          onClick={(e) => {
                                            console.log(File);
                                          }}
                                        />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                  disabled={DeliveryCheck ? false : true}
                                  type="submit"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-10 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Tabs.TabPane>

                {/* TAB 2 */}
                <Tabs.TabPane key={"Profile"} tab="Profile">
                  <div className="mt-8">
                    <div className="mx-4 rounded-md pt-4 shadow sm:mx-6 lg:mx-auto lg:max-w-6xl">
                      <div className="flex">
                        <div className="w-10/12 px-4">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Investment Profile
                          </h3>
                        </div>
                      </div>
                      <form
                        // onSubmit={handleSubmit(onSubmit)}
                        action="#"
                        method="POST"
                      >
                        <div className="mt-10 sm:mt-0">
                          <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="mt-10 md:col-span-3 md:mt-0">
                              <div className="overflow-hidden sm:rounded-md">
                                <div className="bg-white py-5 px-4">
                                  <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Net Worth
                                      </label>

                                      {/* we will add on change function in this in future to update data  */}
                                      <Select
                                        size="large"
                                        defaultValue="Select"
                                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      >
                                        <Option value="$100,000">
                                          less than $100,000
                                        </Option>
                                        <Option value="$100,000">
                                          $100,001 - $250,000
                                        </Option>
                                        <Option value="$100,000">
                                          $250,001 - $500,000
                                        </Option>
                                      </Select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="middle-name"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Annual Net Income
                                      </label>
                                      <input
                                        type="text"
                                        id="middle-name"
                                        autoComplete="middle-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="email-address"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Highest Education
                                      </label>

                                      {/* we will add on change function in this in future to update data  */}
                                      <Select
                                        size="large"
                                        defaultValue="Select"
                                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      >
                                        <Option value="$100,000">
                                          less than High School
                                        </Option>
                                        <Option value="$100,000">
                                          High School Graduate
                                        </Option>
                                        <Option value="$100,000">
                                          Some College
                                        </Option>
                                        <Option value="$100,000">
                                          Associate Degree
                                        </Option>
                                        <Option value="$100,000">
                                          Bachelor's Degree
                                        </Option>
                                        <Option value="$100,000">
                                          Master Degree
                                        </Option>
                                        <Option value="$100,000">
                                          Doctorate
                                        </Option>
                                        <Option value="$100,000">
                                          Not Set
                                        </Option>
                                      </Select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="phone-number"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Risk Tolerance
                                      </label>
                                      {/* <input
                                        required
                                        type="text"
                                        {...register('phone')}
                                        id="phone-number"
                                        autoComplete="telephone"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      /> */}

                                      {/* we will add on change function in this in future to update data  */}
                                      <Select
                                        size="large"
                                        defaultValue="Select"
                                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      >
                                        <Option value="$100,000">
                                          Conservative
                                        </Option>
                                        <Option value="$100,000">
                                          Moderate
                                        </Option>
                                        <Option value="$100,000">
                                          Aggressive
                                        </Option>
                                        <Option value="$100,000">
                                          Not Set
                                        </Option>
                                      </Select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="phone-number"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Investment Experience
                                      </label>

                                      {/* we will add on change function in this in future to update data  */}
                                      <Select
                                        size="large"
                                        defaultValue="Select"
                                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      >
                                        <Option value="$100,000">None</Option>
                                        <Option value="$100,000">
                                          Limited
                                        </Option>
                                        <Option value="$100,000">Good</Option>
                                        <Option value="$100,000">
                                          Extensive
                                        </Option>
                                        <Option value="$100,000">
                                          Not Set
                                        </Option>
                                      </Select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="phone-number"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Age
                                      </label>

                                      {/* we will add on change function in this in future to update data  */}
                                      <Select
                                        size="large"
                                        defaultValue="Select"
                                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      >
                                        <Option value="$100,000">
                                          Under 30
                                        </Option>
                                        <Option value="$100,000">31-39</Option>
                                        <Option value="$100,000">40-49</Option>
                                        <Option value="$100,000">50-59</Option>
                                        <Option value="$100,000">60-69</Option>
                                        <Option value="$100,000">70-79</Option>
                                        <Option value="$100,000">
                                          Over 79
                                        </Option>
                                        <Option value="$100,000">
                                          (Not Set)
                                        </Option>
                                      </Select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="phone-number"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Gender
                                      </label>
                                      {/* <input
                                        required
                                        type="text"
                                        {...register('phone')}
                                        id="phone-number"
                                        autoComplete="telephone"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      /> */}
                                      {/* we will add on change function in this in future to update data  */}
                                      <Select
                                        size="large"
                                        defaultValue="Select"
                                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      >
                                        <Option value="$100,000">Male</Option>
                                        <Option value="$100,000">Female</Option>
                                        <Option value="$100,000">Other</Option>
                                        <Option value="$100,000">
                                          (Not Set)
                                        </Option>
                                      </Select>
                                    </div>
                                  </div>
                                  <div className="mt-7 electronic-delivery-checkbox p-3 m-auto rounded-md w-max border-2 border-gray-300">
                                    <Checkbox
                                    // onChange={onChangeDeliveryCheckBox}
                                    >
                                      I agree to the Consent to Electronic
                                      Delivery
                                    </Checkbox>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                  // disabled={DeliveryCheck ? false : true}
                                  type="submit"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                                >
                                  Update Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Tabs.TabPane>

                {/* TAB 3 */}
                <Tabs.TabPane key={"Accreditation"} tab="Accreditation">
                  {/* We will add on change radio in this later to get value of every radio button onChange={onChange} */}
                  <div className="max-w-5xl">
                    <Radio.Group
                      buttonStyle="outline"
                      defaultValue="a"
                      className="w-full flex flex-wrap space-x-5 space-y-5"
                    >
                      <div></div>
                      <Radio.Button value="a" style={{ height: "fit-content" }}>
                        <div className="h-[250px] w-[200px] flex flex-col justify-center items-center p-4">
                          <UserIcon className="text-black  h-12 w-12" />
                          <h2 className="text-sm text-center">
                            My Individual Income is
                          </h2>
                          <h1 className="font-bold text-xl text-center py-2">
                            Above $200,000
                          </h1>
                          <p className="text-black text-center">
                            (for each of the last 2 years)
                          </p>
                        </div>
                      </Radio.Button>

                      <Radio.Button value="b" style={{ height: "fit-content" }}>
                        <div className="h-[250px] w-[200px] flex flex-col justify-center items-center p-4">
                          <UserIcon className="text-black  h-12 w-12" />
                          <h2 className="text-sm text-center">
                            My Joint Income with spouse is
                          </h2>
                          <h1 className="font-bold text-xl text-center py-2">
                            Above $300,000
                          </h1>
                          <p className="text-black text-center">
                            (for each of the last 2 years)
                          </p>
                        </div>
                      </Radio.Button>

                      <Radio.Button
                        value="c"
                        className="h-fit"
                        style={{ height: "fit-content" }}
                      >
                        <div className="h-[250px] flex flex-col justify-center items-center p-4 w-[200px]">
                          <UserIcon className="text-black  h-12 w-12" />
                          <h2 className="text-sm text-center">
                            My individual Net Worth or joint with spouse is
                          </h2>
                          <h1 className="font-bold text-xl text-center py-2">
                            Above $1M
                          </h1>
                          <p className="text-black text-center">
                            (excluding primary residence)
                          </p>
                        </div>
                      </Radio.Button>

                      <Radio.Button
                        value="d"
                        className="h-fit"
                        style={{ height: "fit-content" }}
                      >
                        <div className="h-[250px] flex flex-col justify-center items-center p-4 w-[200px]">
                          <UserIcon className="text-black  h-12 w-12" />
                          <h2 className="text-sm text-center">
                            I own Total Investments
                          </h2>
                          <h1 className="font-bold text-xl text-center py-2">
                            Above $5M
                          </h1>
                          <p className="text-black text-center">
                            (including jointly with spouse)
                          </p>
                        </div>
                      </Radio.Button>

                      <Radio.Button
                        value="e"
                        className="h-fit"
                        style={{ height: "fit-content" }}
                      >
                        <div className="h-[250px] flex flex-col justify-center items-center p-4 w-[200px]">
                          <UserIcon className="text-black  h-12 w-12" />
                          <h2 className="text-sm text-center font-semibold">
                            I am a licensed individual that holds an active
                            Series 7, Series 65, or Series 82 registration
                          </h2>
                        </div>
                      </Radio.Button>

                      <Radio.Button
                        value="f"
                        className="h-fit"
                        style={{ height: "fit-content" }}
                      >
                        <div className="h-[250px] flex flex-col justify-center items-center p-4 w-[200px]">
                          <UserIcon className="text-black  h-12 w-12" />
                          <h2 className="text-sm text-center font-semibold">
                            I am not an investor
                          </h2>
                        </div>
                      </Radio.Button>
                    </Radio.Group>
                  </div>
                </Tabs.TabPane>

                {/* TAB 4 */}
                <Tabs.TabPane key={"Users"} tab="Users">
                  <div className="mt-10 w-full ">
                    <div className=" rounded-md border bg-white ">
                      <div className="flex p-4">
                        <div className="w-3/5">
                          <h1 className="font-large mt-4  pl-4 text-lg font-bold text-black">
                            Team Members
                          </h1>
                          <p className="pl-4">
                            A list of all users that represent your organization
                            including their name, email and role
                          </p>
                        </div>
                        <div className="w-1/5 p-4">
                          <input
                            type="text"
                            id="search"
                            placeholder="Search"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="w-1/5 p-4">
                          <button
                            //onClick={() => toggleModal(true)}
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Add Member
                          </button>
                        </div>
                      </div>
                      <div className="p-2">
                        <table className="min-w-full rounded border">
                          <thead>
                            <tr>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Username
                              </th>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                First Name
                              </th>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Last Name
                              </th>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Phone
                              </th>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Is Active
                              </th>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Is Primary
                              </th>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Email Verified
                              </th>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Notifications
                              </th>
                              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Details / Edit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {members.map((member) => (
                              <tr>
                                <td className="p-5">
                                  <div className="flex">
                                    {/* <div>
                                      <img
                                        src={
                                          member.image ||
                                          "/assets/default_user.png"
                                        }
                                        className="h-10 w-10 rounded-full"
                                      />
                                    </div> */}
                                    <div className="pl-2 pt-1">
                                      {member.username}
                                    </div>
                                  </div>
                                </td>
                                <td className="p-5">{member.firstName}</td>
                                <td className="p-5">{member.lastName}</td>
                                <td className="p-5">
                                  {/* {member.id != props.organizationSingle.contactId && ( */}
                                  <a
                                    href="/"
                                    className="text-bold text-blue-900"
                                  >
                                    Edit
                                  </a>
                                  {/* )} */}
                                </td>

                                <td className="p-5">
                                  <Checkbox defaultChecked disabled />
                                </td>
                                <td className="p-5">
                                  <Checkbox defaultChecked={false} disabled />
                                </td>

                                <td className="p-5">
                                  <Checkbox defaultChecked disabled />
                                </td>
                                <td className="p-5">
                                  {/* {member.id != props.organizationSingle.contactId && ( */}
                                  <a
                                    href="/"
                                    className="text-bold text-blue-900"
                                  >
                                    Manage
                                  </a>
                                  {/* )} */}
                                </td>
                                <td className="p-5">
                                  <a href="/">
                                    <AiFillEdit size={25} />
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Tabs.TabPane>

                {/* TAB 5 */}
                <Tabs.TabPane key={"Payment-Method"} tab="Payment Method">
                  <h1>No Payment Method Found</h1>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UpdateProfile;
