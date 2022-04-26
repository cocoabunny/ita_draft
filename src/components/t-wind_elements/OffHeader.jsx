import React from 'react'

const OffSecHeader = (props) => {
    return (
        <div className="bg-green-300 text-5xl p-6 md:bg-green-500 text-7xl p-8">
            <h1 className="text-white">{props.title_1}</h1>
            <h1 className="text-orange-500 ml-10">{props.title_2}</h1>
        </div>
    )
}

export default OffSecHeader