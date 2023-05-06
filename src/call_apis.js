
const fetch_top_news =async (category='pakistan')=>{
    let date = new Date()
    let prev_date = date.setDate(date.getDate()-1)
    let yesterday = new Date(prev_date)
    let y_date = yesterday.toISOString().split('T')[0]

    
    let response =await fetch(`https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&apiKey=16785a7c66b940babb0c1e6102c0a2a0`,{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            
        }
    }).then(resp=>resp.json())
    .then(json=>{
        return {
            'status':'succes',
            'data':json
            }
    })
    .catch((error) =>{
        console.log(error)
        return {
            'status':'failed',
            'error':error.message
        
        }
    })
    
   
    
    return response
}

const fetch_headlines = async(country='us') =>{
    let response =await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=16785a7c66b940babb0c1e6102c0a2a0`,{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            
        }
    }).then(resp=>resp.json())
    .then(json=>{
        return {
            'status':'succes',
            'data':json
            }
    })
    .catch((error) =>{
        console.log(error)
        return {
            'status':'failed',
            'error':error.message
        
        }
    })
    
   
    
    return response
}
module.exports = {
    fetch_top_news,
    fetch_headlines
}