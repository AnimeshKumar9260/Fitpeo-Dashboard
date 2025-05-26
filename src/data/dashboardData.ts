interface DashboardItem {
  emoji: string;
  name: string;
  date: string;
  color: string;
  progress: string;
}

interface DashboardGraphItem {
  line1: string[];
  line2: string;
  line3: string[];
  line4: string;
  day: string;
}

export const dashboardData: DashboardItem[] = [
  {
    emoji: "🫁",
    name: "Lungs",
    date: "26 Oct 2021",
    color: "#B34C4C",
    progress: "70%",
  },
  {
    emoji: "🦷",
    name: "Teeth",
    date: "26 Oct 2021",
    color: "#7DD3C3",
    progress: "50%",
  },
  {
    emoji: "🦴",
    name: "Bone",
    date: "26 Oct 2021",
    color: "#FE7E5F",
    progress: "90%",
  },
];

export const dashboardGraphdata: DashboardGraphItem[] = [
  {
    line1: ["#DBDFE4"],
    line2: "#35D6E4",
    line3: ["#DBDFE4", "#DBDFE4"],
    line4: "#DBDFE4",
    day: "Mon",
  },
  {
    line1: ["#35D6E4", "#505A9B"],
    line2: "#505A9B",
    line3: ["#DBDFE4", "#DBDFE4"],
    line4: "#35D6E4",
    day: "Tue",
  },
  {
    line1: ["#DBDFE4"],
    line2: "#DBDFE4",
    line3: ["#35D6E4", "#505A9B"],
    line4: "#505A9B",
    day: "Wed",
  },
  {
    line1: ["#DBDFE4", "#DBDFE4"],
    line2: "#35D6E4",
    line3: ["#35D6E4", "#505A9B"],
    line4: "#DBDFE4",
    day: "Thu",
  },
  {
    line1: ["#DBDFE4"],
    line2: "#505A9B",
    line3: ["#DBDFE4", "#DBDFE4"],
    line4: "#DBDFE4",
    day: "Fri",
  },
  {
    line1: ["#35D6E4", "#505A9B"],
    line2: "#35D6E4",
    line3: ["#DBDFE4", "#DBDFE4"],
    line4: "#505A9B",
    day: "Sat",
  },
  {
    line1: ["#DBDFE4"],
    line2: "#DBDFE4",
    line3: ["#35D6E4", "#505A9B"],
    line4: "#505A9B",
    day: "Sun",
  },
  {
    line1: ["#DBDFE4", "#DBDFE4"],
    line2: "#35D6E4",
    line3: ["#DBDFE4", "#DBDFE4"],
    line4: "#505A9B",
    day: "Pun",
  },
];

export const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "sat", "Sun"];
