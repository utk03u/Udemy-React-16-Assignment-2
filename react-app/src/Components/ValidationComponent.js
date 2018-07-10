import React from 'react';

const validationComponent = (props)=>{
 
    return(
    <div>
        {(props.len < 5) ? <p>Too short</p> : (props.len > 30)? <p>Too long</p>: <p>The length is OK</p>}
        {/*props.len > 20 ? <p>Too long</p> : <p></p>*/}
       
        
    </div>
    )
};

export default validationComponent;