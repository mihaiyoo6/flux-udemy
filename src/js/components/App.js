var React = require('react'),
	AppActions = require('../actions/AppActions')
	BusinessStore = require('../stores/BusinessStore')
	Business = require('./Business'),
	BusinessFormNew = require('./BusinessFormNew'),
	BusinessFormEdit = require('./BusinessFormEdit'),
	BusinessList = require('./BusinessList'),
	NavBar = require('./NavBar');

function getAppState(){
	return{
		businesses: BusinessStore.getBusinesses().list,
		mainState: BusinessStore.getBusinesses().mainState
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function() {
		BusinessStore.addChangeListener(this._onChange);
	},
	componentUnmount: function() {
		BusinessStore.removeChangeListener(this._onChange);	
	},
	render: function(){
		if(this.state.mainState === 'new'){
			var form = <BusinessFormNew />;
		}else if(this.state.mainState === 'list'){
			var list = <BusinessList businesses={this.state.businesses}/>;
		}else if(this.state.mainState === 'edit'){
			var form = <BusinessFormEdit />;
		}
		return(
			<div className="wrapper">
				<NavBar mainState={this.state.mainState} />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							{form}
							{list}
						</div>
					</div>
				</div>
			</div>
		)
	},
	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;