import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
         let {title,description,imgUrl,url,author,date1,source}=this.props;
    return (
      <div>
       <div className="card" >
  <img className="card-img-top" src={imgUrl} alt="Ca"/>
  
  <div className="card-body">
    <h5 className="card-title">{title}  
    <span style={{zIndex:"1"}} className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
   {source}
  </span>
    </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By <b>{author}</b> on <b>{new Date(date1).toGMTString()}</b></small></p>
    <a href={url} className="btn btn-primary" target="_blank">Read More</a>
    
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem
