import { Spin } from "antd";
import { Tab } from "@headlessui/react";
import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import Header from "../../components/navigation/Header";

const SingleOffering = () => {
  const location = useLocation();
  const [singleoffering, setsingleoffering] = useState();
  const [loading, setloading] = useState(true);
  const [pitchselected, setpitchselected] = useState(true);
  const [discussionselected, setdiscussionselected] = useState(false);
  const [updateselected, setupdateselected] = useState(false);
  const [documentselected, setdocumentselected] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://beta.chainraise.info/manage/api/offers/listing/${location?.state?.id}`
      )
      .then((result) => {
        console.log(result);
        setsingleoffering(result?.data?.data);
        setloading(false);
      })
      .catch((error) => {
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
  const features = [
    {
      name: "Target Raise",
      description: "$" + singleoffering?.goal || "$0",
    },
    {
      name: "Minimum Investment",
      description: "$" + singleoffering?.min_investment || "$0",
    },
    {
      name: "Price per unit",
      description: "$" + singleoffering?.price_per_unit || "$0",
    },
    {
      name: "Offering Type",
      description: singleoffering?.type || "",
    },
  ];
  const product = {
    name: "Multivest",
    version: { name: "1.0", date: "June 5, 2021", datetime: "2021-06-05" },
    price: "$220",
    minimum: 1000,
    description:
      "Pursue compelling returns with this creative real estate fund. The fund's capital will be used to develop, scale, and expand shorter than typical investment stategies, develop and market residential and commercial projects.",
    pitch: {
      disclosure:
        "Sometimes it may not seem it is what it be but it is what it do.",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sections: [
        {
          title: "Problem",
          subtitle: "",
          resources: [
            {
              src: "https://images.unsplash.com/photo-1654067425069-7c14c7bf1fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
              alt: "lorem ipsum",
              type: "picture",
            },
            {
              src: "https://images.unsplash.com/photo-1654067425069-7c14c7bf1fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
              alt: "lorem ipsum",
              type: "picture",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Leo a diam sollicitudin tempor id eu nisl nunc. Dictumst quisque sagittis purus sit amet. Vestibulum mattis ullamcorper velit sed. Consectetur a erat nam at lectus urna duis convallis convallis. Eu augue ut lectus arcu bibendum at varius vel. Lobortis elementum nibh tellus molestie nunc non. Laoreet non curabitur gravida arcu. Viverra accumsan in nisl nisi scelerisque. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In eu mi bibendum neque egestas congue quisque. Vitae et leo duis ut diam quam nulla porttitor massa. Vitae purus faucibus ornare suspendisse sed nisi lacus. Nullam non nisi est sit amet facilisis magna etiam tempor.",
        },
        {
          title: "Solution",
          subtitle: "",
          resources: [
            {
              src: "https://images.unsplash.com/photo-1654067425069-7c14c7bf1fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
              alt: "lorem ipsum",
              type: "picture",
            },
            {
              src: "https://images.unsplash.com/photo-1654067425069-7c14c7bf1fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
              alt: "lorem ipsum",
              type: "picture",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Leo a diam sollicitudin tempor id eu nisl nunc. Dictumst quisque sagittis purus sit amet. Vestibulum mattis ullamcorper velit sed. Consectetur a erat nam at lectus urna duis convallis convallis. Eu augue ut lectus arcu bibendum at varius vel. Lobortis elementum nibh tellus molestie nunc non. Laoreet non curabitur gravida arcu. Viverra accumsan in nisl nisi scelerisque. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In eu mi bibendum neque egestas congue quisque. Vitae et leo duis ut diam quam nulla porttitor massa. Vitae purus faucibus ornare suspendisse sed nisi lacus. Nullam non nisi est sit amet facilisis magna etiam tempor.",
        },
        {
          title: "Competition",
          subtitle: "Check out how we're crushing the competition!",
          resources: [
            {
              src: "https://images.unsplash.com/photo-1654067425069-7c14c7bf1fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
              alt: "lorem ipsum",
              type: "picture",
            },
            {
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              alt: "lorem ipsum",
              type: "youtube",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Leo a diam sollicitudin tempor id eu nisl nunc. Dictumst quisque sagittis purus sit amet. Vestibulum mattis ullamcorper velit sed. Consectetur a erat nam at lectus urna duis convallis convallis. Eu augue ut lectus arcu bibendum at varius vel. Lobortis elementum nibh tellus molestie nunc non. Laoreet non curabitur gravida arcu. Viverra accumsan in nisl nisi scelerisque. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In eu mi bibendum neque egestas congue quisque. Vitae et leo duis ut diam quam nulla porttitor massa. Vitae purus faucibus ornare suspendisse sed nisi lacus. Nullam non nisi est sit amet facilisis magna etiam tempor.",
        },
      ],
    },
    highlights: [
      "Team compensation is highly dependent on investor profits",
      "High potential given strong growth in the real estate market",
      "Industry-leading portal to track investments",
    ],
    imageSrc: "/multivest_header.jpg",
    imageAlt: "Multivest Header",
  };
  return (
    <>
      <Header />
      <ToastContainer />
      {loading ? (
        <div className="h-screen flex items-center justify-center bg-[#F3F4F6]">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <div className="py-6 bg-[#F3F4F6]">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-8">
              <div className="flex flex-col">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={
                      singleoffering?.banner
                        ? singleoffering.banner
                        : "http://localhost:3000/card-background/1.jpeg"
                    }
                    alt="offering image"
                    className="object-cover"
                  />
                </div>

                {/* Product details */}
                <div className="mx-auto mt-4 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none lg:mt-2">
                  <Tab.Group as="div">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8">
                        <Tab
                          onClick={() => {
                            setpitchselected(true);
                            setdiscussionselected(false);
                            setupdateselected(false);
                            setdocumentselected(false);
                          }}
                          className={`${
                            pitchselected
                              ? "border-indigo-600 text-indigo-600 "
                              : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800"
                          } whitespace-nowrap border-b-2 py-6 text-sm font-medium `}
                        >
                          Pitch
                        </Tab>
                        <Tab
                          onClick={() => {
                            setpitchselected(false);
                            setdiscussionselected(true);
                            setupdateselected(false);
                            setdocumentselected(false);
                          }}
                          className={`${
                            discussionselected
                              ? "border-indigo-600 text-indigo-600 "
                              : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800"
                          } whitespace-nowrap border-b-2 py-6 text-sm font-medium `}
                        >
                          Discussion
                        </Tab>
                        <Tab
                          onClick={() => {
                            setpitchselected(false);
                            setdiscussionselected(false);
                            setupdateselected(true);
                            setdocumentselected(false);
                          }}
                          className={`${
                            updateselected
                              ? "border-indigo-600 text-indigo-600 "
                              : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800"
                          } whitespace-nowrap border-b-2 py-6 text-sm font-medium `}
                        >
                          Updates
                        </Tab>
                        <Tab
                          onClick={() => {
                            setpitchselected(false);
                            setdiscussionselected(false);
                            setupdateselected(false);
                            setdocumentselected(true);
                          }}
                          className={`${
                            documentselected
                              ? "border-indigo-600 text-indigo-600 "
                              : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800"
                          } whitespace-nowrap border-b-2 py-6 text-sm font-medium `}
                        >
                          Documents
                        </Tab>
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {/* Pitch */}
                      <Tab.Panel className="-mb-10">
                        <h3 className="sr-only">Pitch</h3>
                        <div className="mt-10">
                          <div className="prose prose-sm mt-4 text-gray-500"></div>
                        </div>
                        <a
                          href={"/manage/" + singleoffering?.slug}
                          className="w-30 mt-10 items-center justify-center rounded-md border border-transparent bg-cr-primary py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-cr-primary focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                          Manage Pitch
                        </a>
                        {/* <Pitchsection slug={props.offeringSingle.slug} /> */}
                      </Tab.Panel>

                      {/* Discussion */}
                      <Tab.Panel className="text-sm text-gray-500">
                        <h3 className="sr-only">Discussion</h3>

                        <div className="mt-4 flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="inline-block h-10 w-10 rounded-full"
                              src={
                                singleoffering?.user?.image ||
                                "/assets/default_user.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <form
                              //   onSubmit={addPost}
                              method="POST"
                              action="#"
                              className="relative"
                            >
                              <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <label htmlFor="discussion" className="sr-only">
                                  Start your discussion
                                </label>
                                <textarea
                                  rows={3}
                                  name="discussion"
                                  id="discussion"
                                  className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
                                  placeholder="Add your post..."
                                  defaultValue={""}
                                />

                                {/* Spacer element to match the height of the toolbar */}
                                <div className="py-2" aria-hidden="true">
                                  {/* Matches height of button in toolbar (1px border + 36px content height) */}
                                  <div className="py-px">
                                    <div className="h-9" />
                                  </div>
                                </div>
                              </div>

                              <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                                <div className="flex items-center space-x-5"></div>
                                <div className="flex-shrink-0">
                                  <button
                                    type="submit"
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Post
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* <Discussionsection id={props.offeringSingle.id} /> */}
                      </Tab.Panel>

                      {/* Updates */}
                      <Tab.Panel className="mt-5">
                        <h3 className="sr-only">Updates</h3>
                        <div className="mt-4 flex items-start space-x-4">
                          <div className="min-w-0 flex-1">
                            <form
                              //   onSubmit={addUpdate}
                              method="POST"
                              action="#"
                              className="relative"
                            >
                              <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <label
                                  htmlFor="discussionTitle"
                                  className="sr-only"
                                >
                                  Add new update
                                </label>
                                <input
                                  type="text"
                                  name="discussionTitle"
                                  className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
                                  placeholder="update title"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <label htmlFor="discussion" className="sr-only">
                                  Add new update
                                </label>
                                <textarea
                                  rows={3}
                                  name="discussion"
                                  className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
                                  placeholder="Add your update..."
                                  defaultValue={""}
                                />

                                {/* Spacer element to match the height of the toolbar */}
                                <div className="py-2" aria-hidden="true">
                                  {/* Matches height of button in toolbar (1px border + 36px content height) */}
                                  <div className="py-px">
                                    <div className="h-9" />
                                  </div>
                                </div>
                              </div>

                              <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                                <div className="flex items-center space-x-5"></div>
                                <div className="flex-shrink-0">
                                  <button
                                    type="submit"
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* <Updatesection id={props.offeringSingle.id} /> */}
                        <div className="prose prose-sm max-w-none text-gray-500" />
                      </Tab.Panel>

                      {/* Documents */}
                      <Tab.Panel className="pt-10">
                        <h3 className="sr-only">Documents</h3>
                        {/* <Documentsection id={props.offeringSingle.id} /> */}
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
            </main>
            <aside className="mt-20 hidden sm:col-span-4 sm:block">
              <div className="sticky top-6 space-y-4">
                {/* Product summary */}
                <div className="mx-auto mt-6 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
                  <div className="flex flex-col-reverse">
                    <div className="mt-4">
                      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                        {singleoffering?.name}
                      </h1>

                      <h2 id="information-heading" className="sr-only">
                        Product information
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 text-gray-500">
                    {singleoffering?.short_description}
                  </p>
                  <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-4">
                    {features.map((feature) => (
                      <div
                        key={feature.name}
                        className="border-t border-gray-200 pt-4"
                      >
                        <dt className="font-medium text-gray-900">
                          {feature.name}
                        </dt>
                        <dd className="text-l mt-2 text-gray-500">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-10">
                    <form
                      action={"/invest?slug=" + singleoffering?.slug}
                      method="POST"
                      className="grid grid-cols-2 items-center gap-x-6 gap-y-4"
                    >
                      <div className="col-span-1">
                        <div className="relative mt-1 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="number"
                            id="investmentAmount"
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="0.00"
                            aria-describedby="investment-amount"
                            //   onChange={(event) =>
                            //     investorForm.setInvestmentAmount(
                            //       event.target.valueAsNumber
                            //     )
                            //   }
                          />
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span
                              className="text-gray-500 sm:text-sm"
                              id="investment-amount"
                            >
                              USD
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-cr-primary py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-cr-primary focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        Invest
                      </button>
                    </form>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h3 className="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>
                    <div className="prose prose-sm mt-4 text-gray-500">
                      <ul role="list">
                        {product.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h3 className="text-sm font-medium text-gray-900">Share</h3>
                    <ul
                      role="list"
                      className="mt-4 flex items-center space-x-6"
                    >
                      <li>
                        <a
                          href="#"
                          className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Share on Facebook</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Share on Instagram</span>
                          <svg
                            className="h-6 w-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Share on Twitter</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleOffering;
