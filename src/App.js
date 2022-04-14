import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import SelectedBeast from './selectedBeast.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: '',
      imageUrl: '',
      description: ''
    }
  }

  hideModalHandler = () => {
    this.setState({
      showModal: false,
    })
  }

  showModalHandler = (imageUrl, description) => {
    this.setState({
      imageUrl: imageUrl,
      description: description,
      showModal: true
    })
  }

  render() {
    return (
      <div>
        <Header />

        <Main
          showModalHandler={this.showModalHandler}
          data={data} />

        <Footer />

        <SelectedBeast
          showModalHandler={this.showModalHandler}
          hideModalHandler={this.hideModalHandler}
          show={this.state.showModal}
          imageUrl={this.state.imageUrl}
          hide={this.hideModalHandler}
          description={this.state.description} />

      </div>
    )
  }
}

export default App;
