import React, {useState, useEffect} from 'react'

const App =  () => { 
  const [name, setName] = useState(0)
  useEffect(() => console.log('clicked'),[])

  return (
    <div>
    <p>clikced {name}</p>
    
    <button onClick={() => setName(name + 1)}>click me </button>
    </div>
  )
}

export default App;