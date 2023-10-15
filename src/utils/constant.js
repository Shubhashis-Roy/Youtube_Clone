const Google_Api_Key = "AIzaSyADVcyos0cdviP80Zgcly9uxYWnLizRM-4";

export const OFFSET_LIVE_CHAT = 15;

export const Youtube_Video_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  Google_Api_Key;

export const Youtube_Suggetions_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const maxResults = 10;

export const Youtube_Search_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&" +
  maxResults +
  "&key=" +
  Google_Api_Key +
  "&type=video&q=";
