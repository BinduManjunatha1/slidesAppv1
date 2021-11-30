import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

function Slides({slides}) {

    let  [id,setId]= useState(0)
    
    
    
    const next =()=>{
        
       
        if(id < slides.length  && id != slides.length-1){
            console.log("Length is ",slides.length +" id is ",id)
            
            return setId(++id)

        }
     }

     const prev =()=>{
         
        if(id <= slides.length && id > 0){
           
            return setId(--id)
        }
        
     }

     const restart =()=>{
         return setId(0)
     }


    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={prev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={next}>Next</button>
            </div>
            
               
                    <div id="slide" className="card text-center">
                    <h1 data-testid="title">{slides[id].title}</h1>
                    <p data-testid="text">{slides[id].text}</p>
                    </div>
              
           
        </div>
    );

}

export default Slides;
