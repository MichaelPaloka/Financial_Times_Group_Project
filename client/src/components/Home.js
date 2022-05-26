import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Home = (props) => {
    const [errors, setErrors] = useState({});
    const [newsFeed, setNewsFeed] = useState([]);
    const [tickers, setTickers] = useState([]);
    const [tickerText, setTickerText] = useState([]);
    const [newTicker, setNewTicker] = useState([]);
    const [shares, setShares] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (
            async () => {
                const data1 = await axios.get('http://localhost:8000/api/tickers/byuser/' + props.user._id)
                        console.log(props.user._id);
                        console.log(data1.data.tickers);
                        setTickers(data1.data.tickers);
                        let newTickers = data1.data.tickers;
                        console.log(newTickers);
                        let newTickerText= [];
                        console.log(newTickers.length);
                        for(var i=0; i<newTickers.length; i++){
                            let ticker = newTickers[i];
                            console.log(ticker);
                            newTickerText.push(
                                <div className="grid grid-cols-4 max-w-6xl mx-auto p-4">
                                    <Link to={"/company/" + ticker._id}>
                                        <p className="text-med text-white underline p-2">{ticker.ticker}</p>
                                    </Link>
                                    <p className="pl-12">{ticker.numOfShares}</p>
                                    <Link to={"/company/edit/" + ticker._id}>
                                        <button className="align-middle border-4 border-black p-1 align-center bg-white">EDIT</button>
                                    </Link>
                                </div>
                            );
                        }
                        setTickerText(newTickerText);
                        console.log(tickerText);

                var updatedNewsFeed = [];
                console.log(newTickers[0].ticker);
                for(var i=0; i<newTickers.length; i++){
                    var newsRequest = {
                        method: 'GET',
                        url: 'https://yh-finance.p.rapidapi.com/auto-complete',
                        params: {q: newTickers[i].ticker, region: 'US'},
                        headers: {
                            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
                            'X-RapidAPI-Key': 'dc60b6f2cemsh4a110ca38006ccep1a1480jsn23d6c06c662f'
                        }
                    };
                }
                const data2 = await axios.request(newsRequest)
                    .then(function (response) {
                        console.log(response.data);
                        for(var y=0; y<response.data.news.length; y++){
                            updatedNewsFeed.push(<a href={response.data.news[y].link}><p className="text-xs text-white">{response.data.news[y].title}</p></a>);
                            console.log(updatedNewsFeed);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
                setNewsFeed(updatedNewsFeed);
                setLoaded(true);
            }
        )()
    },[])

    const addTickerHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/tickers', {
            ticker: newTicker,
            numOfShares: shares,
            createdBy: props.user._id
        })
            .then(res=>{
                console.log(res);
                console.log(res.data.error);
                if(res.data.error){
                    setErrors(res.data.error.errors);
                    console.log(res.data.error.errors);
                }
            })
            .catch(err=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    };

    return (

        
        <div className="bg-gray-500 h-screen">
            {/* HEADER */}
            <div className="flex justify-center space-x-2 align-middle pr-10">
                <h1 className="text-white pr-10 text-4xl">Financial Times</h1>
            </div>
            
            <div className="grid grid-cols-3 max-w-6xl mx-auto">
                {/* LEFT SIDE */}
                <div className="col-span-2 p-10">
                    <h1 className="text-white text-xl">PORTFOLIO</h1>
                        {tickerText}
                    <form onSubmit={addTickerHandler}>
                        <label htmlFor="ticker" className="text-lg text-white pr-5">Ticker:</label>
                        <input name="ticker" className="pl-12" type="text" onChange = {(e)=>setNewTicker(e.target.value)}/>
                        <p>{
                            errors.newTicker ? 
                            errors.newTicker.message : null
                        }</p>
                        <label htmlFor="numOfShares" className="text-lg text-white pr-5">Shares:</label>
                        <p>{
                            errors.numOfShares ? 
                            errors.numOfShares.message : null
                        }</p>
                        <input name="numOfShares" type="text" onChange = {(e)=>setShares(e.target.value)}/>
                        <button className="align-middle border-4 border-black p-1 align-center bg-white">ADD</button>
                    </form>
                </div>


                {/* RIGHT SIDE */}
                <div className="col-span-1 p-10">
                    <h1 className="text-white text-xl">NEWS FEED</h1>
                    <div className="pt-4">
                        {newsFeed}
                    </div>
                </div>
            </div>
            
            <div>
                {
                    tickers.map((ticker, index) => {
                        return(
                            <div key={index}>
                                {ticker.ticker}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home
