const { filter } = require("../dist/index");

filter(["california"], [], [], [], 1).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});
