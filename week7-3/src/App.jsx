import {countAtom} from './store/atoms/count'
import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'


function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

function Count(){
  return (  <div>
              <CountRenderer />
              <Buttons />
            </div>
  )}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return (    <div> {count} </div>  )}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom)
  return(  <div>
              <button onClick={()=>{ setCount(count+1) }}> Count + </button>
              <button onClick={()=> { setCount(count-1)}}> Count - </button>
          </div>
  )}
export default App
