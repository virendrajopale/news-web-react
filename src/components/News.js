import React, { Component } from 'react'

import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    categoty: 'ganeral'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    categoty: PropTypes.string
  }
  FirstLetterCapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false

    }
    document.title = `NewsMonk-${(this.FirstLetterCapital(this.props.category))}`
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })

    let data = await fetch(url)
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })


  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json();
    this.setState(
      {
        articles: parseData.articles,
        page: this.state.page - 1,
        loading: false
      })

  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({ loading: true })
      let data = await fetch(url)
      let parseData = await data.json();
      this.setState(
        {
          articles: parseData.articles,
          page: this.state.page + 1,
          loading: false
        })
    }

  }
  render() {
    let { mode, txtColor } = this.props// can also used in different pattern 

    return (
      <div className={`container my-3`}>
        <h2 className='text-center '>NewsMonk - Top {this.FirstLetterCapital(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row pt-3">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 pt-3" key={element.url}>
              <NewsItems mode={mode} txtColor={txtColor} key={element.url} title={element.title ? element.title.slice(0, 42) : ""} desciption={element.description ? element.description.slice(0, 70) : ""} author={!element.author ? 'Unknown' : element.author} date={element.publishedAt} source={element.source.name} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between pt-4">
          <button disabled={this.state.page <= 1 ? true : false} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.pageSize)} type="button" className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

