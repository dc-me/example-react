import Nav from './Nav.jsx';

export default function Header() {
  const navs = [
    {
      id: 1,
      text: "Women's",
    },
    {
      id: 2,
      text: "Men's",
    },
    {
      id: 3,
      text: 'On the Street',
    },
    {
      id: 4,
      text: 'The Catwalk',
    },
    {
      id: 5,
      text: 'AdWatch',
    },
    {
      id: 6,
      text: 'About',
    },
  ];
  return (
    <header className="header">
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav navs={navs} />
    </header>
  );
}
