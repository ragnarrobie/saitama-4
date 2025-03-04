import React from "react";

function Github() {
  const [data, setdata] = React.useState(null);
  useEffect(() => {
    fetch("");
  });
  return (
    <div className="text-center bg-gray-700 text-white text-3xl p-4 ">
      Github
    </div>
  );
}

export default Github;
