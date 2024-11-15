import NavItem from './NavItem';
import classes from './Nav.module.css';

export default function Nav({ navs }) {
  return (
    <ul className={classes['nav-list']}>
      {navs.map((nav) => (
        <NavItem key={nav.id} {...nav} />
      ))}
    </ul>
  );
}
