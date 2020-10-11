import React, { useState }  from 'react';
import axios from 'axios'
import SearchContent from './SearchContent';


const Search =()=> {
  const [img,setImg]= useState("");
  const [api,setApi]= useState([]);

  const inputEvent=(event)=>{
      const data=event.target.value;
      setImg(data);

      axios
        .get(`http://localhost:8081/books/list/${data}`)
        .then(res => {
            setApi(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
        //console.log("api",api)       
  };

  
        return (
            
           <>

                <input type="text" placeholder="search..." value={img} onChange={inputEvent}/>
                {api?<SearchContent content={api}/>:null
                }
                </>
        );
}

export default Search;