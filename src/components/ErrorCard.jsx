import { CardBase } from './CardBase';

// Reusable component for displaying error messages
export function ErrorCard({ errorMessage }) {
  return <CardBase sx={{ backgroundColor: 'error.main' }} title={errorMessage}></CardBase>;
}
