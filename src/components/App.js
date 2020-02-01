// My Giphy key: ia5cx03TceKF9Uo8ZM6SKoCuQxyJF2rT
// Giphy URL with my key: https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=ia5cx03TceKF9Uo8ZM6SKoCuQxyJF2rT&rating=g
// Ex. url for "dolphin" search: https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=ia5cx03TceKF9Uo8ZM6SKoCuQxyJF2rT&rating=g

import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App
