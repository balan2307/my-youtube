import React from "react";
import search from "../../assets/search.svg";
import { useState, useEffect } from "react";
import { SEARCH_SUGGESTION_API } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/searchSlice";

function SearchForm({ style, type }) {
  const dispatch = useDispatch();

  const [searchedTerm, setSearchedTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [toggleResults, setToggle] = useState(true);
  const searches = useSelector((state) => state.search.searches);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searches[searchedTerm]) {
        setSuggestion(searches[searchedTerm]);
      } else getSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchedTerm]);

  async function getSuggestion() {
    const response = await fetch(SEARCH_SUGGESTION_API + searchedTerm);
    const data = await response.json();
    setSuggestion(data[1]);
    const newData = {
      key: searchedTerm,
      value: data[1],
    };
    dispatch(searchActions.addtoCache({ [searchedTerm]: data[1] }));
  }

  function handleClick(e) {
    const q = e.target.dataset.query;

    if (e.target.tagName != "P") return;
    setToggle(false);
    setSearchedTerm(q);
    navigate(`/results?search_query=${q}`);
  }

  return (
    <div>
      <form
        className={style}
        onSubmit={(e) => {
          e.preventDefault()
          setToggle(false)
          navigate(`/results?search_query=${searchedTerm}`);
        }}
      >
        <input
          type="text"
          className="rounded-l-3xl border border-[#e6e8ec] h-8 w-[85%] py-2 px-3 "
          value={searchedTerm}
          onChange={(e) => {
            setSearchedTerm(e.target.value);
         
            
          }}
          onFocus={() => setToggle(true)}
          onBlur={() => setToggle(false)}
        ></input>

        <div
          className="inline-flex w-[15%] h-8 border border-[#e6e8ec] justify-center rounded-r-3xl border-l-0
    bg-[#f2f2f2]
    "
        >
          <img src={search} className="w-[1.5rem] inline " alt="search"
          onClick={()=>{
            navigate(`/results?search_query=${searchedTerm}`);
            setToggle(false)
          }}></img>
        </div>
      </form>

      {searchedTerm.length != 0 && suggestion.length != 0 && toggleResults && (
        <div
          className={`w-[70%] md:w-[40%] border  mt-1 absolute
         bg-white p-2 rounded-md shadow-md ${
           type == "lg" ? "hidden md:block" : ""
         }`}
        >
          {suggestion.map((suggest, i) => {
            return (
              <div
                className="flex  hover:bg-gray-200"
                key={i}
                onMouseDown={(e) => handleClick(e)}
              >
                <img
                  src={search}
                  className="w-[1.5rem] inline "
                  alt="search"
                ></img>
                <p className="p-1 cursor-pointer" data-query={suggest}>
                  {suggest}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchForm;
