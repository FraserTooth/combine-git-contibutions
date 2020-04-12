const testWebsite = "https://www.github.com/frasertooth";
const cheerio = require("cheerio");
const axios = require("axios");

const getContributions = async (githubURL) => {
  const data = [];
  const result = await axios(githubURL);
  const $ = await cheerio.load(result.data);
  const days = $(".day");

  days.each((i, element) => {
    const date = element.attribs["data-date"];
    const count = element.attribs["data-count"];
    if (!date) return;
    data.push({
      date,
      count,
    });
  });
  console.log(data);
};

getContributions(testWebsite);
