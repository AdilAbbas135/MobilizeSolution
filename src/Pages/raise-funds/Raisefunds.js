import React from "react";
import Header from "../../components/navigation/Header";

const Raisefunds = () => {
  const submitContact = () => {};
  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
              Get to raisin!
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
              Make your dreams come true with the power of an international
              community that wants to see you succeed.
            </p>
          </div>
        </div>

        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Lets get your project funded
                </h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  Please fill out the form below. We will be notified and
                  respond to you within 48 hours. Thank you for your interest!
                </p>
                <form
                  //onSubmit={() => submitContact(ev)}
                  onSubmit={submitContact}
                  action="#"
                  method="POST"
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="given-name"
                        required
                        className="p-2 focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="last-name"
                        autoComplete="family-name"
                        required
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Offering/Company Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-gray-500"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="how-can-we-help"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tell us about yourself please!
                      </label>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="helpText"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <fieldset className="sm:col-span-2">
                    <legend className="block text-sm font-medium text-gray-700">
                      How much are you trying to raise?
                    </legend>

                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id="budget-under-500k"
                          name="budget"
                          defaultValue="under_500k"
                          type="radio"
                          className="focus:ring-grape-500 text-grape-600 h-4 w-4 border-gray-300"
                        />
                        <label htmlFor="budget-under-500k" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            Less than $500K
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-500k-1M"
                          name="budget"
                          defaultValue="500k-1M"
                          type="radio"
                          className="focus:ring-grape-500 text-grape-600 h-4 w-4 border-gray-300"
                        />
                        <label htmlFor="budget-500k-1M" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            $500K – $1M
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-1M-2.5M"
                          name="budget"
                          defaultValue="1M-2.5M"
                          type="radio"
                          className="focus:ring-grape-500 text-grape-600 h-4 w-4 border-gray-300"
                        />
                        <label htmlFor="budget-1M-2.5M" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            $1M - $2.5M
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-2.5M-5M"
                          name="budget"
                          defaultValue="2.5M-5M"
                          type="radio"
                          className="focus:ring-grape-500 text-grape-600 h-4 w-4 border-gray-300"
                        />
                        <label htmlFor="budget-1M-2.5M" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            $2.5M - $5.0M
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-over-5M"
                          name="budget"
                          defaultValue="over_5M"
                          type="radio"
                          className="focus:ring-grape-500 text-grape-600 h-4 w-4 border-gray-300"
                        />
                        <label htmlFor="budget-over-5M" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            $5M+
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="how-did-you-hear-about-us"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How did you hear about us?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="hearUs"
                        id="how-did-you-hear-about-us"
                        className="focus:ring-grape-500 focus:border-grape-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="hover:bg-grape-700 focus:ring-grape-500 inline-flex justify-center rounded-md border border-transparent bg-cr-primary py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Raisefunds;
