"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pulsechain = void 0;
const chain_js_1 = require("../../utils/chain.js");
exports.pulsechain = (0, chain_js_1.defineChain)({
    id: 369,
    network: 'pulsechain',
    name: 'PulseChain',
    nativeCurrency: { name: 'Pulse', symbol: 'PLS', decimals: 18 },
    testnet: false,
    rpcUrls: {
        default: {
            http: ['https://rpc.pulsechain.com'],
            webSocket: ['wss://ws.pulsechain.com'],
        },
        public: {
            http: ['https://rpc.pulsechain.com'],
            webSocket: ['wss://ws.pulsechain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PulseScan',
            url: 'https://scan.pulsechain.com',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
        },
    },
});
//# sourceMappingURL=pulsechain.js.map