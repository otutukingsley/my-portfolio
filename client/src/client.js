import * as contentful from 'contentful';

let spaceId;
let accessToken;


if(process.env.NODE_ENV === 'production'){
    spaceId = process.env.REACT_APP_SPACE_IDS
    accessToken = process.env.RAECT_APP_ACCESS_TOKENS
}else{
    spaceId = process.env.REACT_APP_SPACE_ID
    accessToken = process.env.REACT_APP_ACCESS_TOKEN
}

export const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken,
})
