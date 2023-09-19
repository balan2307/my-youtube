

export const API_KEY=process.env.REACT_APP_API_KEY
export const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`

export const SEARCH_SUGGESTION_API='https://corsproxy.io/?https://clients1.google.com/complete/search?client=firefox&ds=yt&q='

export const SEARCH_API='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&'