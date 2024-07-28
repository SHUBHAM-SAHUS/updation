import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import styles from './style.module.scss';
import { useRouter } from 'next/navigation';

const NavigationButtons: React.FC = () => {
  const [value, setValue] = React.useState('to-do');
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    switch (newValue) {
      case 'explore':
        router.push('/explore');
        break;
      case 'to-do':
        router.push('/to-do');
        break;
      case 'progress':
        router.push('/progress');
        break;
      default:
        break;
    }
  };

  return (
    <Box className={styles.navigationContainer}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={styles.navigation}
      >
        <BottomNavigationAction
          label="Explore"
          value="explore"
          icon={<SearchIcon />}
          className={`${styles.navButton} ${value === 'explore' ? styles.activeNavButton : ''}`}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        />
        <BottomNavigationAction
          label="To-Do"
          value="to-do"
          icon={<HomeIcon />}
          className={`${styles.navButton} ${value === 'to-do' ? styles.activeNavButton : ''}`}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        />
        <BottomNavigationAction
          label="Progress"
          value="progress"
          icon={<TimelineIcon />}
          className={`${styles.navButton} ${value === 'progress' ? styles.activeNavButton : ''}`}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default NavigationButtons;
