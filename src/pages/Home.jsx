import { Typography } from '@mui/material';

import { home } from '../../STATIC_DATA.json';

export function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='home-inner-container'>
          <img src={home.imageUrl} alt='Surf hero image' />
          <Typography variant='h5' sx={{ mt: '2rem' }}>
            {home.text}
          </Typography>
        </div>
      </div>
    </>
  );
}
