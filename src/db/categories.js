import geog from "../assets/geog.svg";
import history from "../assets/history.svg";
import math from "../assets/maths.svg";
import book from "../assets/book.svg";
import comics from "../assets/comics.svg";
import science from "../assets/science.svg";
import tech from "../assets/tech.svg";
import sports from "../assets/sports.svg";
import vehicle from "../assets/vehicle.svg";

import {v4 as uuid} from "uuid";

export const categories = [
    {
      id: uuid(),
      title: "Mathematics",
      description:
      "Do you believe you are a maths genius??? Test your skills to check if you actually are a genius or a noob.",
      quizCategory: "Mathematics",
      itemCategory: "education",
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
      itemCategory: "education",
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
      itemCategory: "education",
      value: 22,
      img: geog,
      mostPlayed: false,
    },
    {
      id: uuid(),
      title: "Science and Nature",
      description:
        "Are you aware of the development and revolutions in science and nature. I bet you don't know enough to get through.",
      quizCategory: "Science and Nature",
      value: 17,
      img: science,
      itemCategory: "education",
      mostPlayed: true
    },
    {
      id: uuid(),
      title: "Books",
      description:
        "Do you know where is the largets book market in the world located. I bet you don't know enough to get through.",
      quizCategory: "Science and Nature",
      value: 10,
      img: book,
      itemCategory: "entertainment",
      mostPlayed: false
    },
    {
      id: uuid(),
      title: "Comics",
      description:
        "Are you a comics fan, do you love reading comics then try this out. I bet you don't know enough to get through.",
      quizCategory: "Science and Nature",
      value: 29,
      img: comics,
      itemCategory: "entertainment",
      mostPlayed: true
    },
    {
      id: uuid(),
      title: "Tech",
      description:
        "Do you know the different techs that are taking the world by surprise. I bet you don't know enough to get through.",
      quizCategory: "Science and Nature",
      value: 30,
      img: tech,
      itemCategory: "tech",
      mostPlayed: false
    },
    {
      id: uuid(),
      title: "Sports",
      description:
        "Do you know the best players across multiple sports field, if yes then try it out. I bet you don't know enough to get through.",
      quizCategory: "Sports",
      value: 21,
      img: sports,
      itemCategory: "sports",
      mostPlayed: false
    },
    {
      id: uuid(),
      title: "Vehicle",
      description:
        "Do you know the best superbikes and super cars, if yes then try it out. I bet you don't know enough to get through.",
      quizCategory: "Vehicles",
      value: 28,
      img: vehicle,
      itemCategory: "vehicles",
      mostPlayed: false
    }
];
  