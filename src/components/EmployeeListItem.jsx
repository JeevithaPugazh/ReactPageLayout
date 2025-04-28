import "../styles/App.css";
function EmployeeListItem() {
  return (
    <div className="employeeListItem">
      <img
        src="/female2.jpg"
        alt="Women in professional headshot"
      />
      <div className="employee-details">
        <div style={{marginBottom: 5}}>Julie Taylor</div>
        <div>President and CEO</div>
      </div>
    </div>
  );
}

export default EmployeeListItem;
