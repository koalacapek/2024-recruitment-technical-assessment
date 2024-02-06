import { useState } from "react";
import Card from "../card/Card";
import Courses from "../courses/Courses";
import Filter from "../filter/Filter";
import SearchBar from "../searchbar/SearchBar";
import "./main.css";

const Main = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleH1Click = () => {
    setIsClicked(!isClicked);
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
      <SearchBar />
      <Filter />
      <Courses />
    </div>
  );
};

export default Main;
