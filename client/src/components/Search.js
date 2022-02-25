import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

function Search(){

    const [query,setQuery] = useState("");

    function handleChange(event){
       setQuery(event.target.value);
    }

    return(
        <div className='searchbox'>
            <input  name="query" type="text" placeholder='Search Title here' onChange={handleChange} value={query} autoComplete="off"/>
            <Link to="/search" className='searchicon' state={{from:query}} ><SearchIcon /></Link>
        </div>
    )
}

export default Search;