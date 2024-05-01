import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

// This component is used to render an icon based on the activity type from Strava
export function ActivityIcon({ type }) {
  switch (type) {
    case 'Run':
      return <DirectionsRunIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />;
    case 'Ride':
      return <DirectionsBikeIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />;
    case 'Swim':
      return <PoolIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />;
    case 'WeightTraining':
      return <FitnessCenterIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />;
    case 'Soccer':
      return <SportsSoccerIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />;
    default:
      return <></>;
  }
}
