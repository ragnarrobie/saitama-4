import React from "react";

function Github() {
  const [data, setdata] = React.useState(null);
  useEffect(() => {
    fetch("https://github.com/ragnarrobie/saitama-4").then((response) =>
      response.json.then((data) => {
        console.log(data);
        setData(data);
      })
    );
  }, []);
  return (
    <div className="text-center bg-gray-700 text-white text-3xl p-4 ">
      Github
    </div>
  );
}

export default Github;
