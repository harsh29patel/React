import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 

function MyApp(){
   return ( <h1>harsh</h1>)
}



// const ReactElement =    
// {
//     type:'a',
//     props:{
//         href: 'https://google.com',      thid code will not run 
//         target:'_blank'            
//     },
//     children:'Click on me to visit google'
// } 

const anotherElement = (
    <a href='https://google.com' target='_blank'>click here to visit google</a>
)

const anotherUser = "chai aur code"

const reactElement = React.createElement(
    'a',{
        href:'hhtps://google.com' , target:'_blank'
    },
    'click me to vist google',
    anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
