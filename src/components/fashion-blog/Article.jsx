import classes from './Article.module.css';

export default function Article({ date, title, img, ctx }) {
  return (
    <article className={classes.article}>
      <span>{date}</span>
      <h3>{title}</h3>
      <img src={img} alt="On the Street in Brooklyn" />
      <p className={classes.ctx}>{ctx}</p>
      <div className={classes.actions}>
        <a>Continues ...</a>
      </div>
    </article>
  );
}
