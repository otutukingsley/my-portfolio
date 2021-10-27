import * as contentful from 'contentful';

let spaceId;
let accessToken;


if(process.env.NODE_ENV !== 'production'){
    spaceId = process.env.REACT_APP_SPACE_ID
    accessToken = process.env.REACT_APP_ACCESS_TOKEN
}else{
    spaceId = process.env.SPACE_ID
    accessToken = process.env.ACCESS_TOKEN
}

export const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken,
})