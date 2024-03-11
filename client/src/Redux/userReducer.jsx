import axios from "axios";
const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      axios.post("http://localhost:4000/users", action.payload).then((res) => {
        console.log(res);
      });
      return [...state, action.payload];
    case "DELETE_USER":
      return state;
    default:
      return state;
  }
};

export default userReducer;
