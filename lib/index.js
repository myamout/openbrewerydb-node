import { filter } from "./search/search";

// assing in promise
filter(["new_york", "california"], [], [], ["micro"]).then((response) => {
    console.log(JSON.parse(response));
});