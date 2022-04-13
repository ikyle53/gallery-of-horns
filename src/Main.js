import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasties = [];

    data.forEach((beasts, idx) => {
      beasties.push(
        <HornedBeast
        name = {beasts.name}
        imageUrl = {beasts.image_url}
        title = {beasts.title}
        description = {beasts.description}
        keyword = {beasts.keyword}
        key = {idx}
        horns = {beasts.horns} 
        />
      )
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