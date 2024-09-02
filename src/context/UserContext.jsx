import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();
const SS_USER_DATA = "userData";

const sessionUserData = JSON.parse(sessionStorage.getItem(SS_USER_DATA));

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(sessionUserData || {});

  const addUserDataHandler = (data) => setUserData(data);
  const clearUserDataHandler = () => setUserData({});

  useEffect(() => {
    sessionStorage.setItem(SS_USER_DATA, JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider
      value={{ userData, addUserDataHandler, clearUserDataHandler }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
export { UserContext };
