import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'

import { openModal } from '../../app/common/modals/modalReducer'
import { increment, decrement } from './testReducer'

export default function Sandbox() {
  const [target, setTarget] = useState(null)
  const { data } = useSelector(state => state.test)
  const { loading } = useSelector(state => state.async)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        name='increment'
        content='Increment'
        color='green'
        loading={loading && target === 'increment'}
        onClick={e => {
          dispatch(increment(20))
          setTarget(e.target.name)
        }}
      />
      <Button
        name='decrement'
        content='Decrement'
        color='red'
        loading={loading && target === 'decrement'}
        onClick={e => {
          dispatch(decrement(10))
          setTarget(e.target.name)
        }}
      />
      <Button
        content='Open Modal'
        color='teal'
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />
    </>
  )
}
