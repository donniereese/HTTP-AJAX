import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';
import { Modal } from 'react-bootstrap';

class AddContact extends Component {
    constructor() {
        super();
        this.state = {
            showForm: false,
            friend: {
                name: '',
                age: 0,
                email: ''
            }
        };
    }

    catchInput(event) {
        event.preventDefault();
        const targetID = event.target.getAttribute('id');
        switch(targetID) {
            case('name'):
                this.setState({name: event.target.value});
            break;
            case('age'):
                if (typeof event.target.value === 'number') this.setState({age: event.target.value});
            break;
            case('email'):
                this.setState({email: event.target.value});
            break;
            default:
                console.log(event.target.id);
        }
    }

    formSubmit(event) {
        event.preventDefault();
        if (this.state.name === '' || this.state.age === '' || this.state.age === 'undefined' || this.state.email === '') {
            console.log('fail');
        } else {
            this.props.addFriend({name: this.state.name, age: this.state.age, email: this.state.email});
            this.setState({name: '', age: 0, email: ''});
        }
    }

    componentWillUpdate(newProps) {
        console.log(newProps);
    }

    render() {
        console.log(this.props.settings.currentContact.index);
        return (
            <form className={'AddContact ' + (this.props.settings.editReady !== null ? 'showForm' : 'hideForm')}
            onSubmit={this.formSubmit.bind(this)}>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name'
                    value={this.props.settings.currentContact.name}
                    placeholder="Name"
                    onChange={this.catchInput.bind(this)} />
                <label htmlFor='age'>Age</label>
                <input id='age' name='age'
                    value={this.props.settings.currentContact.age}
                    placeholder="Age"
                    onChange={this.catchInput.bind(this)} />
                <label htmlFor='email'>Email</label>
                <input id='email' name='email'
                    value={this.props.settings.currentContact.email}
                    placeholder="Email Address"
                    onChange={this.catchInput.bind(this)} />
                <div>
                    <button type='submit'>Add</button>
                    <button type='clear'>Cancel</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        settings: state.settings
    };
};

export default connect(mapStateToProps, { addContact })(AddContact);
