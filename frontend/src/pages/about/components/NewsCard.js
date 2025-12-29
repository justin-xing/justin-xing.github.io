import classes from "./NewsCard.module.css";

const KANJI_GARDEN_LINK = "https://www.kanjigarden.xyz/";
const UWATERLOO_NEWS_LINK =
  "https://uwaterloo.ca/news/mathematics/how-waterloos-future-work-institute-unlocking-human-learning-ai";
const FUTURES_LAB_LINK = "https://uwfutureslab.ca/";

const NEWS_ENTRIES = [
  {
    date: "12/18/25",
    content: (
      <>
        {" "}
        My app{" "}
        <a href={KANJI_GARDEN_LINK} target="_blank" rel="noreferrer">
          Kanji Garden
        </a>{" "}
        was featured in{" "}
        <a href={UWATERLOO_NEWS_LINK} target="_blank" rel="noreferrer">
          Waterloo News
        </a>
        .
      </>
    ),
  },
  {
    date: "12/1/25",
    content: (
      <>
        I presented my team's app{" "}
        <a href={KANJI_GARDEN_LINK} target="_blank" rel="noreferrer">
          Kanji Garden
        </a>{" "}
        at the UWaterloo-Google Symposium. We won the 'Best Poster' award.
      </>
    ),
  },
  {
    date: "9/27/25",
    content: (
      <>
        I will be joining the{" "}
        <a href={FUTURES_LAB_LINK} target="_blank" rel="noreferrer">
          Futures Lab
        </a>{" "}
        workshop to prototype learning tools using AI.
      </>
    ),
  },
  {
    date: "9/19/25",
    content: "I will be joining Databricks for an internship in Winter 2026.",
  },
  {
    date: "8/22/25",
    content:
      "I concluded my internship at Google and re-entered team matching.",
  },
  {
    date: "5/5/25",
    content: "I began my internship at Google to work on YouTube.",
  },
  {
    date: "3/18/25",
    content: "I hit diamond rank in TFT 😎",
  },
];

const NewsCard = () => {
  return (
    <div className={classes.newsCard}>
      <div className={classes.header}>NEWS</div>
      <ul className={classes.content}>
        {NEWS_ENTRIES.map((entry) => (
          <li>
            <b>{`(${entry.date})`}</b>: {entry.content}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;
