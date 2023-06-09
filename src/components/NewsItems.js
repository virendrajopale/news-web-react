import React, { Component } from 'react'

export class NewsItems extends Component {
 
  render() {
      let {title, desciption,imageUrl,newsUrl,author,date}=this.props;

    return (
      <div>
    <div className={`card bg-${this.props.mode} text-${this.props.txtColor}` } >
      <div className='d-flex justify-content-end position-absolute end-0'>

    <span className=" badge  bg-danger" >
   {this.props.source} </span>
      </div>
  <img src={!imageUrl?"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg":imageUrl} className="card-img-top" alt="..."/>
    <h5 className="card-title">{title}...

 </h5>
  <div className="card-body">
    <p className="card-text">{desciption}...</p>
    <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="noreferel"className="btn btn-primary">Read More</a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItems
