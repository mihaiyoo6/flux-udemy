var AppActions = require('../actions/AppActions');

module.exports = {
	getAllItems: function(){
		var items = JSON.parse(localStorage.getItem('businesses'));
		//simulates callback
		AppActions.receiveItems(items);
	},
}