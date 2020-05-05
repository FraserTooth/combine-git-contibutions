const githubScraper = require("./githubScraper");

const getAllContributions = async (urlsArray) => {
  if (urlsArray === undefined) return undefined;
  if (!Array.isArray(urlsArray)) {
    const url = urlsArray;
    if (url.match("github.com")) {
      return await githubScraper.getContributions(url);
    }
  }
  try {
    const results = urlsArray.map(async (url) => {
      if (url.match("github.com")) {
        return await githubScraper.getContributions(url);
      } else if (url.match("gitlab.com")) {
        return; //Will write the gitlab integration at some point
      }
    });
    return Promise.all(results).then((results) => {
      return results;
    });
  } catch (error) {
    throw Error(error);
  }
};

module.exports = getAllContributions;
