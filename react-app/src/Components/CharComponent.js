import React from 'react';
const inlineStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign:'center',
    margin: '16px', 
    border: '1px solid black'
}


const charComponent = (props)=> {
    return(
        <div style = {inlineStyle} onClick = {props.clicked}>
        {props.character}
        
        </div>
    )
};

export default charComponent;