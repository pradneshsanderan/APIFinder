import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Fetcher.css';
import Searches from './Searches';
const Fetcher = () => {
    
    

    const [searches, setSearches] = useState([]);
    const [searched, setSearched] = useState("");
    const [query, setQuery] = useState('');
    const [Http, setHttp] = useState('');
    
   
    useEffect(() => {
        getData();
    }, [query]);
    const url = `https://api.publicapis.org/entries?title=${query}&https=${Http}`
    const updateSearch = e => {
        setSearched(e.target.value)
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(searched);
        setSearched("");
        setHttp('')
    }
    const getHTTP = e => {
        e.preventDefault();
        setHttp('true');
    }
   

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setSearches(data.entries);
        console.log(data.entries);
    };
    return (
        <div className="Api" >
            <h1 className="header">API FINDER</h1>
            <form onSubmit={getSearch} className="SearchForm">
                <input className="SearchBar" type="text" value={searched} onChange={updateSearch}/>
                <button className="SearchButton" type="submit">
                    Search
                </button>
                <button className="HtButton" onClick={getHTTP}>With HTTPS</button>
                
            </form>
            

            <div className="searches">
            {searches.map(search => (
                <Searches title={search.API} 
                key={search.API}
                category={search.Category} 
                description={search.Description}
                link={search.Link}
                HTTPS={search.HTTPS}
                Auth={search.Auth}/>
            ))};
            </div>
        </div>
    );


};

export default Fetcher;
