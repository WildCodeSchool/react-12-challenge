import React, { Component } from 'react';

class TabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 'home'
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.displayItem = this.displayItem.bind(this);
  }

  handleChangeTab(event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }
  
  displayItem(id) {
    switch(id) {
     case "home": 
       return "This is the Home component!";
     case "about":
        return "This challenge is about tabs!"
     case "contact":
       return "Feel free to contact us!"
     default:
       return "Something went wrong"; 
   }
  }





  render() {
    const { activeId } = this.state;
    return (
      <div>

      <div className="TabSelector">
        <button
          id="home"
          onClick={this.handleChangeTab}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.handleChangeTab}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.handleChangeTab}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
      <div className="App-content">
      {
        this.displayItem(this.state.activeId)
      }
    </div>
      </div>
    );
  }
}

export default TabSelector;
