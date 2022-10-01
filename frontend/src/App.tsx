import React from 'react'
import ResponsiveAppBar from '~/components/header'
import { ArtPage } from '~/pages/art/art'

const App: React.FC = () => {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<ArtPage></ArtPage>
		</div>
	);
}
export default App
