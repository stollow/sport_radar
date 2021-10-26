const fetch = require("node-fetch")

let data:JSON
async function requestTournaments():Promise<JSON>{
    await fetch('https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/config_tournaments/1/17')
    .then((res: { json: () => JSON }) => res.json())
    .then((json: JSON) => data = json);
    return data
};

export default { requestTournaments };
