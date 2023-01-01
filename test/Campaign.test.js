const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory =  require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    // console.log(await web3.eth.getBalance(accounts[0]));

    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ gas: '3000000', from: accounts[0] });

    // console.log(factory);

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];
    campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress)

});

describe('Campaign', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(campaign.options.address);
        assert.ok(factory.options.address);
    });

    it('mark caller as the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(manager, accounts[0])
    });

    it('allows people to contribute', async () => {
        await campaign.methods.contribute().send({
            value: 200,
            from: accounts[1]
        });

        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        
        assert(isContributor)
    });

    it('requires a mimnimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                value: 99,
                from: accounts[1]
            });

            assert(false);
        } catch (err) {
            assert(err)
        }
    });

    it('allows manager to make payment request', async () => {
        await campaign.methods
            .createRequest('Buy batteries', '100', accounts[1])
            .send({
                from:accounts[0],
                gas: '1000000'
            })
        
        const request = await campaign.methods.requests(0).call();

        assert.equal('Buy batteries', request.description);
    });

    it('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });

        await campaign.methods
            .createRequest('Buy batteries', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({
                from:accounts[0],
                gas: '1000000'
            });

        await campaign.methods.approveRequest(0).send({
            from:accounts[0],
            gas: '1000000'
        });

        await campaign.methods.finalizeRequest(0).send({
            from:accounts[0],
            gas: '1000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log(balance);
        assert(balance > 104)
    });
})