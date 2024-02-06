import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./filter.css";

const Filter = () => {
  return (
    <div id="filter">
      <div>Sort by</div>
      <ChevronDownIcon width={20} height={20} color="black" />
    </div>
  );
};

export default Filter;
