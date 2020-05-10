const githubScraper = require("./githubScraper");

const combineContributions = async (results) => {
  //Combine the histories
  let highestCommit = 0;
  const combined = [];
  for (let i = 0; i < results[0].length; i++) {
    const repoElements = results.map((repo) => repo[i]);

    const date = new Date(repoElements[0].date);

    const count = repoElements.reduce((element) => element.count);
    highestCommit = Math.max(count, highestCommit);

    combined.push({
      date,
      count,
      dayOfWeek: date.getDay(),
    });
  }
  return combined;
};

const getAllContributions = async (urlsArray) => {
  if (urlsArray === undefined) return undefined;
  if (!Array.isArray(urlsArray)) {
    const url = urlsArray;
    if (url.match("github.com")) {
      return await githubScraper.getContributions(url);
    }
  }
  try {
    if (urlsArray.length === 0) return [];
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
