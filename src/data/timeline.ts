import type { Timeline, TimelineDay } from "../types/timeline";

// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const _ = {
  red: [
    "text-[#D34646]",
    "bg-[#D34646]",
    "[text-shadow:0_0_10px_#D34646,0_0_20px_#D34646]",
    "[box-shadow:0_0_10px_#D34646,0_0_20px_#D34646]",
  ],
  yellow: [
    "text-[#F1DD24]",
    "bg-[#F1DD24]",
    "[text-shadow:0_0_10px_#F1DD24,0_0_20px_#F1DD24]",
    "[box-shadow:0_0_10px_#F1DD24,0_0_20px_#F1DD24]",
  ],
  green: [
    "text-[#58FC68]",
    "bg-[#58FC68]",
    "[text-shadow:0_0_10px_#58FC68,0_0_20px_#58FC68]",
    "[box-shadow:0_0_10px_#58FC68,0_0_20px_#58FC68]",
  ],
  blue: [
    "text-[#43DDFF]",
    "bg-[#43DDFF]",
    "[text-shadow:0_0_10px_#43DDFF,0_0_20px_#43DDFF]",
    "[box-shadow:0_0_10px_#43DDFF,0_0_20px_#43DDFF]",
  ],
};

const timelineData: Timeline = [
  {
    day: 24,
    title: "MAKE-IT MONDAY",
    color: "#D34646",
    events: [
      {
        title: "SOCW 2024: OPENING",
        description: "Resource Talk 1\nBrain Busters\nFamily Feud",
        location: "Auditorium, 12F",
        time: "8:00AM",
      },
      {
        title: "Workshop",
        description: "Audio Design for Game Dev Students",
        location: "Room #",
        time: "1:00PM",
      },
      {
        title: "Workshop",
        description: "Git and GitHub",
        location: "Room #",
        time: "2:30PM",
      },
    ],
  },
  {
    day: 25,
    title: "TOMORROW TUESDAY",
    color: "#F1DD24",
    events: [
      {
        title: "SCHOOL OF COMPUTING",
        description: "CAREER FAIR 2024",
        location: "Auditorium, 12F",
        time: "9:00AM",
      },
      {
        title: "AR MUSEUM",
        description: "Opening",
        location: "Room #",
        time: "9:00AM",
      },
    ],
  },
  {
    day: 26,
    title: "WANDERER'S WEDNESDAY",
    color: "#58FC68",
    events: [
      {
        title: "GENSHIN IMPACT",
        description: "University Roadshow",
        location: "Auditorium, 12F",
        time: "9:00AM",
      },
      {
        title: "LEAGUE OF LEGENDS",
        description: "Eliminations",
        location: "MPH, 12F",
        time: "10:00AM",
      },
      {
        title: "VALORANT",
        description: "Eliminations",
        location: "MPH, 12F",
        time: "10:00AM",
      },
    ],
  },
  {
    day: 27,
    title: "TECH WARS THURSDAY",
    color: "#43DDFF",
    events: [
      {
        title: "ESCAPE ROOM",
        location: "Room #",
        time: "9:00AM",
      },
      {
        title: "DESIGNATHON",
        location: "Room #",
        time: "9:00AM",
      },
      {
        title: "LEAGUE OF LEGENDS",
        description: "Semi-Finals",
        location: "MPH, 12F",
        time: "10:00AM",
      },
      {
        title: "VALORANT",
        description: "Semi-Finals",
        location: "MPH, 12F",
        time: "10:00AM",
      },
      {
        title: "CODE IN THE DARK",
        location: "Room #",
        time: "10:30AM",
      },
      {
        title: "Workshop",
        description: "Keyboard Modding",
        location: "Auditorium, 12F",
        time: "1:00PM",
      },
    ],
  },
];

export default timelineData;
