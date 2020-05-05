import contributions from "../src/combineGitContributions";

console.log("Hello");

const getContributions = async () => {
  const githubUrl1 = "https://github.com/FraserTooth";
  const githubUrl2 = "https://github.com/mt-ftooth";

  const corsURL = "https://cors-anywhere.herokuapp.com/";

  const url1 = corsURL + githubUrl1;
  const url2 = corsURL + githubUrl2;

  const allContributions = await contributions([url1, url2]);
  console.log(allContributions);
};

getContributions();
