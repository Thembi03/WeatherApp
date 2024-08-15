import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import Weather from '../components/Weather';

const Home =()=>{
    const [location, setlocation] = useState('London')

    return(
        <div>
            <SearchBar onSearch={setlocation}/>
            <Weather location = {location}/>
        </div>
    );
};

export default Home;