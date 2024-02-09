import React, { FormEvent } from "react";
import "flowbite";

const DermafyFunction: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // handle the submit logic here
  };

  return (
    <section id="section-to-scroll" className="relative flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-[#00B2FF] mb-8">Try Dermafy!</h1>
      <form method="post" encType="multipart/form-data" action="/img" className="max-w-xl bg-gray-200 px-6 md:px-16 pb-12 pt-12 text-center rounded-2xl" onSubmit={handleSubmit}>
        <div className="bg-mb-4 border-none text-center">
          <div className="mb-2">
            <label htmlFor="image_uploads" className="block text-[16px] font-medium text-[#1E1E1E] pb-5">
              Upload or Take Your Image Here!
            </label>
            <input
              type="file"
              id="image_uploads"
              name="image_uploads"
              accept="image/*"
              required
              className="bg-[#1f2937] text-[#00B2FF] py-2 md:py-3 px-4 md:px-6 rounded-xl text-md md:text-xl focus:outline-none focus:border-blue-500 hover:border-blue-500"
            />
          </div>
        </div>
        <div>
          <div>
            <button
              type="submit"
              name="submit"
              className="bg-[#00B2FF] text-white py-2 px-4 md:px-6 rounded-xl font-medium md:text-xl m-4
                hover:bg-[#1FC0CA] hover:text-[#244f6b] transition duration-250"
            >
              Dermafy!
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default DermafyFunction;
