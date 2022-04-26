import React from 'react'

const OffSecHeader = (props) => {
    return (
        <div className="bg-red-300 text-3xl p-5">
            <h2 className="text-white">{props.title_1}</h2>
            <h2 className="text-orange-500 ml-10">{props.title_2}</h2>
        </div>
    )
}

export default OffSecHeader