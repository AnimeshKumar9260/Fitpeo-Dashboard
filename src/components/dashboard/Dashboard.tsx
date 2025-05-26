import "../../styles/dashboard/Dashboard.css";
import { Heading } from "../general/Heading";
import SearchBar from "./SearchBar";
import darr from "../../assets/dashboard/darr.svg";
import BtnIcn from "../general/BtnIcn";
import fig from "../../assets/dashboard/fig.webp";
import slider from "../../assets/dashboard/slider.webp";
import StatBox from "./StatBox";
import { dashboardData } from "../../data/dashboardData";
import rarr from "../../assets/dashboard/rarr.svg";
import Activity from "./Activity";
import zoom from "../../assets/dashboard/zoom.svg";
import ToolTip from "./ToolTip";

export default function Dashboard() {
  return (
    <div className="dashboard-main">
      {/* Search Bar */}
      <SearchBar />
      {/* Heading */}
      <div className="heading-container">
        <Heading size="1.7rem">Dashboard</Heading>
        <BtnIcn txt="This Week" img={darr} />
      </div>
      {/* Stats Grid */}
      <div className="stats-grid">
        {/* Left grid item */}
        <div className="fig-container">
          <img src={fig} alt="anatomy fig" className="fig" />
          <img src={slider} alt="slider" className="slider" />
          <img className="zoom-ico" src={zoom} alt="zoom" />
          <div className="tooltip-1">
            <ToolTip emoji="❤️" text="Healthy Heart" bg="#3633B3" />
          </div>
          <div className="tooltip-2">
            <ToolTip
              reverse={true}
              emoji="🦵🏻"
              text="Healthy Leg"
              bg="#03E0F0"
            />
          </div>
        </div>
        {/* Right grid items */}
        {dashboardData.map((item, index) => (
          <div key={index}>
            <StatBox
              emoji={item.emoji}
              name={item.name}
              date={item.date}
              color={item.color}
              progress={item.progress}
            />
            {index + 1 === dashboardData.length && (
              <div className="alt-div">
                <BtnIcn txt="Details" img={rarr} />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Activity status */}
      <Activity />
    </div>
  );
}
