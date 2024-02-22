import { BookOpenIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import UniElectives from "../../unilectives.svg";
import { BarsArrowUpIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="container" id="sidebar">
      <div className="container-icon n-1">
        <img src={UniElectives} className="logo" alt="Unilectives" />
        <div className="grey"></div>
        <BookOpenIcon height={25} width={27} />
        <ShieldCheckIcon height={25} width={27} />
      </div>
      <div className="container-icon n-2">
        <BarsArrowUpIcon
          height={25}
          width={27}
          style={{ transform: "rotate(90deg)" }}
        />
        <UserCircleIcon height={25} width={27} />
        <MoonIcon height={25} width={27} />
        <ArrowRightEndOnRectangleIcon height={25} width={27} />
      </div>
    </div>
  );
};

export default Sidebar;
