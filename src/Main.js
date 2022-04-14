import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasties = this.props.data.map((beasts, idx) => {
      return <HornedBeast
        name={beasts.name}
        imageUrl={beasts.image_url}
        title={beasts.title}
        description={beasts.description}
        keyword={beasts.keyword}
        key={idx}
        horns={beasts.horns}
        showModalHandler={this.props.showModalHandler}
      />
    })

    return (
      <>
        <main>
          {beasties}
        </main>
      </>
    )
  }
};

export default Main;