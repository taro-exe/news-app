import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';
import './style.css';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    //async function returns a promise and await can be used within the function. adding await as a prefix of a function will cause the async function to pause until the await function is resolved.

    const getDetails = async () => {
        document.title = `${props.category} | NewsDump`;
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page + 1);
        
    }

    //Like componentDidMount and similar functions in class based components
    //first param is the effect and the second is the change at which the effect will happen
    useEffect(() => {
        getDetails();
        //eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };


    return (
        <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h1 className='text-center my-5' style={{ cursor: 'default', textTransform: 'uppercase' }}>TOP {props.category} HEADLINES</h1>
            {/* loading state is initially true and then changed to false inside componentDidMount function (that calls getDetails function) */}
            {loading && <Spinner />}

            {/* infinite scroll component copied from npmjs.com */}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                {/* row div has been put inside container div so that the scroll bar won't appear. container div centers the elements inside. */}
                <div className="container">
                    <div className="row">
                        {/* map the elements of articles after loading becomes false (after fetching and parsing data in getDetails function) */}
                        {articles.map((element, index) => {
                            return <div key={index} className="col-md-4">
                                <NewsItem mode={props.mode} title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'General'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;