var React = require('react'),
	ReactDOM = require('react-dom'),
	App = require('./components/App'),
	StartData = require('./startData'),
	AppAPI = require('./utils/AppAPI');


if(localStorage.getItem('business') == null){
	StartData.init();
}

//Get Items fomr API
AppAPI.getAllItems();

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);