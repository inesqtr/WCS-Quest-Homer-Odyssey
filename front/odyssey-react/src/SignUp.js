import React, { Component } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';

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
                res => this.setState({ "flash": res.flash }),
                err => this.setState({ "flash": err.flash })
            );

        e.preventDefault();
    }

    handleClickSnack = () => {
        this.setState((prevState) => ({
            ...prevState,
            open: true
        }))
    }

    handleCloseSnack = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState((prevState) => ({
            ...prevState,
            open: false
        }))
    }




    render() {
        const { name, lastname, email, password, passwordbis, flash, open } = this.state;

        return (
            <div>
                <h1>Sign Up!</h1>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField required id="standard-required" label="Your Name" type="text" name="name" onChange={this.updateDataField} value={name} />
                    <TextField label="Your Lastname" type="text" name="lastname" onChange={this.updateDataField} value={lastname} />
                    <TextField label="Your Email" type="email" name="email" onChange={this.updateDataField} value={email} />
                    <TextField label="Your Password" type="password" name="password" onChange={this.updateDataField} value={password}
                    />
                    <TextField label="Password Copy" type="password" name="passwordbis" onChange={this.updateDataField} value={passwordbis} />
                    <Button type="submit" variant="contained" color="primary" onClick={this.handleClickSnack}>
                        SUBMIT
                    </Button>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        autoHideDuration={5000}
                        open={open}
                        onClose={this.handleCloseSnack}
                        message={flash}
                    />
                </form>
            </div>
        )
    }
}

export default SignUp;