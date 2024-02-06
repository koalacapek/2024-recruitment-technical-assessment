import { BookOpenIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ReactComponent as UniElectives } from "../../unilectives.svg";
import { BarsArrowUpIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="container" id="sidebar">
      <div className="container-icon n-1">
        <UniElectives className="logo" />
        <BookOpenIcon height={30} width={33} />
        <ShieldCheckIcon height={30} width={33} />
      </div>
      <div className="container-icon n-2">
        <BarsArrowUpIcon
          height={30}
          width={33}
          style={{ transform: "rotate(90deg)" }}
        />
        <UserCircleIcon height={30} width={33} />
        <MoonIcon height={30} width={33} />
        <ArrowRightEndOnRectangleIcon height={30} width={33} />
      </div>
    </div>
  );
};

export default Sidebar;
