import contributions from "../src/combineGitContributions";
import "bootstrap";
import _ from "lodash";
import moment from "moment";

const getContributions = async () => {
  const githubUrl1 = "https://github.com/FraserTooth";
  const githubUrl2 = "https://github.com/mt-ftooth";

  const corsURL = "https://cors-anywhere.herokuapp.com/";

  const url1 = corsURL + githubUrl1;
  const url2 = corsURL + githubUrl2;

  const allContributions = await contributions([url1, url2]);

  //Combine the histories
  const combined = [];
  for (let i = 0; i < allContributions[0].length; i++) {
    const repo1Element = allContributions[0][i];
    const repo2Element = allContributions[1][i];

    const date = new Date(repo1Element.date);

    combined.push({
      date,
      count: parseInt(repo1Element.count) + parseInt(repo2Element.count),
      dayOfWeek: date.getDay(),
    });
  }
  console.log(combined);

  //Build a Github-esque graph
  const graph = document.getElementById("graph");

  combined.forEach((item) => {
    //Create Graph Element
    const graphElement = document.createElement("div");
    graphElement.dataset.date = item.date;
    graphElement.dataset.count = item.count;
    graphElement.style.color = "green";
    graphElement.className = "graphElement";

    //Sort Into Rows
    graph.children[item.dayOfWeek].appendChild(graphElement);
  });
};

getContributions();
