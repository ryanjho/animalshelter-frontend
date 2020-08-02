import React, { Component } from 'react'

class Row extends Component {
    render() {
        const { name, species, breed, sex, image, age, adopted } = this.props.animal;
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{name}</td>
                <td>{species}</td>
                <td>{breed}</td>
                <td>{sex}</td>
                <td>{image}</td>
                <td>{age}</td>
                <td>{adopted}</td>
                <td>Options</td>
            </tr>
                
        )
    }
}

export default Row;
