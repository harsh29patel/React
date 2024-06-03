import UserContextProvider from './Context/UserContextProvider.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
function App(){
  return (
    <UserContextProvider>
     <h1> Harsh Patel</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
