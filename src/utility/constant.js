export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
     Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/6a77b075-d304-4342-a055-c9e435c98b6f/web/IN-en-20260406-TRIFECTA-perspective_82b47017-148f-45be-8db8-d82a0f936d18_large.jpg";
export const SUPPORT_LANG = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"}];
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

