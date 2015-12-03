var React = require('react'),
	AppActions = require('../actions/AppActions')
	BusinessStore = require('../stores/BusinessStore')
	Business = require('./Business');

var BusinessList = React.createClass({
	render: function(){
		
		var businessNodes;
		if(this.props.businesses){
			businessNodes = this.props.businesses.map(function(business, index){
				return(
					<Business businessInfo={business} key={index} />
				);
			});
		}else{
			businessNodes = 'There are no listings';
		}
		return (
			<div>
				{businessNodes}
			</div>
		);
	}
});

module.exports = BusinessList;