import React, { useState, useEffect } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import QuoteMachine from './components/QuoteMachine';

const styles = {
	container: {
		alignItems: 'center',
		display: 'flex',
		height: '100vh',
		backgroundImage:
			"url('http://kristinsmedley.com/wp-content/uploads/2019/08/sunset-marthas-vineyard-memena-for-blog-e1566906628163-1484x1113.jpg')",
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
	},
};

function App({ classes }) {
	const [ quotes, setQuotes ] = useState([]);
	const [ selectedQuoteIndex, setSelectedQuoteIndex ] = useState(null);
	useEffect(async () => {
		const data = await fetch(
			'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json',
		);
		const quotes = await data.json();
		setQuotes(quotes);
		setSelectedQuoteIndex(random(0, quotes.length - 1));
	}, []);

	function getSelectedQuote() {
		if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
			return undefined;
		}
		return quotes[selectedQuoteIndex];
	}

	// lodash library: random()
	// Produces a random number between the inclusive lower and upper bounds
	function generateNewQuoteIndex() {
		if (!quotes.length) {
			return;
		}
		return random(0, quotes.length - 1);
	}

	function assignNewQuoteIndex() {
		setSelectedQuoteIndex(generateNewQuoteIndex());
	}

	return (
		<Grid className={classes.container} id='quote-box' justify='center' container>
			<Grid xs={11} lg={8} item>
				{getSelectedQuote() ? (
					<QuoteMachine
						selectedQuote={getSelectedQuote()}
						assignNewQuoteIndex={assignNewQuoteIndex}
					/>
				) : null}
			</Grid>
		</Grid>
	);
}

export default withStyles(styles)(App);
