import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <h2>Add New Animal</h2>
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={this.props.name} onChange={this.props.handleChange} required/><br />
                    <label htmlFor="species">Species: </label>
                    <input type="text" id="species" value={this.props.species} onChange={this.props.handleChange} required/><br />
                    <label htmlFor="breed">Breed: </label>
                    <input type="text" id="breed" value={this.props.breed} onChange={this.props.handleChange} required/><br />
                    <label htmlFor="sex">Sex:</label>
                    <select id="sex" name="sex" onChange={this.props.handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br/>
                    <label htmlFor="image">Image: </label>
                    <input type="text" id="image" value={this.props.image} onChange={this.props.handleChange} required/><br />
                    <label htmlFor="age">Age: </label>
                    <input type="number" id="age" value={this.props.age} onChange={this.props.handleChange} required/><br />
                    <label htmlFor="adopted">Adopted: </label>
                    <input type="checkbox" id="adopted" checked={this.props.adopted} onChange={this.props.handleCheck} required/><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;

Form.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    breed: PropTypes.string,
    sex: PropTypes.string,
    image: PropTypes.string,
    age: PropTypes.number,
    adopted: PropTypes.bool
}
