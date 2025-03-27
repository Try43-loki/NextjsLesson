async function BlockingComponent() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await delay(5000); // 2-second delay
  const post = await res.json();

  return (
    <div className="bg-white rounded-lg shadow-md border border-red-300 p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Blocking Component
      </h2>
      <h3 className="text-xl font-medium text-gray-700 mb-2">{post.title}</h3>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}

export default BlockingComponent;
