import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import {lazy, Suspense} from 'react'
const Landing  = lazy(()=> import ('./components/Landing'))
const Dashboard = lazy( ()=> import ('./components/Dashboard'))

function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>}/>
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
