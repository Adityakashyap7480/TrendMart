import "./App.css";
import ShopContextProvider from "./context/ShopContext";
import UserProvider from "./context/UserContext";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <UserProvider>
          <PageRoutes />
        </UserProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
