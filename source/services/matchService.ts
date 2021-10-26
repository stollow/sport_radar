const fetch = require("node-fetch")

let data:JSON
async function requestMatches(id:number):Promise<JSON>{
    await fetch(`https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/${id}/2021`)
    .then((res: { json: () => JSON }) => res.json())
    .then((json: JSON) => data = json);
    return data
};

export default { requestMatches };