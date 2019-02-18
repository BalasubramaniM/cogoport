import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

// API to fetch data.
const API_ROOT = "https://gist.githubusercontent.com/BalasubramaniM/77f168801859f51c7f7b6fb4cbf3d43a/raw";

const responseBody = res => res.body;

const requests = {
    get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Home = {
    getAllPorts: () => requests.get('')
};

export default {
    Home
};
