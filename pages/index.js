import React, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Component {
    // run on next server before initialize comp instance
    // implemented by nextjs
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        
        // return as props for comp
        return { campaigns }
    }

    // not run on SSR
    async componentDidMount() {

    }

    render() {
        return <div>{this.props.campaigns[0]}</div>
    }
}

export default CampaignIndex;