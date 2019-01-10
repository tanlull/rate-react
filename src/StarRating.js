import React, {Component} from 'react'
import Star from './Star'
import './StarRating.css'

const createArray = (length) => [...Array(length)]

export default class StarRating extends Component {

    constructor(props){
        super(props)
        this.state ={
            starsSelected : props.starsSelected || 0
        }
        this.change = this.change.bind(this);
    }

    change(starsSelected){
        this.setState({starsSelected : starsSelected})
        this.props.onChange(starsSelected) // input starsSelected 
    }

    render(){
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return(
            <div className='star-rating'>
                {createArray(this.props.totalStars).map((n,i) =>
                     <Star key={i} selected={i < starsSelected}
                     onClick={()=> this.change(i+1)}
                     />
                     ) }
                <p>{starsSelected} of {totalStars}</p>
            </div>
        )
    }
}

StarRating.defaultProps = {
    totalStars:5
}