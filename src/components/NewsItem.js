import React, { Component } from 'react';
import logo from './dummy.png';

//rendered inside News.js

export class NewsItem extends Component {
    
    render() {
        // props recieved from News.js
        // alternatively, the props can directly be used by '{this.props.propname}' without this line
        let { title, description, imgUrl, newsUrl, author, publishedAt, source } = this.props;
        let d = new Date(publishedAt);
        let date = d.toGMTString();
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imgUrl ? imgUrl : logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <span className="badge text-bg-danger my-3">{source.name}</span>
                        <h5 className="card-title">{title ? title : ''}</h5>
                        <p className="card-text">{description ? description : ''}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {date}</small></p>
                        <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem