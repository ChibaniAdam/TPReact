import { useState } from "react";
import Words from "../Ecmascript/words";
function Page() {
   const [ar, setAr] = useState([1,2,3,4,5]);
   const add = () => {setAr([...ar,ar[ar.length-1]+1])}
   const remove = () => {setAr(ar.slice(0,ar.length-1))}

  return (
    <>
    <h2> This is a page </h2>
        {ar.map((item) => {return <h3 key={item}>{item}</h3>})}
        <button onClick={add} >Add element</button>
        <button onClick={remove}>Remove element</button>
    <Words></Words>
    </>
  );
}

export default Page;