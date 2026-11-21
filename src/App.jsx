import React ,{useState} from "react";
import "./App.css";
// function App(){
//   function clicable(name){
//     alert(`clicked!! ${name}`)
//   }
//   return(
//     <div>
//       <button onClick={()=>clicable("deepu")}>click</button>
//     </div>

//   )
// }
// function App(){
//   const[text,setText]=useState("");
// }
// return(
//   <div>
//     <input type="text"
    
//     id="input" placeholder="Enter your name..." 
//     onChange={(e)=>setText(e.target.value)}/>
//     <h2>{text}</h2>
//   </div>
// )
// function App(){
//   const[name,setName]=useState("")
//   function handlesubmit(){
//     console.log(`submitted: ${name}`)
//   }
//   return(
//     <div>
//       <form onSubmit={handlesubmit}>
//        <input type="text"placeholder="Enter your Name" 
//        onChange={(e)=>setName(e.target.value)}/>
//        <button type="submit">submit</button>
//       </form>
//     </div>

//   )
// }
// task1--onclick
// function App(){
//   const[count,setCount]=useState(0);
//   function addclick(){
//     setCount(count+1)
//   }
//   function minusclick(){
//     setCount(count-1)
//   }
//   return(
//     <div>
//       <p>{count}</p>
//       <button onClick={addclick}>+Clickhere</button>
//       <button onClick={minusclick}>-Clickhere</button>
//     </div>
//   )
// }
// task2--onChange
// function App(){
//   const[name,setName]=useState("")
//   function change(e){
//     setName(e.target.value)
//   }
//   return(
//     <div>
//       <p>Hello,myName is{name}</p>
//       <input type="text" placeholder="Enter your name here:..."
//       onChange={change}/>


//     </div>
//   )
// }
// task 3--onclick with hide nad show ternary covered
// function App(){
//   const[showhide,setShowhide]=useState(false)
//   function toggle(){
//     setShowhide(!showhide)
//   }
//   return(
//     <div>
//       <button onClick={toggle}>
//         {showhide?"Hide":"Show"}
//       </button>
//       {showhide?<p>Hello Deepu!</p>:""}
//     </div>
//   )
// }
//task4--onSubmit
function App(){
  const[name,setName]=useState("")
  function change(e){
    setName(e.target.value)
  }
  function submit(e){
    e.PreventDefault()
    if(name === ""){
      alert("enter your Name!!")
    }
  }
  return(
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder="enter name"
         onChange={change}/>
        <button>submit</button>
        {name !==""?<p>Hello{name}</p>:""}
      </form>
    </div>
  )
}
export default App;
