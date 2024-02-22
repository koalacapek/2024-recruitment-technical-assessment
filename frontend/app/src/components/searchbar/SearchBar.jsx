import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import "./searchbar.css";

const SearchBar = ({ onClick }) => {
  return (
    <div id="searchbar" onClick={onClick}>
      <MagnifyingGlassIcon width={25} height={25} color="rgb(156,172,233)" />
      <div>Search for a course e.g. COMP1511</div>
    </div>
  );
};

export default SearchBar;
