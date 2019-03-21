const { getAll, searchPhrase, filter } = require('../dist/index');

getAll().then((response) => {
    console.log(JSON.parse(response));
});

searchPhrase("new_york", 2).then((response) => {
    console.log(JSON.parse(response));
});

filter(["new_york"], [], [], ["micro"]).then((response) => {
    console.log(JSON.parse(response));
});
