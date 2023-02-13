// Tuples are a special type exclusive to TS
// They are arrays of fixed lenghts and ordered with specific types

const color:[number,number,number]=[255,0,155]

type HTTPresponse=[number,string]

const goodRes: HTTPresponse= [200,"OK"] //order does matter

const responses:HTTPresponse[]=[[200,"OK"],[400,"Not found"]]