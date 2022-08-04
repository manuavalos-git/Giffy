import React,{useEffect,useState} from 'react';
import getGifs from '../sevices/getGifs';
import Gif from './Gif';


function ListOfGifs ({params}) {
    const {keyword}=params
    const [gifs,setGifs]=useState([]);


    useEffect(()=>{
        getGifs({keyword})
        .then(gifs=> setGifs(gifs))
    },[keyword])

    return gifs.map(({id,title,url}) => {
            return <Gif 
                key={id}
                id={id}
                title={title}
                url={url}
            />
    })
    
}

export default ListOfGifs;