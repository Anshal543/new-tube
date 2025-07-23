import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
    // Todo Add search functionality
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none w-full pl-4 py-2 pr-12 rounded-l-full border focus:border-blue-500"
        />
        {/* Add remove search button */}
      </div>
      <button className="px-5 py-2.5 border border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
        <SearchIcon className="size-5"/>
      </button>
    </form>
  );
};
