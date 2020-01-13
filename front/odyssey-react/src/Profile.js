import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                email: "homer.simpson@wildcodeschool.fr",
                name: "Homer",
                lastname: "Simpson"
            }
        }
    }


    render() {
        return (
            <div>
                <List>
                    <ListItem>
                        <ListItemText primary="email" secondary="my email" />
                    </ListItem>
                </List>
                <button>
                    <Link to='/signin'>Sign Out</Link>
                </button>
            </div>
        )
    }

}

export default Profile;