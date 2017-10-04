import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts, removeContact, setEditContact } from '../actions';
import { Panel, PanelGroup, ListGroup, ListGroupItem, Button,  } from 'react-bootstrap';

class ContactsList extends Component {
    constructor() {
        super();
        this.state={

        };
    }

    componentDidMount() {
        this.props.getContacts();
    }

    // OneEightHundredRemoveAFriend(event, friendID) {
    removeContactByID(contactID) {
        // event.preventDefault();
        this.props.removeContact(contactID);
    }

    editContactByID(contactIndex, contactObj) {
        this.props.setEditContact(contactObj, contactIndex);
    }

    render() {
        return (
            <div className='ContactsList'>
                <PanelGroup defaultActiveKey='0' accordion>
                    {this.props.contacts.map((contact, i) => {
                        return (
                            <Panel key={i} header={(<div className='title-container'><span className='title-name'>{contact.name}</span><span className='title-email'>{contact.email}</span></div>)} eventKey={`'${i}'`}>
                                <ListGroup fill>
                                    <ListGroupItem>{`${i+1}`}</ListGroupItem>
                                    <ListGroupItem>{`${contact.age}`}</ListGroupItem>
                                    <ListGroupItem>{`${contact.email}`}</ListGroupItem>
                                    <ListGroupItem>
                                        <Button bsStyle='primary' onClick={this.editContactByID.bind(this, i, contact)}>Edit Contact</Button>
                                        <Button bsStyle='danger' onClick={this.removeContactByID.bind(this, i)}>Remove Contact</Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Panel>
                        );
                    })}
                </PanelGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        settings: state.settings
    };
};

export default connect(mapStateToProps, { getContacts, removeContact, setEditContact })(ContactsList);
