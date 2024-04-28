import { Typography } from '@mui/material';

export function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='home-inner-container'>
          <img src='/public/20240416_100457180_iOS.jpg' alt='Surf hero image' />
          <Typography variant='h5' sx={{ mt: '2rem' }}>
            Welcome to my page! Have a look around to learn more about me, my professional experience, and my latest workouts.
          </Typography>
        </div>
      </div>
    </>
  );
}
