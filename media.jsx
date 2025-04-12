import React from "react";

const Media = () => {
  const newsSources = [
    { name: "BBC News", url: "https://www.bbc.com/news" },
    { name: "Al Jazeera", url: "https://www.aljazeera.com" },
    { name: "The New York Times", url: "https://www.nytimes.com" },
    { name: "Reuters", url: "https://www.reuters.com" }
  ];

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">News & Media</h2>
      <ul className="space-y-2">
        {newsSources.map((news, index) => (
          <li key={index}>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {news.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Media;
