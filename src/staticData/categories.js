import geog from "../assets/geog.svg";
import history from "../assets/history.svg";
import math from "../assets/maths.svg";
import {v4 as uuid} from "uuid";

export const categories = [
    {
      id: uuid(),
      title: "Maths Formula",
      description:
        "Do you think you remember formulas you learnt at school??? Test your memory power by taking this groovy math formula quiz.",
      quizCategory: "maths",
      img: math,
      mostPlayed: false,
    },
    {
      id: uuid(),
      title: "Indian History",
      description:
        "Challenge yourself to take this quiz on Indian History??? I bet you cannot get more than an average child.",
      quizCategory: "history",
      img: history,
      mostPlayed: true,
    },
    {
      id: uuid(),
      title: "National Geography",
      description:
        "Do you know where is the highest cricket ground in the world. I bet you don't know enough to get through.",
      quizCategory: "geog",
      img: geog,
      mostPlayed: false,
    }
];
  