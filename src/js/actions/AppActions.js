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
	}
};
module.exports = AppActions;