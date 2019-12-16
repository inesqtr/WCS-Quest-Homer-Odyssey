import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.updateEmailField = this.updateEmailField.bind(this);
    }

    updateEmailField(e) {
        this.setState({
            email: e.target.value,
        });
    }




    render() {
        const { email } = this.state;

        return (
            <div>
                <h1>{email ? email : 'Write your email here'}</h1>
                <input
                    type="email"
                    name="email"
                    onChange={this.updateEmailField}
                    value={email}
                />
            </div>
        )
    }
}

export default SignUp;