import geog from "../assets/geog.svg";
import history from "../assets/history.svg";
import math from "../assets/maths.svg";
import {v4 as uuid} from "uuid";

export const categories = [
    {
      id: uuid(),
      title: "Mathematics",
      description:
      "Do you believe you are a maths genius??? Test your skills to check if you actually are a genius or a noob.",
      quizCategory: "Mathematics",
      value: 19,
      img: math,
      mostPlayed: false,
    },
    {
      id: uuid(),
      title: "History",
      description:
        "Challenge yourself to take this quiz on Indian History??? I bet you cannot get more than an average child.",
      quizCategory: "History",
      value: 23,
      img: history,
      mostPlayed: true,
    },
    {
      id: uuid(),
      title: "Geography",
      description:
        "Do you know where is the highest cricket ground in the world. I bet you don't know enough to get through.",
      quizCategory: "Geography",
      value: 22,
      img: geog,
      mostPlayed: false,
    }
];
  