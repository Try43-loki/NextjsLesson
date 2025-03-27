import { getAllStudents } from "../../services/students.service";
import React from "react";
import FormAddStudentComponent from "./_components/FormAddStudentComponent";
import TableComponent from "./_components/TableComponent";

const StudentPage = async () => {
  const studentData = await getAllStudents();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
          Student Management
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5">
            <FormAddStudentComponent />
          </div>
          <div className="md:w-3/5">
            <TableComponent studentData={studentData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
