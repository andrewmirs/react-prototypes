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

    // sortContacts(){

    // }

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
                <div className="col-12">
                    <div className="offset-6 col-6 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Search</span>
                        </div>
                            <input className="form-control" type="text"
                                value={this.state.search}
                                onChange={this.updateSearch} />
                    </div>
                </div>
                <div className="sortbtn btn-group offset-8" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" className="btn btn-secondary">A-Z</button>
                    <button type="button" className="btn btn-secondary">Z-A</button>

                    <div className="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort By
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a className="dropdown-item" href="#">First Name</a>
                            <a className="dropdown-item" href="#">Last Name</a>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">{list}</div>
                </div>
            </div>
        )
    }
}

export default ContactList;

