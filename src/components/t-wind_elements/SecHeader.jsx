import React from 'react'

const SecHeader = (props) => {
  return (
    <div className="bg-gray-500 text-3xl p-5">
      <h2 className="text-white">{props.title}</h2>
    </div>
  )
}

export default SecHeader