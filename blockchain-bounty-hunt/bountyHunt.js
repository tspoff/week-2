const axios = require("axios");

const MAGIC_TXID_ENDING = "04dfa3";

async function bountyHunt() {
    const blockDayTimestamps = [1525046625000, 1525133073000, 1525219427000];
    const blockHashes = await getBlocksByDays(blockDayTimestamps);

    const bountyTxs = await findBountyTransactions(blockHashes);
    printBountyTxs(bountyTxs);
}

async function getBlocksByDays(timestamps) {
    let blockHashes = [];

    for (let timestamp of timestamps) {
        try {
            const url = `https://blockchain.info/blocks/${timestamp}?format=json`;
            const response = await axios.get(url);
            const data = response.data;

            for (let block of data.blocks) {
                blockHashes.push(block.hash);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return blockHashes;
}

async function findBountyTransactions(blockHashes) {
    let bountyTxs = [];
    for (let hash of blockHashes) {
        try {
            const url = `https://blockchain.info/rawblock/${hash}`;
            const response = await axios.get(url);
            const block = response.data;
            console.log(`Evaluating block ${hash}`);
            
            for (let tx of block.tx) {
                let lastSix = tx.hash.substr(tx.hash.length - 6);
                if (lastSix === MAGIC_TXID_ENDING) {
                    bountyTxs.push(tx);
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    return bountyTxs;
}

function printBountyTxs(bountyTxs) {
    for (let tx of bountyTxs) {
        console.log(tx);
    }
}

bountyHunt();
