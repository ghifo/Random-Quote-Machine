import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typeography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
	<Card>
		<CardContent>
			<Typeography id='text'>
				{selectedQuote.quote} - <span id='author'>{selectedQuote.author}</span>
			</Typeography>
		</CardContent>
		<CardActions>
			<Button id='new-quote' size='small' onClick={assignNewQuoteIndex}>
				Next Quote!
			</Button>
			<IconButton
				id='tweet-quote'
				target='blank'
				// encodedURI: used in the address bar to accept % and other simpoles
				href={encodeURI(
					`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`,
				)}
			>
				<FontAwesomeIcon icon={faTwitter} />
			</IconButton>
		</CardActions>
	</Card>
);

export default QuoteMachine;
