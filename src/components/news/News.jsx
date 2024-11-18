import classes from './News.module.css';

export default function News({ title, urlToImage, description, url }) {
  return (
    <li className={classes.newsItem}>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <img src={urlToImage} />
      <p>{description}</p>
    </li>
  );
}
