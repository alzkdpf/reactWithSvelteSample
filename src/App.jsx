import { useState, useRef, useLayoutEffect } from 'react'
import Hello from "./Hello.svelte"

function SvelteWrapper(Component){
  return (props) => {
    const svelteRef = useRef();

      useLayoutEffect(()=>{
        while(svelteRef.current?.firstChild){
          svelteRef.current?.firstChild?.remove();
        }
        new Component({
          target: svelteRef.current,
          props
        })
      },[]);
    
     return <div ref={svelteRef}></div>
  }
}

const SvelteHello = SvelteWrapper(Hello) 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SvelteHello/>
    <button onClick={()=>setCount((count)=> count + 1)}>
      count is {count}
    </button>
    </>
  )
}

export default App
