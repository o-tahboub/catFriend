import React from 'react';

const Card = props => {
    return (
    <div style={{padding: '35px'}}>
        <img src={`https://robohash.org/${props.name}?set=set4`}></img>
        <h3 style={{fontSize: '3rem'}}>{props.name}</h3>
    </div>
    )
}

export default Card;