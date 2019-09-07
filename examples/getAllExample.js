const { getAll } = require("../dist/index");

/*
* Execute simple fetch for all breweries without any filters
*/
getAll().then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});