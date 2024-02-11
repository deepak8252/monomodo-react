import { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
const Container=styled.div`
    width: 100%;
    background-image:linear-gradient(40deg, rgba(221, 106, 215, 0.4)100%, transparent 50%), url("https://plus.unsplash.com/premium_photo-1679830513990-82a4280f41b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVyb3BsYW5lfGVufDB8fDB8fHww");
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center left;
    padding: 20px;
 `;
const Newsletter = () => {
    const [search,setSearch]=useState("");
    const handleSearch=()=>{
        setSearch("");
        Swal.fire({
            title: "SUBSCRIBED!",
            text: "You have subscribed successful!",
            icon: "success"
          });
    }
  return (
    <div>
       <Container className='mx-auto'>
        <div className='lg:w-1/2 md:w-1/2 sm:w-full mx-auto' >
         <h3 className='text-center py-10 text-white text-3xl uppercase font-bold'>subscribe to our news letter</h3>
         <p className='text-center text-white capitalize '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic labore non doloribus, velit fugit corporis accusamus aliquam, iste ut temporibus recusandae corrupti illum excepturi tenetur odit sapiente qui? Fugiat, necessitatibus!</p>
         <div className='w-3/4 my-5 mx-auto flex flex-row'>
            <input type="search" name="" id="" placeholder='subscribe our news letter' className='w-full p-4 rounded-lg ' value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button className='p-4 border rounded-lg bg-white mx-3 text-2xl hover:bg-blue-800 capitalize hover:text-white' onClick={handleSearch}>subscribe</button>
         </div>

        </div>
       </Container>
    </div>
  )
}

export default Newsletter