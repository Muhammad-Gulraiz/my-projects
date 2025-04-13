import React from "react";
import { Globe } from "lucide-react";

const Media4 = () => {
  const newsSources = [
    { name: "BBC News", url: "https://www.bbc.com/news" },
    { name: "Al Jazeera", url: "https://www.aljazeera.com" },
    { name: "The New York Times", url: "https://www.nytimes.com" },
    { name: "Reuters", url: "https://www.reuters.com" },
  ];

  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-2">
          <Globe className="text-blue-600 w-6 h-6" />
          NEWS & MEDIA
        </h2>
        <ul className="space-y-4">
          {newsSources.map((news, index) => (
            <li key={index}>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 hover:shadow-md transition duration-200 font-semibold"
              >
                {news.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Media4;
