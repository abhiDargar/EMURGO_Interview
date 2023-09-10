import { sendGetRequest } from "../utilities/http-request.utility.js";
import 'dotenv/config';
const url= process.env.G_NEWS_URL; 
const apiKey = process.env.G_NEWS_API_KEY;

async function getArticles(req, res) {
  let gNewsAPIURL = url + 'top-headlines?';
  let responseObj ={}; 
  let maxLimit =10;
  let searchQuery = 'None'; 
    if(req.query.limit && req.query.limit >= 1 && req.query.limit <= 10 ){
        maxLimit = req.query.limit;
    }
    if(req.query.searchQuery ){
      searchQuery = req.query.searchQuery;
      gNewsAPIURL = url + 'search?';
   }
    let queryParam = {
        'category': 'general',
        'lang':'en',
        'max' :maxLimit,
        'q' : searchQuery,
        'apikey' : apiKey
    }
    try{
        const response = await sendGetRequest(
          gNewsAPIURL,
          null,
          null,
          queryParam,
        );
        if (response.data.totalArticles > 1) {
            responseObj.status = 200; 
            responseObj.data = response.data.articles; 
        }
      } catch (error) {
        responseObj.status = 400; 
        responseObj.data = {
            message: "error in G News Calling API"
        }
        console.log("error in G News Calling API");
        responseObj.data = error;
      }
      return res.send(responseObj); 
}

export const articleController = {
    getArticles,
  };
