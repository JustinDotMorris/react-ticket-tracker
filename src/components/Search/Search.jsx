import "./Search.scss";
import { useState } from "react";

const Search = () => {
  //on button click
  const [searchTerm, setSearchTerm] = useState("test");

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };
  //search array for the input text

  //make an array of all roles

  //populate dropdown box with contents of array

  //search for selected option
  const roleDropdownArray = [];
  return (
    <div className="card__searchContainer">
      <input
        className="card__search"
        type="text"
        placeholder="Search for names"
        onChange={handleSearchTerm}
      />
      <select className="card__search" name="roleDropdown" id="">
        <option value="" disabled>
          Filter by Role:
        </option>
      </select>
      <div className="search__buttonContainer">
        <button className="search__button">Search/Filter</button>
      </div>
    </div>
  );
};

export default Search;
