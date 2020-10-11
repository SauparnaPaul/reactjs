import React from 'react'
import { Link } from 'react-router-dom'


const AllBook=(props) => {
    return (
        <div>
           {props.item.map(item => (
                            <div key={item.isbn}>
                                {item.name} : {item.isbn}
                                <Link to={`/show/${item.isbn}`}>Read</Link>
                            </div>
                    ))} 
        </div>
    )
}

export default AllBook
