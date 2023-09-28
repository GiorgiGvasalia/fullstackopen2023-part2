import React from 'react'
import './Notification.css'

const Notification = ({ message, messageType }) => {
if(!message){
    return null
}

const className = messageType === 'success' ? 'success' : 'delete'

  return (
    <div className={` notification ${className}`}>{message}</div>
  )
}

export default Notification