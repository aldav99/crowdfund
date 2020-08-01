import React from 'react';
export class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            question: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleQuestionChange(event) {
        this.setState({ question: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            question: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field label='Name' value={this.state.name} onChange={this.handleNameChange} />
                <Field label='Email' value={this.state.email} onChange={this.handleEmailChange} />
                <Field label='Question' value={this.state.question} onChange={this.handleQuestionChange} />

                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

class Field extends React.Component {
    render() {
        return (
            <label>
                {this.props.label}:
                <input type="text" value={this.props.value} onChange={this.props.onChange} placeholder={this.props.label} />
            </label>
        );
    }
}
