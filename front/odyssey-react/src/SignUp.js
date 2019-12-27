import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            passwordbis: '',
            flash: ""
        }
        this.updateDataField = this.updateDataField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateDataField = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        fetch("/auth/signup",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ "flash": res.flash }),
                err => this.setState({ "flash": err.flash })
            );

        e.preventDefault();
    }




    render() {
        const { name, lastname, email, password, passwordbis } = this.state;

        return (
            <div className="Form">
                <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-data">
                        <label>Your Name:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.updateDataField}
                            value={name}
                        />
                    </div>
                    <div className="form-data">
                        <label>Your lastname:</label>
                        <input
                            type="text"
                            name="lastname"
                            onChange={this.updateDataField}
                            value={lastname}
                        />
                    </div>
                    <div className="form-data">
                        <label>Your Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={this.updateDataField}
                            value={email}
                        />
                    </div>
                    <div className="form-data">
                        <label>Your Password:</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.updateDataField}
                            value={password}
                        />
                    </div>
                    <div className="form-data">
                        <label>Repeat Your Password:</label>
                        <input
                            type="password"
                            name="passwordbis"
                            onChange={this.updateDataField}
                            value={passwordbis}
                        />
                    </div>
                    <div className="form-data">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;