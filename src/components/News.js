import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "The Indian Express",
          "title": "Flipkart to slash iPhone 15 price to Rs 63,999 during big saving days sale - The Indian Express",
          "description": null,
          "url": "https://indianexpress.com/article/technology/mobile-tabs/iphone-15-sale-offers-flipkart-9298988/",
          "urlToImage": null,
          "publishedAt": "2024-04-30T10:17:25Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "PINKVILLA"
          },
          "author": "Marita Pinto",
          "title": "What is 2022 TN1 asteroid? Ginormous 1029-foot space rock to hurtles towards Earth at break-neck speed on April 30 - PINKVILLA",
          "description": "On April 30, 2024, An Asteroid Known As 2022 TN1 Will Get Close To Earth—71,30,422 Kilometers, Or Fewer Than 19 Times The Distance From Earth To The Moon.",
          "url": "https://www.pinkvilla.com/trending/world/what-is-2022-tn1-asteroid-ginormous-1029-foot-space-rock-to-hurtles-towards-earth-at-break-neck-speed-on-april-30-1300748",
          "urlToImage": "https://www.pinkvilla.com/images/2024-04/1749138770_2022-tn1.jpg",
          "publishedAt": "2024-04-30T09:45:27Z",
          "content": "NASA experts are on high alert due to a cosmic event in which a large asteroid known as 2022 TN1 is rapidly approaching Earth. On April 30, 2024, this enormous space rock1029 feet wideis scheduled to… [+2194 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Vinayakk Mohanarangan",
          "title": "Uber Cup 2024 Live Updates: 15-year-old Tanvi impresses in defeat, tearful Anmol retires hurt as China win 5-0 - The Indian Express",
          "description": "Uber Cup 2024 Live Score: In a Group A encounter, a young Indian squad takes on red-hot favourites China. Both teams have already qualified for the quarterfinals.",
          "url": "https://indianexpress.com/article/sports/badminton/thomas-uber-cup-2024-live-updates-today-india-china-anmol-isharani-9297515/",
          "urlToImage": "https://images.indianexpress.com/2024/04/Uber-Cup-India-vs-China-Live.jpg",
          "publishedAt": "2024-04-30T05:31:03Z",
          "content": "ANMOL KHARB loves a good one-liner, and doesn’t particularly care about traditional festivals if they come in the way of her badminton practice. On Diwali, she demanded to know from coach Kusum Singh… [+1324 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "Google layoffs: Company cuts more jobs in these key teams citing reorganisation - Hindustan Times",
          "description": "Google layoffs: Google has told employees from Python, Dart, Flutter and other teams that they are being laid off, it was reported.",
          "url": "https://www.hindustantimes.com/business/google-layoffs-company-cuts-jobs-in-these-key-teams-citing-reorganisation-101714444977115.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/30/1600x900/dallas-photo-google-college-pichai-speaks-centro_f0790114-7f5b-11ea-aedf-4d2519fcedc3_1714446274994.jpg",
          "publishedAt": "2024-04-30T03:09:57Z",
          "content": "Google layoffs: Sundar Pichai's Google is on a layoff spree- in line with the larger job cuts in the tech sector which has seen little signs of slowing down this year. Just after almost 50 Google emp… [+1976 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Rakesh Patil",
          "title": "Stock Market Today: Top 10 things to know before the market opens - Moneycontrol",
          "description": "Trends in the GIFT Nifty indicate a flat start for the broader index in India, with a gain of 15 points or 0.07 percent.",
          "url": "https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-281-12710939.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/04/20240429144554_fandosensexniftyderivative.jpg",
          "publishedAt": "2024-04-30T01:21:20Z",
          "content": "The benchmark Sensex and Nifty indices are likely to open on a flat-to-positive note on April 30 as trends in the GIFT Nifty indicate a muted start for the broader index with a gain of 15 points.\r\nTh… [+4503 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "NASA satellite discovers ancient meteorite impact crater in Gujarat - HT Tech",
          "description": "NASA satellite discovers ancient meteorite impact crater in Gujarat NASAs Earth Observatory satellite recorded Luna crater in Kutch Gujarat. Geochemical analysis confirms meteorite impact. OLI on Landsat 8 captured Luna crater on February 24. NASA shared zoom…",
          "url": "https://tech.hindustantimes.com/web-stories/nasa-satellite-discovers-ancient-meteorite-impact-crater-in-gujarat-71714423118705.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2024/04/29/1600x900/Nasa_bada_1714424166671_1714424170620.jpg/",
          "publishedAt": "2024-04-29T22:50:17Z",
          "content": "NASA's Earth Observatory satellite recorded Luna crater in Kutch, Gujarat. Geochemical analysis confirms meteorite impact.\r\nOLI on Landsat 8 captured Luna crater on February 24. NASA shared zoomed im… [+424 chars]"
        }
      ]
  
  constructor(){
    super();
    console.log("hello this is a constructor");
    this.state={
       articles:this.articles,
       loading: false
    }
  }
  render() {
    return (
      <div className='container my-3 '>
        <h2 className='textcenter'>Top headlines</h2>
         <div className="row" >
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
             <NewsItem  title={element.title.slice(0,45)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
