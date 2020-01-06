import React, { Component } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            passwordbis: '',
            flash: "",
            open: false
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
                res => this.setState({ "flash": res.flash, "open":true }),
                err => this.setState({ "flash": err.flash })
            );

        e.preventDefault();
    }


    handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ "open": false })
    }




    render() {
        const { name, lastname, email, password, passwordbis, open } = this.state;

        return (
            <div>
                <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        label="Your Name"
                        type="text"
                        name="name"
                        onChange={this.updateDataField}
                        value={name}
                    />
                    <TextField
                        label="Your Lastname"
                        type="text"
                        name="lastname"
                        onChange={this.updateDataField}
                        value={lastname}
                    />
                    <TextField
                        label="Your Email"
                        type="email"
                        name="email"
                        onChange={this.updateDataField}
                        value={email}
                    />
                    <TextField
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={this.updateDataField}
                        value={password}
                    />
                    <TextField
                        label="Password Copy"
                        type="password"
                        name="passwordbis"
                        onChange={this.updateDataField}
                        value={passwordbis}
                    />
                    <Button variant="contained" color="primary">
                        SUBMIT
                    </Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} color="success">
                            This is a success message!
                        </Alert>
                    </Snackbar>
                </form>
            </div>
        )
    }
}

export default SignUp;