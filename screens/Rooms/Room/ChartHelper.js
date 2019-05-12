const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const HOURS = [
  "24",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23"
];

export const chartPieColors = [
  "#2274A5",
  "#42a0d8",
  "#87c2e6",
  "#000000",
  "#444444",
  "#888888",
  "#FFBF00",
  "#ffd044",
  "#ffe188"
];

export const formatDaysData = data =>
  data.map((value, index) => {
    return {
      x: WEEK_DAYS[index],
      y: value
    };
  });

export const formatHoursData = data =>
  data.map((value, index) => ({
    x: HOURS[index],
    y: value
  }));
