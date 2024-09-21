import { BsNewspaper } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { TbRating18Plus } from "react-icons/tb";
import { BsFillStopwatchFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiNewspaper } from "react-icons/gi";

import { Link } from "react-router-dom";

export const serviceList = [
  {
    id: 1,
    title: "COST",
    desc: `It is a long established fact that reader will be distracted
          readable content of a page when.`,
    icon: <GiTakeMyMoney className="text-black" />,
    delay: "100",
    link: "/cost",
  },
  {
    id: 2,
    title: "DURATION",
    desc: `It is a long established fact that reader will be distracted
          readable content of a page when.`,
    icon: <RxCountdownTimer className="text-black" />,
    delay: "200",
    link: "/duration",
  },
  {
    id: 3,
    title: "TIMING",
    desc: `It is a long established fact that reader will be distracted
          readable content of a page when.`,

    icon: <BsFillStopwatchFill className="text-black" />,
    delay: "300",
    link: "/timing",
  },
  {
    id: 4,
    title: "ELIGIBILITY",
    desc: `It is a long established fact that reader will be distracted
          readable content of a page when.`,
    icon: <TbRating18Plus className="text-black" />,
    delay: "400",
    link: "/eligibility",
  },
  {
    id: 5,
    title: "ASSESSMENT",
    desc: `It is a long established fact that reader will be distracted
          readable content of a page when.`,
    icon: <BsNewspaper className="text-black" />,
    delay: "500",
    link: "/assessment",
  },
  {
    id: 6,
    title: "RESULT",
    desc: `It is a long established fact that reader will be distracted
          readable content of a page when.`,
    icon: <GiNewspaper className="text-black" />,
    delay: "600",
    link: "/result",
  },
];
