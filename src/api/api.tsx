import axios from "axios";
// import { fetchDashboardData } from './api';

// const baseURL = "https://api.example.com";
// const baseURL = "http://4.188.4.132/v1/";
// const baseURL = "";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "http://4.188.4.132/v1/home";

const instance = axios.create({
  // baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiKey = "368f286f442e50f720ef7d8d952add8b";

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(
      "https://indilabs-json.vercel.app/dashboard"
      // `https://smfg-backend-service.site/v1/home/`,
      // {
      //   params: {
      //     api_key: `${apiKey}`,
      //   },
      // }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// export const fetchDashboardNewData = async () => {
//   try {
//     const response = await axios.get(
//       // "https://indilabs-json.vercel.app/dashboard"
//       `https://smfg-backend-service.site/v1/home/`,
//       {
//         params: {
//           api_key: `${apiKey}`,
//         },
//       }
//     );
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

export const GetCityData = async ({
  city,
  bucket,
  activeButton: activeProduct,
}: any) => {
  try {
    const response = await axios.get(
      `https://20.207.121.156:8080/default?city=${city}&bucket=${bucket}&product=${
        activeProduct === "all" ? "home_loan" : activeProduct
      }`

      // `https://indilabs-json.vercel.app/strategy/default?city=${city}&bucket=${bucket}&product=${
      //   activeProduct === "all" ? "home_loan" : activeProduct
      // }`

      // `https://192.46.215.124:8000/default?city=kolkata&product=home_loan&bucket=b469`
      // `https://192.46.215.124:8000/default?city=kolkata&product=home_loan&bucket=b4`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
