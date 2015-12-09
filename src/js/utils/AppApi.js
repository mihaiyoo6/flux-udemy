var AppActions = require('../actions/AppActions');

module.exports = {
	getAllItems: function(){
		var items = JSON.parse(localStorage.getItem('businesses'));
		//simulates callback
		AppActions.receiveItems(items);
	},
	saveItem: function(item){
		console.log(item);
		var items = JSON.parse(localStorage.getItem('businesses'));
		items.push(item);
		console.log(items);
		localStorage.setItem('businesses', JSON.stringify(items));
		console.log(JSON.parse(localStorage.getItem('businesses')));
	},
	removeItem: function(itemId){
		var items = JSON.parse(localStorage.getItem('businesses'));
		for(var i = 0; i < items.length; i++){
			if(items[i].id === itemId){
				items.splice(i, 1);
			}
		}
		localStorage.setItem('businesses', JSON.stringify(items));
	},
	getItem: function(itemId){
		var items = JSON.parse(localStorage.getItem('businesses'));
		for(var i = 0; i < items.length; i++){
			if(items[i].id === itemId){
				AppActions.receiveItem(items[i]);
			}
		}
	},
	updateItem: function(item){
		var items = JSON.parse(localStorage.getItem('businesses'));
		for(var i = 0; i < items.length; i++){
			if(items[i].id === item.id){
				items.splice(i, 1);
				// items.push(item);
			}
		}
		localStorage.setItem('businesses', JSON.stringify(items));
	},
}