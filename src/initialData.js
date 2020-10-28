const initData = {
  employees: JSON.parse(localStorage.getItem("employeeDetails")) || [],
};

export default initData;
