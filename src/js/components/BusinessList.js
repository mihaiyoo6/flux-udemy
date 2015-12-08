var React = require('react'),
	AppActions = require('../actions/AppActions')
	BusinessStore = require('../stores/BusinessStore')
	Business = require('./Business');

var BusinessList = React.createClass({
	render: function(){
		
		var businessNodes;
		var showExtended=this.props.showExtended;
		var selectedId=this.props.selectedId;
		if(this.props.businesses){
			businessNodes = this.props.businesses.map(function(business, index){
				return(
					<Business businessInfo={business} key={index} showExtended={showExtended} selectedId={selectedId} />
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