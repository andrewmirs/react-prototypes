import React, { Component } from 'react';
import ContactCard from './contact_card';
import '../css/contactform.css';

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state={
            search: ''
        }
    }

    updateSearch = (event) => {

        this.setState({
            search: event.target.value.substr(0,20)
        });

    }

    filterContact(contact, term){

        term = term.toLowerCase();

        for (var val in contact) {

            const field = contact[val];

            if(typeof field === 'object'){
                return this.filterContact(field, term);
            }

            if (term === '' || field.toLowerCase().indexOf(term) !== -1){
                return true;
            }
        }
        return false
    }

    render(){
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                return this.filterContact(contact, this.state.search);
            }
        );

        const list = filteredContacts.map(( item, index ) => {
            return (
                <ContactCard key={index} contact={item}/>
            )
        });
        return(
            <div className="col-8">
                <div className="offset-6 col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Search</span>
                    </div>
                        <input className="form-control" type="text"
                            value={this.state.search}
                            onChange={this.updateSearch} />
                </div>
                <div className="col-12">
                    <div className="row">{list}</div>
                </div>
            </div>
        )
    }
}

export default ContactList;

