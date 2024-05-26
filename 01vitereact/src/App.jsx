import Chai from "./chai"

function App() {
 
  const username = "harsh patel"

  return (
    <>   
     {/* you can write empty tag also if you don't want to write div    */}
  <Chai/>
  <h1> harsh  {username} </h1> {/*you can add variable in {} brackets      this is also called evaluated expression */}
  <p> patel </p>   {/* you can export one element only so create div if you want to return more than one element */}
  </>
  )
  
}

export default App
