# openbrewerydb-node
[![Build Status](https://travis-ci.org/myamout/openbrewerydb-node.svg?branch=master)](https://travis-ci.org/myamout/openbrewerydb-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Node.js wrapper for Open Brewery DB API

#### Installation
```
npm i openbrewerydb-node
```

#### Importing
```javascript
import { getAll } from "openbrewerydb-node";
```
Or
```javascript
const { getAll } = require("openbrewerydb-node");
```

#### Usage
The data fetching functions in this library return a promise.
This means you can either use regular JavaScript promises or
take advantage of async/await syntax. The promise returns a json string
consisting of an array of json objects.
```javascript
getAll().then((response) => console.log(response)).catch((err) => console.log(err));
```
Or
```javascript
try {
    const data = await getAll();
    console.log(data);
} catch (err) {
    console.log(err);
}
```

#### Functions
*Note that the API paginates requests. Therefore each function takes a page number as a parameter with a default value of 1*

- getAll(): Return all breweries
    Ex: getAll(); getAll(2);

- searchPhrase(): Searches database using particular phrase
    Ex: searchPhrase("new_york");

- filter(): Filters database by creating complex queries
    Ex: filter(["california", "arizona"], [], ["patio"], ["micro"], 2);

*Functions are documented inside of the lib folder as well*

#### Fetching multiple pages
```javascript
const getAllCABreweries = async () => {
    const breweries = [];
    let page = 1;
    for (;;) {
        const data = await filter(["california"], [], [], [], page);
        const dataJson = JSON.parse(data);
        if (!dataJson.length) {
            break;
        } else {
            breweries.push(dataJson);
        }
    }
    const flattenedBreweries = breweries.flat();
};
```
