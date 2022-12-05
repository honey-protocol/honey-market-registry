// open json file and parse to object
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "registry.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

// map over the object and rename the keys
const renamed = data.map((item) => {
  return {
    id: item.MARKET_ID,
    key: item.COLLECTION_KEY,
    name: item.COLLECTION_NAME,
    verifiedCreator: item.VERIFIED_CREATOR,
    nftOracle: item.NFT_ORACLE,
    collectionUrl: item.COLLECTION_URL,
    imgPath: item.IMG_PATH,
    discountedMarket: item.DISCOUNTED_MARKET,
    rate: 0,
    available: 0,
    value: 0,
    allowance: 0,
    positions: [],
    connection: null,
    user: null,
    debt: 0,
    utilizationRate: 0,
  };
});

// write the object to new js file as an exported list
const writePath = path.join(__dirname, "registry.js");
const writeData = `export const registry = ${JSON.stringify(renamed)}`;
fs.writeFileSync(writePath, writeData, "utf8");
