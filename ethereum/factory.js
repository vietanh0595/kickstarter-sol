import web3  from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(CampaignFactory.abi, '0x830555fB3373Db967FB64a1F1fB087a142262603');

export default factory;