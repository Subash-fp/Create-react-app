import React from 'react'

interface Props {
    
}

const General = (props: Props) => {
    return (
        <form className="w-full block border-solid border-2 shadow-md rounded">
            <div className="block border-solid border-b-2 px-3 py-5 font-bold">General</div>
            <div className="block border-solid border-b-2 px-3 py-5 font-semibold">Details</div>
            <div className="block border-solid border-b-2 px-3 py-5 font-semibold">Language</div>
            <div className="block border-solid border-b-2 px-3 py-5 font-semibold">Timezone</div>

              
        </form>
    )
}

export default General
