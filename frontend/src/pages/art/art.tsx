import React, { Component } from 'react';
import './art.css';
import { TextareaAutosize } from '@mui/base'
//import { Api } from "~/api/api-service";

export class ArtPage extends Component {

	//[search, setSearch] = useState('');
	//[imgUrl, setImgUrl] = useState('');

	state = {
		search: '',
		imgUrl: ''
	}

	private requestImage = () => {
		console.log('searchValue', this.state.search)
		// Do request and parse binary like blob
		/*Api.generateImage().then(response => {
			console.log(response)
			if (response.ok) {
				response.blob().then(img =>
					this.setState({imgUrl: URL.createObjectURL(img)})
				)
			}
		});*/
		const imgUrl = 'http://127.0.0.1:8000/generate';
		this.setState({imgUrl})
	}

	private handleKeyDown = (e: { key: string; }) => {
		if (e.key === 'Enter') {
			this.requestImage();
		}
	}

	render() {
		return (
			<div className="body">
				<p className="label">Write for magic</p>
				<TextareaAutosize
					className="input"
					aria-label='empty textarea'
					placeholder=' Ex: Nebula in JuliaArt Style'
					onKeyDown={this.handleKeyDown}
					onChange={e => this.setState({search: e.target.value})}
				/>
				<div className="gallery">
					{this.state.imgUrl && <img alt="image" src={ this.state.imgUrl }></img>}
				</div>
			</div>
		)
	}

}
