import { Heading } from "../general/Heading";
import { Card } from "../general/Card";
import GraphItem from "./GraphItem";
import { dashboardGraphdata, days } from "../../data/dashboardData";

export default function Activity() {
  return (
    <div className="activity-main">
      <Card padding=".2rem 1.4rem">
        {/* Header */}
        <div className="activity-heading">
          <Heading size="1.1rem">Activity</Heading>
          <p className="actvity-sub-head alt-item">3 appointment this week</p>
        </div>
        {/* Graphs */}
        <div className="graph-container">
          {dashboardGraphdata.map((item, index) => (
            <GraphItem key={index} {...item} />
          ))}
        </div>
        {/* Days */}
        <div className="days-container">
          {days.map((item, index) => (
            <p className="actvity-sub-head" key={index}>
              {item}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
}
