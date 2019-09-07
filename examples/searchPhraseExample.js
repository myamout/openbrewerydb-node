const { searchPhrase } = require("../dist/index");

searchPhrase("new_york", 1).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});
