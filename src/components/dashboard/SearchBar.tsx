import search from "../../assets/dashboard/search.svg";
import notification from "../../assets/dashboard/notification.svg";

export default function SearchBar() {
  return (
    <div className="search-box">
      <img className="search-ico" src={search} alt="search"></img>
      <input className="search-input" type="text" placeholder="Search" />
      <img className="search-ico" src={notification} alt="notifications"></img>
    </div>
  );
}
