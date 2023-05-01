import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-[#F9F9FF] pt-4 pb-14 text-3xl text-center font-semibold relative">
        Blog
        <div className="absolute bottom-0">
          <img
            className="w-24 md:w-36"
            src="/images/All Images/Vector.png"
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="pb-4">
          <h3 className="text-2xl font-semibold pb-2">
            When do you use context api in react?
          </h3>
          <p>
            Context is primarily used when some data needs to be accessible
            child by many components at different nesting levels
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-2xl font-semibold pb-2">
            what is custom hook in react?
          </h3>
          <p>
            Custom hooks are eusable functions that a React JS. When you have
            component logic that needs to be used by multiple components, we can
            extract that logic to a custom Hook. Custom Hooks start with "use".
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-2xl font-semibold pb-2">
            what is useRef in react?
          </h3>
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-2xl font-semibold pb-2">
            what is useMemo in react?
          </h3>
          <p>
            During initial rendering, useMemo(compute, dependencies) invokes
            compute , memoizes the calculation result, and returns it to the
            component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
