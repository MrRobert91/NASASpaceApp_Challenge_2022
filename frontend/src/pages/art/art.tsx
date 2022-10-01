import React, { Component } from 'react';
import './art.css';
import { TextareaAutosize } from '@mui/base'
import {Card, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export class ArtPage extends Component {

	state = {
		search: '',
		imgUrl: '',
		spaceObjects: [
			"Jupiter",
		    "Mars",
			"Earth",
			"Orion",
			"Venus",
			"Nebulosa"
			],
		artists: ["JuliaArt"]
	}

	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		//Api.getSpaceObjects().then(r => this.setState({spaceObjects: r}));
		//Api.getArtists().then(r => this.setState({artists: r}));
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
		const imgUrl = 'http://localhost:8000/generate';
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
				<Grid container spacing={2}>
  					<Grid item xs={8}>
    					<p className="label">Write for magic</p>
						<TextareaAutosize
							className="input"
							aria-label='empty textarea'
							placeholder=' Ex: Nebula in JuliaArt Style'
							minRows={2}
							onKeyDown={this.handleKeyDown}
							onChange={e => this.setState({search: e.target.value})}
						/>
						<div className="gallery">
							{this.state.imgUrl && <img alt="image" src={ this.state.imgUrl }></img>}
						</div>
  					</Grid>

					<Grid item xs={2}>
						<Card className="card" sx={{ minWidth: 275 }}>
						  	<Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
								<p>Space Objects</p>
							</Typography>
							{this.state.spaceObjects.map(so => (<p key={so}>{so}</p>))}
							{/*<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>*/}
						</Card>
						<Card className="card" sx={{ minWidth: 275 }}>
						  	<Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
								<p>Artists</p>
							</Typography>
							{this.state.artists.map(so => (<p key={so}>{so}</p>))}
						</Card>
					</Grid>
				</Grid>
			</div>
		)
	}

}
