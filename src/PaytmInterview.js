/*
 * Complete the 'getUsernames' function below.
 * It should call https://jsonmock.hackerrank.com/api/article_users?page=<pageNumber> in a paginated manner
 * It should return all users where submission_count is greater than > the provided threshold
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER threshold as parameter.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/article_users?page=<pageNumber>
 */

// pre provided code
// functiongetUsernames(threshold) {
// }
const axios = require("axios");
async function getUsernames(threshold) {
  // putting pre-requisite
  let url = "https://jsonmock.hackerrank.com/api/article_users";
  let finalData = [];
  try {
    // with axios data we get the response data in data
    let page = await axios.get(url);
    page = page.data.total_pages;
    for (let i = 0; i < page; i++) {
      let pageRequestData = await axios.get(`${url}?page=${i + 1}`);
      pageRequestData = pageRequestData.data.data;
      console.log(`  |>_ Length of call ${i + 1} - ${pageRequestData.length}`);
      finalData.push(
        pageRequestData.filter(
          (element) => element.submission_count > threshold
        )
      );
    }
    console.log(finalData.flat(Infinity).length);
  } catch (error) {
    console.error(error);
    console.log(`Error in getUsernames -------->`, error);
  }
}

getUsernames(10);
