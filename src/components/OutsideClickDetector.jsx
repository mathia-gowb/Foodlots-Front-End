import React, { useEffect, useState } from 'react'

function OutsideClickDetector(props) {

    const {
        targets=[],
        callback=()=>{},
    } = props;

    useEffect(()=>{

        //only add eventlistener if there is a popup showing

        document.addEventListener('click',(event)=>{
            const eventPathElements=event.composedPath();
            
            //check that there is something in the targets array
            if(!targets.includes(undefined)){

                let targetsFound=false;

                targets.forEach(target=>{
                    if(eventPathElements.includes(target)) targetsFound=true;
                })
                
                //if the targets where not found call the callback
                if(!targetsFound) callback();
            }   
        })
      
        //clean up
        return ()=>{
            document.removeEventListener('click',()=>{

            })
        }
    },[targets]); //end useEffect

    //render nothing
    return null
  
}

export default OutsideClickDetector