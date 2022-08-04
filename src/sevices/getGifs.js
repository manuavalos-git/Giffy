const api_key='vjwfbr4sIkU7xRRiuTJV3wwY6GLCCCrf'

export default function getGifs({keyword='fight'}={}){
   const api_url=`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`
    return fetch(api_url)
    .then(res => res.json())
    .then(response =>{
      const {data}=response
      const gifs= data.map(image=> {
        const {images,id,title}=image
        const {url}=images.downsized_medium
        return {id,title,url}
        })
      return gifs
    })
} 