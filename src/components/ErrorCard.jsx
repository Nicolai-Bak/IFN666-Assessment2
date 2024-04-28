import { CardBase } from './CardBase';

export function ErrorCard({ errorMessage }) {
  return <CardBase sx={{ backgroundColor: 'error.main' }} title={errorMessage}></CardBase>;
}
