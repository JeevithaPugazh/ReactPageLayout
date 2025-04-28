import "../styles/App.css";
import HeaderEmployeePage from "./HeaderEmployeePage";
import EmployeeDetail from "./EmployeeDetail";
function EmployeePage() {
  return (
    <div className="employee-page">
      <HeaderEmployeePage />
      <EmployeeDetail />
    </div>
  );
}

export default EmployeePage;
