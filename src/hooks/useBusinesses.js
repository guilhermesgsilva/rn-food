import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/businesses/search", {
        params: { term: searchTerm, location: "san jose", limit: 50 },
      });
      setBusinesses(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong, try again later.");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return { searchApi, businesses, errorMessage };
};
