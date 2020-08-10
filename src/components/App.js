import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'

class App extends React.Component {
  

	state = {
		gifs: [],
		length: [],
		search: "cats"
	}

	componentDidMount(){
		fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(resp => resp.json())
		.then(resp => {
			this.setState({gifs: resp.data})
			})
	}

	submitHandler = (e) => {
		this.setState({search: e})
			fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(resp => resp.json())
		.then(resp => {
			 this.setState({gifs: resp.data})
			})
	}

	spliceGifs = () => {
		let newArray = [...this.state.gifs]
    let arr = newArray.splice(this.state.length, 4)
    return arr
	}

  render(){

  	return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        < GifSearch submitHandler={this.submitHandler}/>
        < GifListContainer gifs={this.spliceGifs()} />
      </div>
    )}
}

export default App
