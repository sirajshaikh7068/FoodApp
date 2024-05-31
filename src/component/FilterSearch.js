import React from "react";
import Filter from "./Filter";

const FilterSearch = (props) => {
  const { searchtext, setfilterList, setsearchtext, list } = props;

  return (
    <div>
      <div className="filter flex flex-wrap p-5   justify-center gap-2">
        <input
          type="text"
          placeholder="Enter Restaurent or food"
          className="search-box  h-8  w-6/12 px-4 text-black  rounded-lg border border-black"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
            let filt = list.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            });
            setfilterList(filt);
          }}
        />
        <button
          className="search-btn bg-blue-500 font-bold text-black px-2 rounded-lg mr-25"
          onClick={() => {
            setsearchtext("");
            let filt = list.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase());
            });
            setfilterList(filt);
          }}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
