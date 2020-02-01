import React, { Component } from 'react'


class GifList extends Component {

    // receives data from its props and renders html given the input data

    // renders a top level <ul> with each gif as an <li>

   

    render() {
        return(
            <div>
                <ul>
                    <li>
                     { <img src={ `${this.props.gifs[0]}` }
                            alt={"animated"}  /> }
                    </li>
                    <li>  
                    { <img src={ `${this.props.gifs[1]}` }
                            alt={"animated"}  /> }   
                    </li>
                    <li>
                    { <img src={ `${this.props.gifs[2]}` }
                            alt={"animated"}  /> }
                    </li>
                </ul>
            </div>
        )
    }

}



export default GifList 