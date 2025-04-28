import "../styles/App.css";
import EmployeeContactDetails from "./EmployeeContactDetails";

function EmployeeDetail() {
  return (
    <div className="employeeDetail">
      <div className="employeePage-details">
        <img
          src="/female2.jpg"
          alt="professional women head shot"
        ></img>
        <div className="employee-details">
          <div style={{ marginBottom: 5 }}>
            Julie Taylor
          </div>
          <div>President and CEO</div>
        </div>
      </div>
      <EmployeeContactDetails />
      <EmployeeContactDetails />
      <EmployeeContactDetails />
      <EmployeeContactDetails />
      <EmployeeContactDetails />
      <EmployeeContactDetails />
    </div>
  );
}

export default EmployeeDetail;
