import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const user = { username: "", avatar: "" };

const tweets = [];

app.post("/sign-up", (req, res) => {
  user.username = req.body.username;
  user.avatar = req.body.avatar;
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const avatar = user.avatar;
  const newList = tweets.map((post) => {
    return { ...post, avatar };
  });

  res.send(newList.slice(-10));
});

app.post("/tweets", (req, res) => {
  tweets.push({
    username: req.body.username,
    tweet: req.body.tweet,
  });
  res.send("OK");
});

app.listen(5000);
