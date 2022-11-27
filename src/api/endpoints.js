
const Data = require("./sampleData.json");

const RemoteData = async()=>
{
    return await fetch("http://localhost:8080/api/accounts");
}

export { Data, RemoteData }