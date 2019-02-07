import React from 'react';

class FormHeader extends React.Component {
    render() {
        return(
            <header>
                <h3 className="title">Log in to our site</h3>
                <p className="text">Enter username or password to log on</p>
            </header>
        );
    }
}

export default FormHeader;