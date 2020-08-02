import React, { Component } from 'react';
import './App.css';
import animalsService from './services/animalsService';
import Form from './components/Form';
import Table from './components/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      species: '',
      breed: '',
      sex: 'Male',
      image: '',
      age: 0,
      adopted: false,
      animals: []
    }
  }
  
  getAllAnimals = async () => {
    const animals = await animalsService.getAll();
    this.setState({
      animals: animals
    });
    console.log(this.state.animals);
  }

  handleChange = event => {
    console.log(typeof event.target.value);
    this.setState({
      [ event.target.id ]: event.target.value
    })
  }

  handleCheck = () => {
    this.setState({
      adopted: !this.state.adopted
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const newAnimal = {
      name: this.state.name,
      species: this.state.species,
      breed: this.state.breed,
      sex: this.state.sex,
      image: this.state.image,
      age: parseInt(this.state.age),
      adopted: this.state.adopted,
    };
    const newAnimalAdded = await animalsService.create(newAnimal);
    console.log(newAnimalAdded);
    this.setState({
      name: '',
      species: '',
      breed: '',
      sex: 'Male',
      image: '',
      age: 0,
      adopted: false,
      animals: [newAnimalAdded, ...this.state.animals]
    })
  }

  componentDidMount() {
    return this.getAllAnimals();
  }

  render() {
    return (
      <div class="container">
        <h1>Animal Shelter</h1>
        <Form 
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          species={this.state.species}
          breed={this.state.breed}
          sex={this.state.sex}
          image={this.state.image}
          age={this.state.age}
          adopted={this.state.adopted}
        />
        <Table 
          animals={this.state.animals}
        />
      </div>
    )
  }
}

export default App;