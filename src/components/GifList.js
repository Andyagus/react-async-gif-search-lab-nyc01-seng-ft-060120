import React from 'react'

class GifList extends React.Component{
	render(){
		console.log(this.props.gif.images.original.url)
		return(
			<ul> 
				<li> <img src={this.props.gif.images.original.url} /> </li> 
			</ul> 
		)
	}
}

export default GifList