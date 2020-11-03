import React from 'react';
import { EmployeeForm } from './employeeForm';
export function EmployeeEditor({
  employee,
  entries,
  endEditing,
  saveCallback,
}) {
  return (
    <EmployeeForm
      entries={entries}
      employee={employee}
      saveCallback={(computedState) => {
        saveCallback(computedState);
        endEditing();
      }}
    />
  );
}
