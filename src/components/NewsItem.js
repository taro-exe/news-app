import React from 'react';
import logo from './dummy.png';

//rendered inside News.js

const NewsItem = (props) => {


    // props recieved from News.js
    // alternatively, the props can directly be used by '{props.propname}' without this line
    let { title, description, imgUrl, newsUrl, author, publishedAt, source } = props;
    let d = new Date(publishedAt);
    let date = d.toGMTString();
    return (
        <div className='my-3'>
            <div className={`card bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                <img src={imgUrl ? imgUrl : logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="badge text-bg-danger my-3">{source.name}</span>
                    <h5 className="card-title">{title ? title : ''}</h5>
                    <hr />
                    <p className="card-text">{description ? description : ''}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {date}</small></p>
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark" style={{ border: '1px solid white' }}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem