import "../../styles/planner/Planner.css";
import { Card } from "../general/Card";
import memoji from "../../assets/planner/memoji.webp";
import plus from "../../assets/planner/plus.svg";
import { Heading } from "../general/Heading";
import rarr from "../../assets/planner/rarr.svg";
import larr from "../../assets/planner/larr.svg";
import CalItem from "./CalItem";
import { calData } from "../../data/plannerData";
import PlanCard from "./PlanCard";

export default function Planner() {
  return (
    <div className="planner-main">
      {/* Header */}
      <div className="planner-header">
        <Card radius="10px" padding=".4rem" color="#05E2ED">
          <div className="mid-box">
            <img src={memoji} alt="profile" className="profile-img" />
          </div>
        </Card>
        <Card radius="10px" padding=".4rem" color="#3631A3">
          <div className="mid-box">
            <img src={plus} alt="profile" className="profile-img" />
          </div>
        </Card>
      </div>
      {/* Sub header */}
      <div className="planner-sub-head">
        <Heading size="1rem">October 2021</Heading>
        <div className="btn-grp">
          <img src={larr} alt="back" className="planner-nav-ico" />
          <img src={rarr} alt="right" className="planner-nav-ico" />
        </div>
      </div>
      {/* Calendar */}
      <div className="cal-grid">
        {calData.map((item, index) => (
          <CalItem key={index} {...item} />
        ))}
      </div>
      {/* Today cards */}
      <div className="today-grid">
        <PlanCard />
        <PlanCard />
      </div>
    </div>
  );
}
