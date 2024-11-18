/**
 * News page
 */
import { useEffect, useState } from 'react';
import { getHeadlines } from '../../lib/news';
import News from './News';
import classes from './index.module.css';

export default function NewsPage() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    getHeadlines().then((data) => {
      setNewsList(data.articles);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getHeadlines({
      q: e.target.elements['q'].value,
    });
    setNewsList(data.articles);
  };

  const showNewsList = () => {
    return (
      <ul className={classes.newsList}>
        {newsList.map((n, i) => (
          <News key={i} {...n} />
        ))}
      </ul>
    );
  };

  return (
    <div className={classes.newsPage}>
      <h1 className={classes.pageTitle}>News Page</h1>
      <form onSubmit={handleSubmit}>
        <input name="q" type="text" />
        <button type="submit">Search</button>
      </form>
      {newsList.length > 0 ? showNewsList() : <div>No News Found!</div>}
    </div>
  );
}
