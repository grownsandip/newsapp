import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl?"https://i.cdn.newsbytesapp.com/images/14212111714539412.jpeg":imageUrl} className="card-img-top" alt="loading"/>
                    
                        <div className="card-body">
                            <h5 className="card-title">{title}<span class="badge text-bg-success">{source}</span></h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'><small class='text-danger'>By:{!author?'Unknown':author} ON:{date}</small></p>
                            <a href={newsUrl} className="btn btn-sn btn-dark">know more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
