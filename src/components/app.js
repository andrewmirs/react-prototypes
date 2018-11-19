import React, { Component } from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from '../data/contacts';
import '../css/contactform.css';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            contacts: contactData
        };

        this.addContact = this.addContact.bind(this);
    }

    addContact(contact){
        this.setState({
            contacts: [contact, ...this.state.contacts]
        });
    }
    
    render(){
        return (
            <div className="container">
                <h1 className="text-center">Address Book</h1>
                <div className="input-group row align-right">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
                    <input type="text" id="myInput" className="col-4 offset-8" onkeyup="myFunction()" placeholder="Search contacts.." />
                </div>
                <div className="row">
                    <div className="col-4">
                        <ContactForm  add={this.addContact}/>
                    </div>
                    <ContactList contacts={this.state.contacts} />
                </div>
            </div>
        )
    }
}

export default App;
