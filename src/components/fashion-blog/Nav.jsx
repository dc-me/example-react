import NavItem from './NavItem';
import classes from './Nav.module.css';

export default function Nav({ navs }) {
  return (
    <ul className={classes.navList}>
      {navs.map((nav) => (
        <NavItem key={nav.id} {...nav} />
      ))}
    </ul>
  );
}
