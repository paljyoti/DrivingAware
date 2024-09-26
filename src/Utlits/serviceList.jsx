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
    desc: `Course fee ranges from £80 to £100 (varies by region)..
         we are work as third party agency so we charge our services.`,
    icon: <GiTakeMyMoney className="text-black" />,
    delay: "100",
    link: "/cost",
  },
  {
    id: 2,
    title: "DURATION",
    desc: `Usually lasts 4 hours.
    Conducted in a classroom or online.
    Group-based, with interactive sessions
No test or exam at the end.`,
    icon: <RxCountdownTimer className="text-black" />,
    delay: "200",
    link: "/duration",
  },
  {
    id: 3,
    title: "TIMING",
    desc: `Speed awareness courses typically booking slots throughout the week, including evenings and weekends. According your schedule.`,

    icon: <BsFillStopwatchFill className="text-black" />,
    delay: "300",
    link: "/timing",
  },
  {
    id: 4,
    title: "ELIGIBILITY",
    desc: `Atleast 17 years old and low-level speeding offences. The speed must be within a certain threshold (e.g., 10% over the speed limit + 2 mph).`,
    icon: <TbRating18Plus className="text-black" />,
    delay: "400",
    link: "/eligibility",
  },
  {
    id: 5,
    title: "ASSESSMENT",
    desc: `There is generally no formal exam, but participants may be informally assessed through discussions and quizzes.`,
    icon: <BsNewspaper className="text-black" />,
    delay: "500",
    link: "/assessment",
  },
  {
    id: 6,
    title: "RESULT",
    desc: `Completing the course allows participants to avoid penalty points on their driving license and may help prevent future speeding offenses.`,
    icon: <GiNewspaper className="text-black" />,
    delay: "600",
    link: "/result",
  },
];
