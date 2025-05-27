interface CalItem {
  selected: boolean;
  day: string;
  date: string;
  time1: { active: boolean; value: string };
  time2: { active: boolean; value: string };
  time3: { active: boolean; value: string };
}

interface AppointCard {
  color?: string;
  title: string;
  emoji: string;
  time: string;
  name?: string;
}

export const calData: CalItem[] = [
  {
    selected: false,
    day: "Mon",
    date: "25",
    time1: { active: false, value: "10:00" },
    time2: { active: false, value: "11:00" },
    time3: { active: false, value: "12:00" },
  },
  {
    selected: true,
    day: "Tue",
    date: "26",
    time1: { active: false, value: "8:00" },
    time2: { active: true, value: "9:00" },
    time3: { active: false, value: "10:00" },
  },
  {
    selected: false,
    day: "Wed",
    date: "27",
    time1: { active: false, value: "12:00" },
    time2: { active: false, value: "-----" },
    time3: { active: false, value: "13:00" },
  },
  {
    selected: false,
    day: "Thu",
    date: "28",
    time1: { active: false, value: "10:00" },
    time2: { active: true, value: "11:00" },
    time3: { active: false, value: "-----" },
  },
  {
    selected: false,
    day: "Fri",
    date: "29",
    time1: { active: false, value: "-----" },
    time2: { active: false, value: "14:00" },
    time3: { active: false, value: "16:00" },
  },
  {
    selected: false,
    day: "Sat",
    date: "30",
    time1: { active: true, value: "12:00" },
    time2: { active: false, value: "14:00" },
    time3: { active: false, value: "15:00" },
  },
  {
    selected: false,
    day: "Sun",
    date: "31",
    time1: { active: true, value: "9:00" },
    time2: { active: false, value: "10:00" },
    time3: { active: false, value: "11:00" },
  },
];

export const todayCards: AppointCard[] = [
  {
    color: "#3734A9",
    title: "Dentist",
    emoji: "🦷",
    time: "09:00-11:00",
    name: "Dr. Cameron Williamson",
  },
  {
    title: "Physiotherapy Appoinment",
    emoji: "💪🏻",
    time: "11:00-12:00",
    name: "Dr. Kevin Djones",
  },
];

export const thuCards: AppointCard[] = [
  {
    title: "Health checkup complete",
    emoji: "💉",
    time: "11:00 AM",
  },
  {
    title: "Ophthalmologist",
    emoji: "👁️",
    time: "14:00 PM",
  },
];

export const satCards: AppointCard[] = [
  {
    title: "Cardiologist",
    emoji: "❤️",
    time: "12:00 AM",
  },
  {
    title: "Neurologist",
    emoji: "🧑🏻‍⚕️",
    time: "16:00 PM",
  },
];
