import React, {Component} from 'react';
import propTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
              this.inputElement.focus();
        }
    }
    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm a person {this.props.name}! I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => {this.inputElement = inp}}
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    change: propTypes.func
};
export default withClass(Person, classes.Person);
