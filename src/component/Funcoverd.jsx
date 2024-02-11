import styled from 'styled-components';
import { data } from '../util/cartdata';
 const Container=styled.div`
    width: 100%;
    background-image:linear-gradient(40deg, rgba(0, 0, 0, 0.8)100%, transparent 50%), url("https://cdn.pixabay.com/photo/2016/10/21/09/25/rocks-1757593_1280.jpg");
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center;
    margin-top:20px 0px;
 `;
 const Title=styled.h3`
    font-size: 1.5rem;
 `;
 const Row=styled.div`
     width: 80%;
     
 `;
 const Card=styled.div`
    
 `;
 const Subheading=styled.p`
 font-size: 14px;
 font-weight:400;
 text-transform:capitalize;
 `;
 
 const Funcoverd = () => {
  return (
    <div>
        <Container >
        <Title className='text-center font-bold pt-9 text-white capitalize'>Some fun we covered</Title>
           <Row className='flex gap-6 mx-auto flex-wrap flex-row py-16'>
            {
                data.map((item)=>(
               <>
               <Card key={item.id} className=' flex justify-center items-center flex-col md:w-36 sm:w-1/2 lg:w-36 bg-black opacity-65 font-bold  text-white p-4 h-40'>
                <div>{item.icon}</div>
                <Title>{item.name}</Title>
                <Subheading>{item.title}</Subheading>
                </Card>
               </>
                ))
            }
                
           </Row>
        </Container>
    </div>
  )
}


export default Funcoverd