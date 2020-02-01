import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// store first 3 gifs in state
        // pass them down to GifList child as props

// fetch data from giphy API

// pass down a submit handler function to GifSearch as props

class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }
    
    submitHandler = (searchText) => {  
        let e = searchText
        this.fetchSearch(e)
    }

    fetchSearch = (e) => {
        let URL = 'https://api.giphy.com/v1/gifs/search?q=' + e + '&api_key=ia5cx03TceKF9Uo8ZM6SKoCuQxyJF2rT&rating=g'

        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.updateState(data))
    }

    updateState = (data) => {
        let firstGif = data["data"][0].images.original.url
        let secondGif = data["data"][1].images.original.url
        let thirdGif = data["data"][2].images.original.url

        this.setState({
            gifs: [ firstGif, secondGif, thirdGif ]
        })
    }


    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch submitHandler={this.submitHandler} />
            </div>
        )
    }


}



export default GifListContainer