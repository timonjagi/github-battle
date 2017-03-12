var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./userdetails');
var styles = require('../styles');
var UserDetailsWrapper = require('./userdetailswrapper');
var Link = require('react-router').Link;
var MainComponent = require('./maincomponent');

function Results(props){
	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;

	var StartOver = function(props){
		return (
			<div className='col-sm-12' style={styles.space}>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-danger'>
						Start Over
					</button>
				</Link>
			</div>
		)
	};

	return (
		<MainComponent>
			<h1>Results</h1>
			<div className='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header="winner">
					<UserDetails score={props.scores[winningIndex]} info={props.playerInfo[winningIndex]}/>
				</UserDetailsWrapper>
				<UserDetailsWrapper header="loser">
					<UserDetails score={props.scores[losingIndex]} info={props.playerInfo[losingIndex]}/>
				</UserDetailsWrapper>
			</div>
			<StartOver />
		</MainComponent>
	)
}	

Results.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	playerInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

module.exports = Results;