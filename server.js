const PORT = 8000;

// const https = require("https");
// const http = require("http");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/chest", (req, res) => {
  const chestOptions = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: { muscle: "chest" },
    headers: {
      "X-RapidAPI-Key": process.env.EXERCISE_PAGE_API_KEY,
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(chestOptions)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/back", (req, res) => {
  const backOptions = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: { muscle: "lats" },
    headers: {
      "X-RapidAPI-Key": process.env.EXERCISE_PAGE_API_KEY,
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(backOptions)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/shoulders", (req, res) => {
  const shouldersOptions = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: { muscle: "shoulders" },
    headers: {
      "X-RapidAPI-Key": process.env.EXERCISE_PAGE_API_KEY,
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(shouldersOptions)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/legs1", (req, res) => {
  const legs1Options = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: { muscle: "quadriceps" },
    headers: {
      "X-RapidAPI-Key": process.env.EXERCISE_PAGE_API_KEY,
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(legs1Options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/legs2", (req, res) => {
  const legs2Options = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: { muscle: "glutes" },
    headers: {
      "X-RapidAPI-Key": process.env.EXERCISE_PAGE_API_KEY,
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(legs2Options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
