import React, { useContext } from 'react'

import { userContext } from './UseContex'

export default function Component2() {
    const {user, text} = useContext(userContext)
  return (
    <div>
      <h1>I am component2</h1>
      <p>{text}</p>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  )
}
