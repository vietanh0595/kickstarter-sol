import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

class CampaignIndex extends Component {
    // run on next server before initialize comp instance
    // implemented by nextjs
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        
        // return as props for comp
        return { campaigns }
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            }
        })

        return <Card.Group items={items} />;
    }

    // not run on SSR
    async componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.renderCampaigns()}
            </div>
            )
    }
}

export default CampaignIndex;