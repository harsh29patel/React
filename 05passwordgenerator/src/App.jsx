import { useState , useCallback, useEffect , useRef} from 'react'



function App() {
  const [length,setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [characterallowed , sertcharacterallowed] = useState(false)
  const [Password , setpassword] = useState("")
  // useref hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback( ()=>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSRTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+= "0123456789"
    if(characterallowed) str += "!@#$%^&*[]{}~-_+="

    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)  // + is for conceting if you don't concet than it return only one character basically it overwrites it
    }

    setpassword(pass)
  } , [length,numberallowed,characterallowed,setpassword])
    const CopyPasswordToClipBoard = useCallback(()=>{
      passwordRef.current?.select()  // use for effect ligth blue ? because of optional value because the value can be null
      passwordRef.current?.setSelectionRange(0,9) // for range
      window.navigator.clipboard.writeText(Password)
      if(CopyPasswordToClipBoard){
        alert("value copied to clipboard")
      }
    } , [Password])
   
  useEffect(()=>{
    passwordGenerator()
  },[length,numberallowed,characterallowed,passwordGenerator])  // what needed is callback and dependency array here array is on which variable do you want to use effect
  return (
    <>
     
<div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700"> 
<h1 className='text-white text-center'>Password Generator</h1>
<div className=  "flex shadow rounded-lg overflow-hidden mb-4">
  <input 
  type="text"
  value={Password} 
  className="outline-none w-full py-1 px-3"
  placeholder="Password"
  readOnly
  ref={passwordRef}
  />
  <button 
  onClick={CopyPasswordToClipBoard}
  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
    <input 
    type="range"
    min={6}
    max={100}
    value={length}
    className='cursor pointer'
    onChange={(e)=>{setlength(e.target.value)}} />
    <label>Length:{length}</label>
</div>
<div className='flex items-center gap-x-1'>
  <input
   type="checkbox"
   defaultChecked={numberallowed}
   id="numberinput"
   onChange={()=>{
    setnumberallowed((prev)=>(!prev));
   }}
  />
  <label htmlFor='numberInput'>Numbers</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input
    type="checkbox"
    defaultChecked={characterallowed}
    id="characterinput"
    onChange={()=>{
      sertcharacterallowed((prev)=>(!prev))
    }}
    />
    <label htmlFor="characterInput">Character</label>
  </div>
  </div>
  </div>
  </>
)

}

export default App
