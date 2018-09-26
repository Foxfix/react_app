import React, {PureComponent} from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
            {id: 'asdf1', name: 'Maxim', age: 12},
            {id: 'asdf2', name: 'Olga', age: 32},
            {id: 'asdf3', name: 'Dima', age: 33}
        ],
        showPersons: false,
        toggleClicked: 0
        };
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    //  shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(e) {
        console.log('[UPDATE App.js] Inside componentDidUpdate');
    }

    // state = {
    //     persons: [
    //         {id: 'asdf1', name: 'Maxim', age: 12},
    //         {id: 'asdf2', name: 'Olga', age: 32},
    //         {id: 'asdf3', name: 'Dima', age: 33}
    //     ],
    //     showPersons: false
    // };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( (prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: this.state.toggleClicked +1
            }
        });
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons})
    };

    render() {
        console.log('[App.js] Inside render()');
        let persons = null;
        if (this.state.showPersons)  {
            persons = (
                <div>
                   <Persons
                   persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler}/>
                </div>
            );
        }

        return (
            <Aux>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                appTitle={this.props.title}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonHandler}/>
                {persons}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
