import NavItem from './NavItem';

export default function Nav({ navs }) {
  return (
    <ul className="nav-list">
      {navs.map((nav) => (
        <NavItem key={nav.id} {...nav} />
      ))}
    </ul>
  );
}
