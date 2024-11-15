import Nav from './Nav';
import classes from './Footer.module.css';

export default function Footer() {
  const navs = [
    {
      id: 1,
      text: 'Home',
    },
    {
      id: 2,
      text: "Women's",
    },
    {
      id: 3,
      text: "Men's",
    },
    {
      id: 4,
      text: 'On the Street',
    },
    {
      id: 5,
      text: 'The Catwalk',
    },
    {
      id: 6,
      text: 'AdWatch',
    },
    {
      id: 7,
      text: 'About',
    },
    {
      id: 8,
      text: 'Tips',
    },
  ];

  return (
    <footer className={classes.footer}>
      <Nav navs={navs} />
      <p className={classes.copy}>&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
}
