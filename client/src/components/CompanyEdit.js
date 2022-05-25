import React from 'react'

const CompanyEdit = () => {
return (

    <div className="bg-gray-500 h-screen">
        
        
        {/* HEADER */}
        <div className="flex justify-center space-x-2 align-middle pr-10">
            <h1 className="text-white pr-10 text-4xl">Financial Times</h1>
        </div>
        
        {/* SEARCH BAR */}
        <div className="flex align-middle justify-center pb-10 pt-6">
            <label htmlFor="email" className="text-lg text-white pr-5">SEARCH TICKER:</label>
                <input className="pl-5" type="text" />
        </div>

        <div className="grid grid-cols-3 max-w-6xl mx-auto">
            {/* LEFT SIDE */}
            <div className="col-span-2 p-4">
                <h1 className="text-white text-xl">AAPL</h1>
                <div className="grid grid-cols-4 max-w-6xl mx-auto p-4">
                        <a href="#"><p className="text-med text-white underline p-2"> EDIT # OF AAPL SHARES</p></a>
                        <input className="pl-12" type="text" value="10" />
                        <button className="align-middle border-4 border-black p-1 align-center bg-white">EDIT</button>

                </div>
            </div>


            {/* RIGHT SIDE */}
            <div className="col-span-1 p-10">
                <h1 className="text-white text-xl">AAPL NEWS FEED</h1>
                <div className="pt-4">
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                    <a href="#"><p className="text-xs text-white">NEWS ITEM TO BE MAPPED THROUGH API</p></a>
                </div>
            </div>
        </div>

    </div>
)
}

export default CompanyEdit
