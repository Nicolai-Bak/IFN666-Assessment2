import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function NavItem({ children, to }) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}
