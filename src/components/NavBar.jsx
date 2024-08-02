import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { logo } from '../utils/constants';

function NavBar() {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
        <Typography
          className='copyright'
          variant='h4'
          sx={{ mt: 1.5, color: '#fff', marginLeft: '10px' }}
        >
          You Stream Daily
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default NavBar;
