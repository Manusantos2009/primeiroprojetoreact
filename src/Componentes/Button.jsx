import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div>
      <Button onClick ={props.tarefa} className={props.className}> {props.children} </Button>
    </div>
  )
}

export default Button
