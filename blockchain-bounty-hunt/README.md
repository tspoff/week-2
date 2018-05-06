# Blockchain Bounty Hunter

The first exercise for Week 2 starts us down the path of blockchain exploration. 

In this exercise, you will write a program that will pull in a series of blocks from the Bitcoin blockchain confirmed. You will then parse the transactions in those blocks to see if they meet a certain criteria. If they do, you will print or log that transaction. Within that transaction will be a message.

## Blockchain Data API

To save resources, we'll use a third-party API to make requests. [Here is the API documentation for Blockchain.info's API](https://blockchain.info/api/blockchain_api) and below are the calls you'll use:

### Single Block

https://blockchain.info/rawblock/$block_hash 
You can also request the block to return in binary form (Hex encoded) using ?format=hex 

### Single Transaction

https://blockchain.info/rawtx/$tx_hash 
You can also request the transaction to return in binary form (Hex encoded) using ?format=hex 


## Parsing

The transaction has a `txid` that ends with the six characters `04dfa3`. It was mined sometime between May 1st and May 5th, 2018.


Happy hunting!