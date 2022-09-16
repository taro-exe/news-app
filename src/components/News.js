import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';
import './style.css';

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
            loading: false,
            page: 1
        }
    }

    //async function returns a promise and await can be used within the function. adding await as a prefix of a function will cause the async function to pause until the await function is resolved.

    async getDetails() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0750cc0b899482e82096cfc35f941e0&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        document.title = `${this.props.category} | NewsDump`;
    }

    componentDidMount() {
        this.getDetails();
    }

    handlePrevClick = () => {
        this.setState({ page: this.state.page - 1 }, this.getDetails); //here the second parameter is an optional callback function of setState which will only be executed after the state of 'page' is updated.
        //alernatively, async/await can be used by adding await before this.setState and calling the function after that.
    }

    handleNextClick = () => {
        this.setState({ page: this.state.page + 1 }, this.getDetails);
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center my-5' style={{ fontFamily: 'Baloo Bhai 2', cursor: 'default', textTransform: 'uppercase' }}> {this.props.category}</h1>
                {this.state.loading && <Spinner />} 
                {/* spinner will be rendered while the state of loading is true. loading will be true while the data is being fetched using api and that data is getting parsed (in getDetails function) */}
                <div className="row">
                    {/* map the elements of articles after loading becomes false (after fetching and parsing data in getDetails function) */}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News