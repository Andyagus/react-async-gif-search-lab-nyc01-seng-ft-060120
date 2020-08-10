import React from 'react'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{
	render(){
		console.log(this.props.gifs)
		let gifs = this.props.gifs.map(gif => <GifList gif={gif} />)
		return(
			<div> 
				<h4> Gif Container </h4>
				{gifs}
			</div> 
		)
	}
}

export default GifListContainer