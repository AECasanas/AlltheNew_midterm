import React from "react";

const nytapi = "XM3h0oBEcoF4uHGRY29RzIFabyam5SQk";

const Stories = () => {
  const [stories, setStories] = React.useState([]);

  React.useState(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((data) => setStories({ stories: data }));
  });

  return (
    <div className="site-wrap">
      <pre>
        <code>{JSON.stringify(stories, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Stories;

