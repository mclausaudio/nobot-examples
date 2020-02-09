const querystring = require("querystring");

// book uses JIRA api, I'm using JSONPlaceholder

// https://jsonplaceholder.typicode.com/posts?userId=1

const apiHost = "https://jsonplaceholder.typicode.com/posts?";

const apiParams = {
	userId: 1
};

const apiUrl = `${apiHost}${querystring.stringify(apiParams)}`;

console.log(apiUrl);
