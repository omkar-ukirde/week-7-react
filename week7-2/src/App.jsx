import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count} setCount={setCount}/>
    </>
  )
}

function Count({count, setCount}){
  return (
    <div>
      {count}
      <CountRenderer count={count} />
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function CountRenderer({count}){
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({count, setCount}){
  return(
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>
        Count +
      </button>
      <button onClick={()=> {
        setCount(count-1)
      }}>
        Count -
      </button>
    </div>
  )
}
export default App
