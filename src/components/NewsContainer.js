import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsContainer extends Component {
    
   

    

   
    render() {
        //const api_key = '46e9bd39c0524d6bbdbbf40fc1ca8bad';
        const url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2021-08-27&' +
        'sortBy=popularity&' +
        'apiKey=46e9bd39c0524d6bbdbbf40fc1ca8bad';
        const req = new Request(url);
        const handleClick = async() =>{
            const response = await fetch(req);
            const data = await response.json();
        }
    
        return (
            <div>
                This is NewsContainer Component.
                <button onClick={handleClick}>Click the button</button>
                
                <NewsItem />
                <NewsItem />
            </div>
        )
    }
}

export default NewsContainer
