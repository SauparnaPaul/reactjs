import React from 'react';
import { Link } from 'react-router-dom'

const SearchContent =(props)=>{

        return (
            <>
                {props.content.map((u,index) =>
                    <div key ={index}>
                        <Link to={`/show/${u.isbn}`}>{u.name}</Link>
                    </div>)}
            </>
        );

}

export default SearchContent;