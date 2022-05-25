import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = (props) => {

    const [error, setErrors] = useState({});
    const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
        (async () => {
            // const tickerData = await axios.get('http://localhost:8000/api/tickers/' + props.user._id)
            //     .then( res => {
            //         console.log(res);
            //         console.log(res.data.tickers);
            //     })
            //     .catch( err => {
            //         console.log(err.response.data);
            //         setErrors(err.response.data.errors);
            //     })

            //For testing purposes:
            const tickerData = {
                data:{
                    tickers: [
                        {
                            ticker: 'AMZN'
                        },
                        // {
                        //     ticker: 'TSLA'
                        // },
                        // {
                        //     ticker: 'GOOGL'
                        // },
                        // {
                        //     ticker: 'AAPL'
                        // }
                    ]
                }
            };
            var updatedNewsFeed = [];
            for(var i=0; i<tickerData.data.tickers.length; i++){
                var newsRequest = {
                    method: 'GET',
                    url: 'https://yh-finance.p.rapidapi.com/auto-complete?limit=3',
                    params: {q: tickerData.data.tickers[i].ticker, region: 'US'},
                    headers: {
                        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
                        'X-RapidAPI-Key': 'dc60b6f2cemsh4a110ca38006ccep1a1480jsn23d6c06c662f'
                    }
                };
                const newsData = await axios.request(newsRequest)
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
            };
            setNewsFeed(updatedNewsFeed);
        }
    )()
    })

    return (

        <div className="bg-gray-500 h-screen">
            
            
            {/* HEADER */}
            <div className="flex justify-center space-x-2 align-middle pr-10">
                <h1 className="text-white pr-10 text-4xl">Financial Times</h1>
            </div>
            
            {/* SEARC BAR */}
            <div className="flex align-middle justify-center pb-10 pt-6">
                <label htmlFor="email" className="text-lg text-white pr-5">SEARCH TICKER:</label>
                    <input className="pl-5" type="text" />
            </div>

            <div className="grid grid-cols-3 max-w-6xl mx-auto">
                {/* LEFT SIDE */}
                <div className="col-span-2 p-10">
                    <h1 className="text-white text-xl">PORTFOLIO</h1>
                    <div className="grid grid-cols-4 max-w-6xl mx-auto p-4">
                            <a href="#"><p className="text-med text-white underline p-2">AAPL</p></a>
                            <input className="pl-12" type="text" value="10" />
                            <button className="align-middle border-4 border-black p-1 align-center bg-white">EDIT</button>
                            <button className="align-middle border-4 border-black p-1 align-center bg-white">DELETE</button>
                    </div>
                    <div className="grid grid-cols-4 max-w-6xl mx-auto p-4">
                            <a href="#"><p className="text-med text-white underline pr-2">GOOGL</p></a>
                            <input className="pl-12" type="text" value="2" />
                            <button className="align-middle border-4 border-black p-1 align-center bg-white">EDIT</button>
                            <button className="align-middle border-4 border-black p-1 align-center bg-white">DELETE</button>
                    </div>
                    <div className="grid grid-cols-4 max-w-6xl mx-auto p-4">
                            <a href="#"><p className="text-med text-white underline pr-2">TSLA</p></a>
                            <input className="pl-12" type="text" value="3" />
                            <button className="align-middle border-4 border-black p-1 align-center bg-white">EDIT</button>
                            <button className="align-middle border-4 border-black p-1 align-center bg-white">DELETE</button>
                    </div>
                    <div className="grid grid-cols-4 max-w-6xl mx-auto p-4">
                            <a href="#"><p className="text-med text-white underline pr-2">AMZN</p></a>
                            <input className="pl-12" type="text" value="1" />
                            <button className="align-middle border-4 border-black p-1 align-center bg-white">EDIT</button>
                            <button className="align-middle border-4 border-black p-1 align-center bg-white">DELETE</button>
                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className="col-span-1 p-10">
                    <h1 className="text-white text-xl">NEWS FEED</h1>
                    <div className="pt-4">
                        {newsFeed}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
