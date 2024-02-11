import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components'
import {  populardata } from '../util/cartdata';
const Container=styled.div`
    width: 100%;
    background-image:linear-gradient(40deg, rgba(3, 4, 68,.9 )100%, transparent 50%);
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center;
    margin-top:20px ;
 `;
const Popular = () => {
  return (
    <div>
     <Container className='py-10'>
     <Typography gutterBottom variant="h5" className='text-white text-center capitalize font-bold' component="div">
           popular destination
          </Typography>
       <div className='flex flex-wrap lg:5/6 sm:w-full mx-auto   md:w-5/6'>
      {
        populardata.map((item)=>(
            <>
         <div className='mx-auto'>
         <Card sx={{ maxWidth: 220 ,minWidth:180}} key={item.id} className='m-3'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className=' capitalize font-bold' component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {
            item.des
           }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         </div>
            </>
        ))
      }
       </div>
     </Container>
    </div>
  )
}

export default Popular