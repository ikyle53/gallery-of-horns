import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import SelectedBeast from './selectedBeast.js';
import Form from 'react-bootstrap/Form';

class App extends React.Component {

  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: '',
      imageUrl: '',
      description: '',
      sort: '',
      horns: '',
      filteredData: data
    }

  }

  //Hide Modal
  hideModalHandler = () => {
    this.setState({
      showModal: false,
    })
  }

  //Show Modal
  showModalHandler = (imageUrl, description) => {
    this.setState({
      imageUrl: imageUrl,
      description: description,
      showModal: true
    })
  }

  //Mapping handler
  handleSelect = (event) => {
    let horns = parseInt(event.target.value)
    //Set state
    this.setState({
      horns: horns,
      sort: event.target.value
    })
    //Filter data
    if (horns) {
      let filteredHornData = data.filter(item => item.horns === horns)
      this.setState({ filteredData: filteredHornData });
    } else {
      this.setState({ filteredData: data })
    }
  }

  render() {
    return (
      <div>
        <Header />

        <div className="form">
        <Form style={{textAlign: 'center', margin: '30px'}}>
          <Form.Label style={{fontSize: '1.3rem', fontFamily: 'Monaco'}}> Sort by # of Horns:
            <Form.Select name='selected' onChange={this.handleSelect}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
              <option value=''>All</option>
            </Form.Select>
          </Form.Label>
        </Form>
        </div>

        <Main
          showModalHandler={this.showModalHandler}
          filteredData={this.state.filteredData} 
          
          />

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
