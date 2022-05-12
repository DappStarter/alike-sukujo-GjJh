require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strong rival punch pull hundred light army gentle'; 
let testAccounts = [
"0xf5ae424d7ee757e8cf564ab0bd5539e3cb95147faa2f426e9e802c0a5ece7fe3",
"0xbcaf16cc0a1dcb11f619fa8057ad0b729ae37e0f08fb929c16940950ad6f85a0",
"0x7c2f2ace10007eccfe5fd14fcc53d3670ced9a6b7dac00f41bf8f78b01c75b58",
"0x4e3e465a8e4beb7aa9732cf46563a722bb057cdab9533f39e9e6e7e9c676d4f6",
"0xd7865a94736b4ad853f7f835dda0ccfbadc5033ba0458cd0b24ded5406f14de9",
"0x856a97efd4f5ee132bdcd6ec08fae240a6a1fc84cc12f7c1cf7a72c3579e77e3",
"0xa94e64b1f284c896d45880cfb13f18057bcf0d134b7610be6dcb333b9d955582",
"0x89b7c48eb342b3212e5fe268fda5aa53383277dc7e325d923830569bfe062978",
"0xab45d9f3668afde9a4801c9fd43bf4bc2d85d10d82ad33fe2c920a6b99d266bb",
"0x6bb2ad8260a362eac12df3b04e41e159aa9adfa744429784e3a4029239a1a6ef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

