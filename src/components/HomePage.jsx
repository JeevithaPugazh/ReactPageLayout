import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "../styles/App.css";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
