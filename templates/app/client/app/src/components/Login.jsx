/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var NAV = require('./NavBar.jsx');
var BANNER = require('./Banner.jsx');

var LOGIN  = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();

    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();
    
    var userData = {
      email: email,
      password: password
    };

    $.ajax({
      type: 'POST',
      data: JSON.stringify(userData),
      contentType: 'application/json',
      dataType: 'html',
      url: '/auth/local/',
      success: function(data) {
        window.location.assign('http://localhost:9000')
        console.log('Successfully logged in');
      },
      failure: function() {
        console.log('Failed! OH NOOOO!');
      }
    });
  },

  handleInput: function(e) {
    console.log("at handleInput in Login")
  },
  
  render: function(){
    return (
      <div>
        <div className="container">
          <h1>Login</h1>
            <form className="form-horizontal" role="form" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <label for="inputEmail3" className="control-label" >Email</label>
                <div className="container">
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Email" ref="email" onKeyPress={this.handleInput}/>
                </div>
              </div>
              <div className="form-group">
                <label for="inputPassword3" className="control-label">Password</label>
                <div className="container">
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Password" ref="password" onKeyPress={this.handleInput}/>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox"/> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="control-button">
                  <button type="submit" className="btn btn-default" >Sign in</button>
                </div>
              </div>
            </form>
        </div>
      </div>
      )
  }
})

module.exports = LOGIN;
