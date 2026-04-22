import react, { useState } from "react"
import reactdom from "react-dom"
const Watch=()=>{
    const time= new Date().toLocaleTimeString()
    const[ctime,utime]=useState(time)
    const fun=()=>{
        const time= new Date().toLocaleTimeString()
        utime(time)
    }
    setInterval(fun,1000)
    return(<>
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black to-gray-800">
        <div className="bg-gray-900 text-green-400 px-10 py-6 rounded-2xl shadow-2xl border border-green-500">

            <h1 className="text-5xl md:text-6xl font-mono tracking-widest">
                {ctime}
            </h1>

<p className="text-center text-gray-400 mt-3 text-sm">
    Digital Clock
</p>

        </div>
    </div></>
    )
}
export default Watch