import { useState } from "react";
import Courses from "../courses/Courses";
import Filter from "../filter/Filter";
import SearchBar from "../searchbar/SearchBar";
import "./main.css";

const Main = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleH1Click = () => {
    setIsClicked(!isClicked);
  };

  const handleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container" id="main">
      <div className="devsoc">DevSoc presents</div>
      <h1
        className="h-1"
        style={{ color: isClicked ? "red" : "rgb(20, 121, 242)" }}
        onClick={handleH1Click}
      >
        unilectives
      </h1>
      <h2 className="h-2">
        Your one-stop shop for UNSW course and elective reviews.
      </h2>
      <SearchBar onClick={handleSearch} />
      {isActive && (
        <div className="search-n-1">
          <div className="close-button" onClick={handleSearch}>
            Close
          </div>
        </div>
      )}
      <Filter />
      <Courses />
    </div>
  );
};

export default Main;
