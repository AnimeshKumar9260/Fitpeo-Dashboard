import add from "../assets/navigation/add.svg";
import cal from "../assets/navigation/cal.svg";
import chat from "../assets/navigation/chat.svg";
import dashboard from "../assets/navigation/dashboard.svg";
import graph from "../assets/navigation/graph.svg";
import history from "../assets/navigation/history.svg";
import phone from "../assets/navigation/phone.svg";

export interface NavItem {
  img: string;
  name: string;
}

export const navData1: NavItem[] = [
  { img: dashboard, name: "Dashboard" },
  { img: history, name: "History" },
  { img: cal, name: "Calendar" },
  { img: add, name: "Appointments" },
  { img: graph, name: "Statistics" },
];

export const navData2: NavItem[] = [
  { img: chat, name: "Chat" },
  { img: phone, name: "Support" },
];
