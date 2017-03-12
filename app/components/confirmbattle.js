var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./userdetails');
var UserDetailsWrapper = require('./userdetailswrapper');
var MainComponent = require('./maincomponent');


function ReselectPlayers(props){
	return (
		<div className='col-sm-12' style={styles.space}>
			<Link to='/playerOne'>
				<button type='button' className='btn btn-lg btn-danger'>
					Reselect Players
				</button>
			</Link>
		</div>
	)
}

function ConfirmBattle(props){
	return props.isLoading === true
		? <p> LOADING </p>
		: <MainComponent>
			<h1>Confirm Players</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header='Player One'>
					<UserDetails info={props.playerInfo[0]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='Player Two'>
					<UserDetails info={props.playerInfo[1]} />
				</UserDetailsWrapper>
			</div>
			
		
			<div className='col-sm-12' style={styles.space}>
				<button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
					Initiate Battle
				</button>
			</div>
			<ReselectPlayers />

		</MainComponent>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playerInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}
module.exports = ConfirmBattle;