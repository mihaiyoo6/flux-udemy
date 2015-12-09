var AppDispatcher = require('../dispatcher/AppDispatcher'),
	AppConstants = require('../constants/AppConstants');

var AppActions = {
	receiveItems: function(items){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_ITEMS,
			items: items
		});
	},
	newItem: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.NEW_ITEM
		});
	},
	cancelItem: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.CANCEL_ITEM
		});
	},
	extendItem: function(itemId){
		console.log('AppActions.js');
		console.log(itemId);
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EXTEND_ITEM,
			itemId: itemId
		});
	},
	saveItem: function(item){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_ITEM,
			item: item
		});
	},
	removeItem: function(itemId){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_ITEM,
			itemId: itemId
		});
	},
	editItem: function(itemId){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_ITEM,
			itemId: itemId
		});
	},
	receiveItem: function(item){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_ITEM,
			item: item
		});
	}
};
module.exports = AppActions;