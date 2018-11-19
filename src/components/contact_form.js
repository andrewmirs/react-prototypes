import React, { Component } from 'react';
import Field from './field';
import '../css/contactform.css';

class ContactForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                address: {
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                }
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleInputChange(event){
        const{value, name} = event.target;
        const{form, form: { address } }  = this.state;
        

        if(typeof form[name] === 'string'){
            form[name]= value;
        } else if (typeof address[name] === 'string'){
            address[name] = value;
        }
        
        this.setState({
            form: {
                ...form,
                address: {...address}
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.add(this.state.form)
        this.reset();
    }

    reset(){
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                address: {
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                }
            }
        });
    }
    
    render(){
        const {firstName, lastName, phone, email} = this.state.form;
        const {street, city, state, zip} = this.state.form.address;

        return(
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>
                <Field name="street" label="Street" type="text" value={street} onChange={this.handleInputChange}/>
                <Field name="city" label="City" type="text" value={city} onChange={this.handleInputChange}/>
                <Field name="state" label="State" type="text" value={state} onChange={this.handleInputChange}/>
                <Field name="zip" label="Zip" type="number" value={zip} onChange={this.handleInputChange}/>
                <button className="btn btn-outline-info btn-md">Add Contact</button> <button className="btn btn-outline-warning btn-md" type="button" onClick={this.reset}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;