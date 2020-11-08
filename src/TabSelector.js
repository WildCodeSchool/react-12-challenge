import React, { Component } from 'react';

const Home = () => <p>This is the Home component!</p>;
const About = () => <p>This challenge is about tabs!</p>;
const Contact = () => <p>Feel free to contact us!</p>;
const Error = () => <p>Something went <strong>wrong</strong>!</p>;


class TabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 'home'
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  getTabContent() {
    switch(this.state.activeId) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;  
      case 'contact':
        return <Contact />;  
      default:
        return <Error />;
    }
  }

  render() {
    const { activeId } = this.state;
    return (
      <>
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
        this.getTabContent()
      }
    </div>
    </>
    );
  }
}

export default TabSelector;
