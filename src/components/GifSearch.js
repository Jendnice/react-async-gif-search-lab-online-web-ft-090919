import React, { Component } from 'react'


// renders a form that receives user input

// stores the value of the input in its component state
// renders the DOM accordingly

// receives a callback prop from its parent (GifListContainer)
// on submit event, it invokes that callback prop with the text input value
//  (this callback function (defined in GifListContainer) is what will 
//    actually query the API with the text the user has entered.)


class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchText: ""
        }
    }

    handleTextChange = (event) => {
        this.setState({
            searchText: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state.searchText)
    }

    render() {
        return(
        <form onSubmit={(event) => this.handleSubmit(event)} >
        <div>
          <label>
            Search
            <input id="searchText" name="searchText" type="text" 
            onChange={event => this.handleTextChange(event)} 
            value={this.state.searchText}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        </form>
        )
    }

}



export default GifSearch 