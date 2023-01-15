import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import getCampaign from "../ethereum/campaign";
import { Router } from '../routes'; 

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' })
        try {
            const accounts = await web3.eth.getAccounts();
            const campaign = getCampaign(this.props.address)
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            this.setState({ loading: false});
            //use pushRoute will add new browser history
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        } catch (err) {
            this.setState({ errorMessage: err.message, loading: false })
        }
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                        label="ether"
                        labelPosition="right"
                    />
                </Form.Field>
                <Message error header='Oops' content={this.state.errorMessage}></Message>
                <Button loading={this.state.loading} primary>Create!</Button>
            </Form>
        )
    }
}

export default ContributeForm;