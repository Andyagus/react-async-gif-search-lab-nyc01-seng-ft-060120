import React from 'react'

class GifSearch extends React.Component{
	
	state = {
		search: ""
	}

	render(){
		return(
			<form onSubmit={(e)=>{
				e.preventDefault()
				this.props.submitHandler(e.target[0].value)
				}}> 
				<input type="text" value={this.props.search} onChange={(e)=>{
					this.setState({search: e.target.value})
					}}/>
				<input type="submit"/>
			</form> 
		)
	}
}

export default GifSearch