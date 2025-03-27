import BlockingComponent from "../../Components/BlockingComponent";
import NormalComponent from "../../Components/NormalComponent";
import { Suspense } from "react";

// Main Page Component
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Streaming with Suspense vs Normal Rendering
        </h1>

        {/* Blocking Component with Suspense */}
        {/* <Suspense
          fallback={
            <p className="text-blue-600 text-center font-medium py-4">
              Loading blocking component...
            </p>
          }
        >
        </Suspense> */}

        <BlockingComponent />

        {/* Normal Component */}
        <NormalComponent />
      </div>
    </div>
  );
}
