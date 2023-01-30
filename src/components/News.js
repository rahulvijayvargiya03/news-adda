import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
   // defaultProps = {
   //    country: 'in',
   //    pageSize:8,
   //    category:"technology"
   //  }
   // PropTypes = {
   //      country: PropTypes.string,
   //    pageSize:PropTypes.number,
   //    category: PropTypes.string
   //  }
   capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
   constructor(props){
      super(props);
      console.log("constructor inside news component-1")
      this.state={
         articles:[],  
         page: 1,                                           
         load: true,
         totalResults: 0
      }
      console.log("constructor inside news component-2")
      document.title=`${this.capitalizeFirstLetter(this.props.category)}--NewsAdda`;
      // render will go first then component Did MOunt
   }
   // async updateNews(){
   //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5af36baddbb34e7e8d090091b5c4b6a2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   //    let data = await fetch(url);
   //    let parsedData = await data.json();
      
   //    this.setState( {articles:parsedData.articles,
   //       totalResults:parsedData.totalResults,
   //       load:false});
   // }
   async componentDidMount(){
      {console.log("inside componentdidMount-1")}
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5af36baddbb34e7e8d090091b5c4b6a2&pageSize=${this.props.pageSize}&page=${this.state.page}`;
      {console.log("inside componentdidMount-2")}
      let data = await fetch(url);
      let parsedData = await data.json();
      
      // console.log("jai mahakall");
      this.setState( {articles:parsedData.articles,
         totalResults:parsedData.totalResults,
         load:false});
         
         {console.log("inside componentdidMount-3")}
      // this.updateNews();
      
   }  
   // handlePrev= async ()=>{
   //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5af36baddbb34e7e8d090091b5c4b6a2&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
   //    this.setState({
   //       load:true
   //    })
   //    console.log("prev1");
   //    let data = await fetch(url);
   //    let parsedData = await data.json();
   //    console.log("prev0");
   //       this.setState({
   //          page: this.state.page-1,
   //          articles:parsedData.articles,
   //          load:false
   //       })
   //    //    console.log("prev2");
   //    // this.setState({
   //    //    page:this.state.page-1
   //    // })
   //    // this.updateNews();

   // }
   // handleNext= async ()=>{
   //    if(Math.ceil(this.state.totalResults/this.props.pageSize) < this.state.page+1 ){

   //    }
   //    else{
   //       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5af36baddbb34e7e8d090091b5c4b6a2&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   //       console.log("ds");
   //       this.setState({
   //          load:true
   //       })
   //       let data = await fetch(url);
   //       let parsedData = await data.json();
         
   //       console.log(parsedData);
   //          this.setState({
   //             page: this.state.page+1,
   //             articles:parsedData.articles,
   //             load:false
   //          })
   //    }
      // this.setState({
      //    page:this.state.page+1
      // })
      // this.updateNews();
     
   // }
   fetchMoreData = async() => {
      {console.log("inside fetch more data-1")}
   
      this.setState({page:++this.state.page});
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5af36baddbb34e7e8d090091b5c4b6a2&pageSize=${this.props.pageSize}&page=${this.state.page}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      {console.log("inside fetch more data-2")}
      this.setState( {
         articles:this.state.articles.concat(parsedData.articles),
         totalResults:parsedData.totalResults,
         load:false});
         {console.log("inside fetch more data-3")}
    };
  render() {
    return (
      <div className='container my-3'>
      <h2 className='text-center my-5'>Top {this.capitalizeFirstLetter(this.props.category)} Headline</h2>
      <div className="text-center">
      {/* {this.state.load && <Loading />} */}
      </div>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<div className=' d-flex justify-content-center'><Loading/></div>}
        >
        {console.log("inside infinite")}
        <div className="container my-3">
       
        <div className="row">
     
         {this.state.articles.map((element)=>{
            return <div className="col-md-4">
        <NewsItem key={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage} url ={element.url} author={element.author} date1={element.publishedAt} source={element.source.name} />
         </div>
         })}
        </div>
          {console.log("inside render")}
        </div>
        </InfiniteScroll>
       
       
        {/* <div className="container d-flex justify-content-between ">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark my-5" onClick={this.handlePrev}>Previous</button>
        <button type="button" disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)}  className="btn btn-dark my-5" onClick={this.handleNext}>Next</button> */}
        </div>
        
    )
  }
}


export default News
