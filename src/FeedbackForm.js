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
                <label>
                    Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder='Name' />
                </label>
                <label>
                    Email:
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder='Email' />
                </label>
                <label>
                    Question:
            <input type="text" value={this.state.question} onChange={this.handleQuestionChange} placeholder='Question' />
                </label>

                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
