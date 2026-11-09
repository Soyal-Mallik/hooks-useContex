import React, { useState } from 'react'

import Component3 from './Component3'
import { userContext } from './UseContex'
import Component2 from './Component2'

export default function Component1() {
    const [user, setUser] = useState({id: 1, name: "Soyal Mallik"})
    const [text, setText] = useState("I am from component1")
  return (
    <div>
      <userContext.Provider value={{user, text}}>
        <Component3 />
        <Component2 />
      </userContext.Provider>
    </div>
  )
}
