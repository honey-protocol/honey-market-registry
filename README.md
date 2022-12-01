# Honey Market Registry

To add your market to the offical Honey Finance market registry, open a pull request that adds onto the registry.json file that the front end relies on.

Add an image and point to it in the json registry

## Oracle Philosophy

The preferred model of building out an oracle for Honey's markets involves getting data from multiple sources (MagicEden, Hyperspace) and time weighting the values over a 12 hour time span to smooth the value of NFT collections.

Please try to follow best practices here:
https://docs.switchboard.xyz/feeds/best-practices

## Example structure

Example

```
COLLECTION_NAME: y00ts,
COLLECTION_URL: https://magiceden.io/marketplace/y00ts,
COLLECTION_KEY: "y00t",
VERIFIED_CREATOR: CE3Ue1iv9w6iKpefLW6EE9TSVgUqmLEWZf9wM1ATak7X,
NFT_ORACLE: 4pqMWyt4LnBvRQRdt9YXmZLRh9xSL4qaVuVjJNpGRL71,
MARKET_ID: Cf4QxhvC6N2QTJYiQV4JAZEUfypQzywZdAq1NugEaqQu,
IMG_PATH: /imgs/<name of your file>
```
