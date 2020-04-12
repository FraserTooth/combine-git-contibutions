const githubScraper = require("./githubScraper");

const getAllContributions = (urlsArray) => {
  urlsArray.map((url) => {
    if (url.match("github.com")) {
      return githubScraper.getContributions(url);
    } else if (url.match("gitlab.com")) {
      return; //Will write the gitlab integration at some point
    }
  });
};

module.exports = getAllContributions;
