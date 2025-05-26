interface CalItem {
  selected: boolean;
  day: string;
  date: string;
  time1: { active: boolean; value: string };
  time2: { active: boolean; value: string };
  time3: { active: boolean; value: string };
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
