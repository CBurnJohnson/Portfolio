import React from 'react';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ''
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action='https://formspree.io/moqljewr'
                method='POST'
                className='contact-form'
            >
                <label>Your Email</label>
                <input type='email' name='email' />
                <label>Subject</label>
                <input type='text' name='subject' />
                <label>Message</label>
                <textarea
                    type='text'
                    name='message'
                    className='contact-message'
                />
                {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Send</button>}
                {status === 'ERROR' && <p>Ooops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: 'SUCCESS' });
            } else {
                this.setState({ status: 'ERROR' });
            }
        };
        xhr.send(data);
    }
}
