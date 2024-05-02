import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width:'18rem'}}>
                    <img src={!imageUrl?"https://i.cdn.newsbytesapp.com/images/14212111714539412.jpeg":imageUrl} className="card-img-top" alt="loading"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-sn btn-dark">know more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
