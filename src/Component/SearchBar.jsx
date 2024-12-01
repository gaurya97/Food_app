import React from "react";

const SearchBar = () => {
 
  return (
    <div className="flex justify-center px-4 my-3">
    {/* <!-- Container for the search bar --> */}
    <div className="relative w-full max-w-2xl">
    <input 
        type="text" 
        placeholder="Search Location"
        className="search-input outline-none w-full px-4 py-2 rounded-full bg-white border border-gray-300 shadow-sm text-gray-700 " 
      />
      {/* <!-- Search icon --> */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a6 6 0 100-12 6 6 0 000 12zm8 0l-3.5-3.5"></path>
      </svg>
    </div>
  </div>
  )
}

export default SearchBar
