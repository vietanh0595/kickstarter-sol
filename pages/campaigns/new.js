import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        const accounts = await web3.eth.getAccounts();
        event.preventDefault();
        if (!accounts || !accounts[0]) {
            window.alert('please connect to your wallet');
        }
        else {
            this.setState({ loading: true, errorMessage: '' })
            try {

                await factory.methods.createCampaign(this.state.minimumContribution).send({
                    from: accounts[0]
                    // no need specify gas amount, metamask will take care of this

                })
                this.setState({ loading: false });
                Router.pushRoute('/');

            } catch (err) {
                this.setState({ errorMessage: err.message, loading: false });
            }
        }
    }
    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={(event) =>
                                this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>
                    <Message error header='Oops' content={this.state.errorMessage}></Message>
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew;