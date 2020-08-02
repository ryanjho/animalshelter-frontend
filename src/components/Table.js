import React, { Component } from 'react';
import Row from './Row';

class Table extends Component {
    render() {
        return (
            <table class="animal-table">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Image</th>
                        <th scope="col">Age</th>
                        <th scope="col">Adopted</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                {this.props.animals.map((animal, index) => {
                    return (
                        <Row animal={animal} index={index} />
                    )
                })}
            </table>
        )
    }
}

export default Table;