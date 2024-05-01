import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// Wrapping the MUI Button component with a Link component to create a navigation item
export function NavItem({ children, to }) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}
