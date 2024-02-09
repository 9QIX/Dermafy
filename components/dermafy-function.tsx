"use client";

export default function DermafyFunction() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Try Dermafy</h2>

            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* User input upload file */}
          <div className="relative flex flex-col items-center justify-center h-screen ">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl w-full max-w-md">
              <form method="post" encType="multipart/form-data" action="/img">
                {/* Age input field */}
                <div className="mb-4">
                  <label htmlFor="age" className="block text-gray-700">
                    Age
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                {/* Sex selection dropdown */}
                <div className="mb-4">
                  <label htmlFor="sex" className="block text-gray-700">
                    Sex
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="male">Male</option>
                    <option value="female" selected>
                      Female
                    </option>
                  </select>
                </div>
                {/* File upload input */}
                <div className="mb-4">
                  <label htmlFor="image_uploads" className="block text-gray-700">
                    {/* Choose images to upload */}
                  </label>
                  <input
                    type="file"
                    id="image_uploads"
                    name="image_uploads"
                    accept="image/*"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                {/* Submit button */}
                <div>
                  <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700" type="submit" name="submit">
                    Submit
                  </button>
                </div>
              </form>

              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"></svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Upload Your Image Here!</h4> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
