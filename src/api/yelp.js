import axios from "axios";

/* export default axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: { Authorization: `Bearer ${process.env.API_KEY}` },
}); */

export default axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: {
    Authorization:
      "Bearer WpKJeg6kg8HoVJJpBKdxJJx9CyVK1d2w7mO0jR6RxM36vIkz0QxNXSMsxfAbBW8E46idnm7yuPquau2TIEjGOmb2cjA3dR-hWVnHwWQ8XvY9G4d3IiiDW3wJgqzfZHYx",
  },
});
