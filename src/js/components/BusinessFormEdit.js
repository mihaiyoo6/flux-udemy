var React = require('react'),
	AppActions = require('../actions/AppActions')
	BusinessStore = require('../stores/BusinessStore')
	Business = require('./Business');

var BusinessFormEdit = React.createClass({
	componentDidMount: function() {
		BusinessStore.getBusiness(this.props.selectedId);
	},
	render: function(){
		console.log(this.props.selected);
		return (
			<div className="well">
				<h3>Edit a Business</h3>
	        	<form onSubmit={this.handleSubmit}>
				  <div className="form-group">
				    <label htmlFor="item.name">Business Name</label>
				    <input type="text" ref="name" className="form-control" value={this.props.selected.name} placeholder="Business Name" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="category">Category</label>
				    <select ref="category" className="form-control" value={this.props.selected.category}>
				    	<option value="0" disabled>Select Category</option>
				    	<option value="Construction">Construction</option>
				    	<option value="Food">Food</option>
				    	<option value="Fashion">Fashion</option>
				    	<option value="Finance">Finance</option>
				    	<option value="Retail">Retail</option>
				    	<option value="Technology">Technology</option>
				    	<option value="Other">Other</option>
				    </select>
				  </div>
				  <div className="form-group">
				    <label htmlFor="street_address">Street Address</label>
				    <input type="text" ref="street" className="form-control" value={this.props.selected.address.street} placeholder="Street Address" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="city">City</label>
				    <input type="text" ref="city" className="form-control" value={this.props.selected.address.city} placeholder="City" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="state">State</label>
				    <input type="text" ref="state" className="form-control" value={this.props.selected.address.state} placeholder="State" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="zipcode">Zipcode</label>
				    <input type="text" ref="zipcode" className="form-control" value={this.props.selected.address.zipcode} placeholder="Zipcode" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="phone">Phone Number</label>
				    <input type="text" ref="phone" className="form-control" value={this.props.selected.phone} placeholder="Phone Number" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="email">Email</label>
				    <input type="email" ref="email" className="form-control" value={this.props.selected.email} placeholder="Email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="description">Description</label>
				    <textarea ref="description" className="form-control" value={this.props.selected.description} placeholder="Description" />
				  </div>
				   
				  <button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = BusinessFormEdit;