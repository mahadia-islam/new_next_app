import React, { useEffect, useState } from "react";

const FixLancerContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [searchData, SetSearchData] = useState({});
  const [searchResult, setSearchResult] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({
    email: "aslam@gmail.com",
  });
  const [searchInputValue, SetSearchInputValue] = useState("");
  const [activeItem, setActiveItem] = useState("Overview");

  //   const token = Cookies.get("token");

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const decodedToken = await promisify(jwt.verify)(
  //           token,
  //           process.env.REACT_APP_TOKEN_SECRET
  //         );

  //         // console.log(decodedToken);
  //         setLoggedInUser(decodedToken);
  //       } catch (err) {
  //         console.log(err.message);
  //       }
  //     }

  //     fetchData();
  //   }, [token]);

  // console.log(loggedInUser);

  return (
    <FixLancerContext.Provider
      value={{
        searchData,
        SetSearchData,
        searchResult,
        setSearchResult,
        loggedInUser,
        setLoggedInUser,
        searchInputValue,
        SetSearchInputValue,
        activeItem,
        setActiveItem,
      }}
    >
      {children}
    </FixLancerContext.Provider>
  );
};

export default FixLancerContext;
