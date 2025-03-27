const MusicTableComponent = ({ songs }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Genre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {songs?.map((song, index) => (
            <tr
              key={song.id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900">
                  {index + 1}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                  {song.title}
                </div>
              </td>
              <td className="px-6 py-4 w-48">
                <div className="flex justify-center">
                  <span className="px-3 py-1 text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800 truncate w-32 text-center">
                    {song.genres}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-700 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                  //    onClick={() => {}}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {(!songs || songs.length === 0) && (
            <tr>
              <td
                colSpan="4"
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                No songs available
              </td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-700 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200">
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    //</div>
  );
};

export default MusicTableComponent;
