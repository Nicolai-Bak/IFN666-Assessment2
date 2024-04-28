import { Typography } from '@mui/material';

export function Home() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ minWidth: '600px', width: '50%' }}>
          <img
            style={{ minWidth: '100%', width: '50%', borderRadius: '4px', borderColor: 'transparent' }}
            src='/public/20240416_100457180_iOS.jpg'
            alt='Surf hero image'
          />
          <Typography variant='h5' sx={{ mt: '2rem' }}>
            Welcome to my page! Have a look around to learn more about me, my professional experience, and my latest workouts.
          </Typography>
        </div>
      </div>
    </>
  );
}
