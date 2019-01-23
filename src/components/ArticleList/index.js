import React, {PureComponent}from 'react'
import Articles from "../Articles";
import './style.css'

export default class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    }
    render() {
        const articleElements = this.props.articles.map((articles, index) =>
            <li className='article-list_li' key = {articles.id}>
                <Articles articles = {articles}
                          isOpen ={this.state.openArticleId === articles.id}
                          onButtonClick = {this.handleClick.bind(this, articles.id)}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    handleClick = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })


}
