const cheerio = require("cheerio");
const axios = require("axios");

const getContributions = async (githubURL) => {
  const data = [];
  const result = await axios(githubURL);
  const $ = await cheerio.load(result.data);
  const days = $(".day");

  days.each((i, element) => {
    const date = Date.parse(element.attribs["data-date"]);
    const count = element.attribs["data-count"];
    if (!date) return;
    data.push({
      date,
      count,
    });
  });

  return data;
};

module.exports = {
  getContributions,
};
