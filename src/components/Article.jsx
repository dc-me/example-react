export default function Article({ date, title, img, ctx }) {
  return (
    <article className="article">
      <span>{date}</span>
      <h3>{title}</h3>
      <img src={img} alt="On the Street in Brooklyn" />
      <p className="ctx">{ctx}</p>
      <div className="actions">
        <a>Continues ...</a>
      </div>
    </article>
  );
}
