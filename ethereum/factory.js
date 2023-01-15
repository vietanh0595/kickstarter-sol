import web3  from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(CampaignFactory.abi, '0x093479e84889fB1AC1800FbCA70eEf2F1170DdCE');

export default factory;