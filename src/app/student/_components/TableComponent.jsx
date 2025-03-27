import React from "react";

const TableComponent = ({ studentData }) => {
  return (
    <div className="relative overflow-x-auto shadow-xl sm:rounded-xl bg-white p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Student List</h2>
        <p className="text-sm text-gray-500">Manage and view all students</p>
      </div>

      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th scope="col" className="px-6 py-5 font-semibold text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-5 font-semibold text-gray-900">
              Class
            </th>
            <th scope="col" className="px-6 py-5 font-semibold text-gray-900">
              Hometown
            </th>
            <th scope="col" className="px-6 py-5 font-semibold text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {studentData?.map((student) => (
            <tr
              key={student.id}
              className="group transition-colors hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-200 to-blue-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {student.studentName?.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {student.studentName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                  {student.studentClass}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                {student.hometown}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-blue-600 hover:text-blue-900">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
