const Flightticket = () => {
  return (
    <div className="w-full text-white flex-wrap  flex">
      <div className="md:w-1/4 lg:w-1/4 sm:w-15 my-3 ">
          <input type="text"  className="p-2 rounded-full " placeholder="enter your name"/>
      </div>
      <div className="md:w-1/4 lg:w-1/4 sm:w-15 my-3 ">
          <input type="text"  className="p-2 rounded-full " placeholder="enter your location"/>
      </div>
      <div className="md:w-1/4 lg:w-1/4 sm:w-15 my-3 ">
          <input type="date"  className="p-2 rounded-full " placeholder=" enter  your date"/>
      </div>
      <div className="md:w-1/4 lg:w-1/4 sm:w-15 my-3 ">
          <input type="text"  className="p-2 rounded-full " placeholder="enter your name"/>
      </div>
    </div>
  )
}

export default Flightticket