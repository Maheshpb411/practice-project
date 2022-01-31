import React from 'react';

export default class Student extends React.Component{
    render()
    {
        return(
            <div style={{backgroundColor:"skyblue"}}>
            <h1>Hello {this.props.name}</h1>
            <h3> {this.props.email}</h3>
        </div>
        );
    }
}