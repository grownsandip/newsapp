import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';

export class News extends Component {
  constructor(){
    super();
    this.state={
       articles:[],
       loading: false,
       page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e8de7740bb30498e93e9cfda716fd8a0&pageSize=${this.props.pageSize}`;
    this.setState ({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
  }
  handleNext= async ()=>{
    if (!(this.state.page+1>Math.ceil(this.state.totalResults/20))){
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e8de7740bb30498e93e9cfda716fd8a0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
       page:this.state.page+1,
       articles:parsedData.articles,
       loading:false
      })

    }
 }
  handlePrev= async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e8de7740bb30498e93e9cfda716fd8a0&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  let data=await fetch(url);
  let parsedData=await data.json();
  this.setState({
   page:this.state.page-1,
   articles:parsedData.articles
  })
 }
  render() {
    return (
      <div className='container my-3 '>
        <h2 className='textcenter'>Top headlines</h2>
         {this.state.loading && <Spinner/>}
         <div className="row" >
      {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
             <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrev}>&larr;Previous </button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)}type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}

export default News
