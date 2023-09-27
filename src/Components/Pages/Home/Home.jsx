
import { useState } from "react"

export const Home = () => {
   const [ counter, setCounter] = useState(0)

   const [darkMode, setDarkmode] = useState (false);
   console.log(darkMode);
   const switchMode = ()=> {
    setDarkmode (!darkMode)
   };

   const sumar =()=>{
    setCounter( counter + 1)
   }

  return (
  <div>
  <h4>{counter}</h4>
  <button onClick={sumar}>Sumar</button>
  <button onClick={switchMode}>Cambiar modo</button>
  </div>
  );
};


