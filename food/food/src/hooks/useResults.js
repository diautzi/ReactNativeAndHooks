import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchApi = async (searchTerm) => {
      try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'Chicago, IL 60611'
          }
        });
        setResults(response.data.businesses);
        } catch ( err ) {
          setErrorMessage('Something went wrong');
        };
    };
  
    // useEffect hook to call searchApi when component is first rendered
    // BAD CODE!!! TO NOT DO ---- searchApi(pasta) ---- 
    useEffect(() => {
      searchApi('pasta')
    }, [])
    return [searchApi, results, errorMessage]
};