import web3  from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(CampaignFactory.abi, '0x1Ca6185b196D74c72dF6325650cE8BFC77188738');

export default factory;