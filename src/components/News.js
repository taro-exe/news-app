import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';
import './style.css';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'General'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }

    }

    //async function returns a promise and await can be used within the function. adding await as a prefix of a function will cause the async function to pause until the await function is resolved.

    async getDetails() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, page: this.state.page + 1 });
        document.title = `${this.props.category} | NewsDump`;
    }

    componentDidMount() {
        this.getDetails();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults });

    };

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center my-5' style={{ fontFamily: 'Baloo Bhai 2', cursor: 'default', textTransform: 'uppercase' }}> {this.props.category}</h1>
                {/* loading state is initially true and then changed to false inside componentDidMount function (that calls getDetails function) */}
                {this.state.loading && <Spinner />}

                {/* infinite scroll component copied from npmjs.com */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner />}
                >
                    {/* row div has been put inside container div so that the scroll bar won't appear. container div centers the elements inside. */}
                    <div className="container">
                        <div className="row">
                            {/* map the elements of articles after loading becomes false (after fetching and parsing data in getDetails function) */}
                            {this.state.articles.map((element, index) => {
                                return <div key={index} className="col-md-4">
                                    <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source}/>
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News