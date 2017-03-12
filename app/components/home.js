var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainComponent = require('./maincomponent');

var Home = React.createClass({
	render: function(){
		return (
			<MainComponent> 
				<h1>Github Battle</h1>
				<p className='lead'>Some fancy motto</p>
				<Link to='playerOne'>
					<button type='button' className='btn btn-lg btn-success'>
						Get started
					</button>
				</Link>
			</MainComponent>
		)
	}
});

module.exports = Home;
