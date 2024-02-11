
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Formtab from './Formtab';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
   <div className='md:w-3/4 lg:w-3/4 sm:w-full bg-violet-700 bg-opacity-900 mx-auto shadow-lg sm:z-20  -mt-32 '>
<Formtab/>
   </div>
  );
}