import "../../styles/planner/Planner.css";
import { Card } from "../general/Card";
import memoji from "../../assets/planner/memoji.webp";

export default function Planner() {
  return (
    <div className="planner-main">
      <div className="planner-header">
        <Card radius="8px" padding=".3rem" color="#05E2ED">
          <div className="mid-box">
            <img src={memoji} alt="profile" className="profile-img" />
          </div>
        </Card>
      </div>
    </div>
  );
}
