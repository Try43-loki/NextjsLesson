function NormalComponent() {
  return (
    <div className="bg-white rounded-lg shadow-md border border-green-300 p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Normal Component
      </h2>
      <p className="text-gray-600">
        This content loads instantly without any delay or fetching.
      </p>
    </div>
  );
}

export default NormalComponent;
