import React, {PureComponent} from 'react'

class Articles extends PureComponent {
     constructor(props) {
         super(props)

         this.state = {
             count: 0
         }
     }

/*     shouldComponentUpdate(nextProps, nextState) {
         return this.state.isOpen !== nextState.isOpen
     }*/

    componentWillMount() {}

/*     componentWillReceiveProps(nextProps) {
         if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
             isOpen: nextProps.defaultOpen
         })
     }*/

     componentWillUpdate() {}

    /*
    Ниже приведен такой-же тип записи эксперементальным синтаксисиом

    this.handleClick = handleClick.bind(this) ||

        handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    */

    /*
    Эксперементальный синтакси, эквивалентная запись той что сверху
    */
   /* state = {
        isOpen: true
    }*/


    render() {
        const {articles, isOpen, onButtonClick} = this.props
        const body = isOpen && <section className='card-text'>{articles.text}</section>

        return (
            <div className='card mx-auto' style={{width: '50%'}}>
                <div className='card-header'>
                    <h2 onClick={this.incrementCounter}>
                        {articles.title}
                        <br/>
                        clicked {this.state.count}
                            <button className='btn btn-info btn-lg float-right btn-articles' onClick={onButtonClick}>
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className='card-body'>
                    <h6 className='card-subtitle text-muted'>
                        creation date: {(new Date(articles.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

}

export default Articles