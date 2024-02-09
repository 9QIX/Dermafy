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
          <div className="relative flex flex-col items-center justify-center h-screen">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="mb-2">
                <input type="file" id="image_uploads" name="image_uploads" accept="image/*" required />
              </div>
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Upload Your Image Here!</h4>
              <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
