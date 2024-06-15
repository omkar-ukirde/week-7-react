import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

const Landing  = React.lazy(()=> import ('./components/Landing'))
const Dashboard = React.lazy( ()=> import ('./components/Dashboard'))

function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return (<div>
      <div>
        <button onClick={()=>{navigate("/")}}>Landing Page</button>
        <button onClick={()=>{navigate("/dashboard")}}>Dashboard Page</button>        
      </div>
  </div>
  )
}

export default App
