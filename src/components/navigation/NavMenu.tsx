import "../../styles/navigation/NavMenu.css";
import { NavWrapper } from "./NavItemWrapper";
import NavMenuItem from "./NavMenuItem";
import setting from "../../assets/navigation/setting.svg";
import { navData1, navData2 } from "../../data/navData";

export default function NavMenu() {
  return (
    <div className="nav-main">
      <div className="nav-first">
        {/* Logo */}
        <p className="logo">
          Health<span className="sub-logo">care.</span>
        </p>
        {/* General tab */}
        <NavWrapper head="General">
          {navData1.map((item, index) => (
            <NavMenuItem
              key={index}
              img={item.img}
              text={item.name}
              isActive={index === 0}
            />
          ))}
        </NavWrapper>
        {/* Tool tab */}
        <NavWrapper head="Tools">
          {navData2.map((item, index) => (
            <NavMenuItem key={index} img={item.img} text={item.name} />
          ))}
        </NavWrapper>
      </div>
      {/* Settings */}
      <div className="setting-ico">
        <NavMenuItem img={setting} text="Setting" />
      </div>
    </div>
  );
}
