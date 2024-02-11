import styled from "styled-components";

const Container=styled.div`
    width: 100%;
    background-image:linear-gradient(40deg, rgba(112, 58, 179, 0.8)100%, transparent 50%);
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center;
    margin-top:0 !important;
    padding: 20px 0px;
 `;
const Estimate = () => {
  return (
    <>
   <Container>
    
    <div className=" lg:w-5/6 md:w-5/6 sm:w-full mx-auto ">
    <h3 className="text-white text-2xl   mt-5 uppercase pt-5 font-bold">get a quick estimate</h3>
    <h3 className="text-white text-xl  uppercase ">get a proffesional</h3>
    <form action="">
    <div className="flex flex-row gap-2 flex-wrap justify-center items-center">
       
            <div className=" my-2 md:w-1/5 lg:w-1/5 sm:full ">
                <input type="text" name="" id="" placeholder="travel perpose" className="p-2  rounded-lg outline-none border-none" />
            </div>
            <div className=" my-2 md:w-1/5 lg:w-1/5 sm:full ">
                <input type="datetime-local" name="" id=""className="p-2  rounded-lg outline-none border-none" />
            </div>
            <div className=" my-2 md:w-1/5 lg:w-1/5 sm:full ">
                <input type="text" name="" id="" placeholder="travel perpose" className="p-2  rounded-lg outline-none border-none" />
            </div>
            <div className=" my-2 md:w-1/5 lg:w-1/5 sm:full ">
                <input type="text" name="" id="" placeholder="travel perpose" className="p-2  rounded-lg outline-none border-none" />
            </div>
            <div className=" my-2 md:w-40 lg:w-40 sm:full ">
               <button className="p-2 w-full bg-orange-500 capitalize  rounded-lg outline-none border">calculate</button>
            </div>
    </div>
    </form>
    </div>
   </Container>
    </>
  )
}

export default Estimate