require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember million hidden clip bottom gaze'; 
let testAccounts = [
"0xfe2edee6275030ade57a4885216088acaa641e98fb5c0847fea71c77a9ae7346",
"0xbf5ee7b4485e5c1c3ce8c594331f17ef8ec6662655027d8bdf5cd01e7a9f8108",
"0x1c65118213a2d349d72383b8969fff0a1904d81c7842af59661a276be68bf066",
"0xecd91b5a715cbee48991848eb6e3b8fc2d4ebd10697baaade5def65a4f169d53",
"0x4ddaaf0254eea60477d8a622c4b06be027bd7f341db7a60991f8ca24a0ee7fc0",
"0x940ad9557820648bc0871a9b4fc59a4553cb7fd526342248daee482e2732debf",
"0x212231d6e0ec8f9ee1513f15ca38cf3bdf4396a62fdfc15cfd8601426a805211",
"0xaf3857a4ccc92e0d0ea61541ccab0bb0405e5a57a1739ec4d4e60eeda72a4a38",
"0x8e2c06bfe28e34265dd81a23a7ba1f61f25e2991597453e24af528cda71b6c34",
"0xeb22ef3ae428ef12a4d7f9ac0eff0d45478a2fa4cfc1a10e49c7a411975ab34f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


