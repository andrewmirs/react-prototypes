import React from 'react';

export default props => {
    const {firstName, lastName, phone, email, address} = props.contact;
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">
                {lastName} <span class="glyphicon glyphicon-envelope"></span>
                </div>
                <div className="card-block">
                    <h4 className="card-title">{firstName} {lastName}</h4>
                    <div className="card-text">
                        <p><b>Phone:</b> {phone}</p>
                        <p><b>Email:</b> {email}</p>
                    </div>
                    <hr />
                    <div className="card-text">
                        <p><b>Address:</b></p>
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} {address.zip}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}