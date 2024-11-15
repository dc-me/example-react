import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import classes from './index.module.css';

const articles = [
  {
    id: 1,
    date: '11/12/20',
    title: 'On the Street in Brooklyn',
    img: '/images/blog-image-1.jpg',
    ctx: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, libero
      quia obcaecati cum provident similique autem reiciendis laudantium est
      sit corporis ratione mollitia. Officia, sed nulla ipsam facere voluptate
      ratione? Expedita, veritatis laudantium. Illo neque unde sed omnis fuga
      laborum velit, deleniti minima optio veniam asperiores distinctio
      cupiditate nobis repudiandae blanditiis maxime repellendus? Sapiente
      inventore corrupti, reprehenderit placeat aut numquam? Natus voluptate
      modi fugit provident eligendi, eius minima aliquam pariatur quibusdam
      atque quos aspernatur beatae, nulla eum facere tempora inventore in
      quisquam voluptas odit! Minus voluptatem incidunt rem suscipit
      accusamus! Repellat aut ducimus blanditiis numquam laudantium rerum
      provident accusan`,
  },
  {
    id: 2,
    date: '11/11/20',
    title: 'Vintage in Vogue',
    img: '/images/blog-image-2.jpg',
    ctx: `Corem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        ut possimus molestiae corrupti porro? Ipsum placeat magnam
        voluptatibus natus commodi voluptatum quos eaque. Eum harum commodi
        vero aut? Blanditiis, ullam? Ullam libero ratione nihil iusto facere
        similique, delectus eius cupiditate iste adipisci illum recusandae
        excepturi fugiat, ipsa tenetur ipsam expedita sit. Totam illum
        repudiandae soluta impedit voluptatem quis quisquam sequi. Qui modi
        et, tempore, temporibus quos rem illo ea inventore sint quo, ut illum.
        Nisi, fugiat exercitationem expedita, vero sit aperiam omnis, repellat
        totam cupiditate impedit magnam corrupti nesciunt quasi! Repellendus
        nihil voluptatum eius, totam temporibus accusantium mollitia esse ex
        neque facilis itaque a consecte`,
  },
];

export default function FashionBlog() {
  useEffect(() => {
    document.documentElement.classList.add(classes.page);
    return () => {
      document.documentElement.classList.remove(classes.page);
    };
  }, []);
  return (
    <>
      <Header />
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
      <Footer />
    </>
  );
}
