import React from 'react'

const Company = () => {
    return (

        <div className="bg-gray-500 h-screen">
            
            
            {/* HEADER */}
            <div className="flex justify-center space-x-2 align-middle pr-10">
                <h1 className="text-white pr-10 text-4xl">Financial Times</h1>
            </div>

            <div className="grid grid-cols-3 max-w-6xl mx-auto">
                {/* LEFT SIDE */}
                <div className="col-span-2 p-10">
                    <div className="text-white text-xl">AAPL</div>
                    <div>
                        <button className="align-middle border-4 border-black p-1 align-center bg-white">EDIT</button>
                    </div>
                    <div className=" mx-auto p-4">
                        <div className="text-white text-lg">Market Cap: <span>2.23T</span></div>
                        <div className="text-white text-lg">P/E Ratio: <span>22.42 tr</span></div>
                        <div className="text-white text-lg">Dividend: <span>$0.92</span></div>
                        <div className="text-white text-lg">Volume: <span>137.43M</span></div>
                        <div className="text-white text-lg">Revenue: <span>$386.02B</span></div>
                        <div className="text-white text-lg">EPS: <span>$6.14</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Company
