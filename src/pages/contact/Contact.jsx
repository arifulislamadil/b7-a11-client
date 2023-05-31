import React from "react";
import "tailwindcss/tailwind.css";
import DynamicHeader from "../../routes/DynamicHeader";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
       <DynamicHeader title="Contact"></DynamicHeader>
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="md:col-span-1">
          <img
            src="https://www.mashreqcapital.ae/-/jssmedia/Images/capital/capital-images/capital-contact-us-hero-900x600.ashx?h=600&iar=0&w=900&hash=320E8C00031B125CB6248502BCD1CEBC"
            alt=""
          />
        </div>
        <div className="mt-5 md:mt-0 md:col-span-1">
          <form>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 bg-white sm:p-6 mt-3 rounded py-10">
                <h2 className="text-4xl font-bold mb-2 text-orange-600">Contact Us</h2>
                <p className="text-gray-700 leading-loose">
                  Have a question, comment, or suggestion? Get in touch with us
                  using the form below.
                </p>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="flex mx-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;