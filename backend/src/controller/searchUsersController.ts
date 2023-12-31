import { csvData } from "../../csvData";

const searchUsers = async (keyword: any) => {
  // console.log('kw en contr', keyword)
  console.log('data en search', csvData)
  try {
    const match = await csvData.filter((user) =>
      Object.values(user).find((value: any) =>
        value.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    // console.log('matchea', match)
    if (match.length) {
      return match;
    }
    return "No results found";
  } catch (error: any) {
    return error.message;
  }
};

export default searchUsers;
