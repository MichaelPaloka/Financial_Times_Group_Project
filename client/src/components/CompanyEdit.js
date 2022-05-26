import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



const CompanyEdit = () => {
    const {id} = useParams();
    const [ticker, setTicker] = useState();
    const [numOfShares, setNumOfShares] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/tickers/" + id)
        .then((res)=>{
            console.log(res.data);
            setTicker(res.data.ticker.ticker);
            setNumOfShares(res.data.ticker.numOfShares)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const updateTicker = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/tickers/" + id, {
            ticker,
            numOfShares
        })
            .then((res => {
                console.log(res.data.ticker)
                navigate("/home")
            }))
            .catch((err) => {
                console.log(err.response.data)
                setErrors(err.response.data.errors)
            })
    }

    const deleteTicker = () => {
        axios.delete("http://localhost:8000/api/tickers/" + id)
            .then((res) => {
                console.log(id)
                navigate("/home")
            })
            .catch((err) => console.log(err))
    }

return (

    <div className="bg-gray-500 h-screen">

        {/* HEADER */}
        <div className="flex justify-center space-x-2 align-middle pr-10">
            <h1 className="text-white pr-10 text-4xl">Financial Times</h1>
        </div>
        
        <div className="grid grid-cols-3 max-w-6xl mx-auto">
            {/* LEFT SIDE */}
            <div className="col-span-2 p-4">
                <h2 className="text-white text-xl">{ticker}</h2>
                <form onSubmit={updateTicker}>
                    <div>
                        <label>
                            Edit # of shares
                            <input className="pl-12" type="text" value={numOfShares} onChange = {(e) => setNumOfShares(e.target.value)}/>
                        </label>
                        <p>{
                            errors.numOfShares ? 
                            errors.numOfShares.message : null
                        }</p>
                    </div>
                    
                    <button className="align-middle border-4 border-black p-1 align-center bg-white">EDIT</button>
                </form>
                <button className="align-middle border-4 border-black p-1 align-center bg-white" onClick={deleteTicker}>Delete Ticker</button>
            </div>
        </div>

    </div>
)
}

export default CompanyEdit
