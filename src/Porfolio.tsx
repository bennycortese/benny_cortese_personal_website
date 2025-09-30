import React from 'react';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { title: "Microsoft", description: "Note Timelines" },
    { title: "Figma", description: "" },
    { title: "Y Combinator", description: "" },
    { title: "Kleiner Perkins", description: "" },
    { title: "Neo", description: "" },
    { title: "Meta", description: "" }
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold text-center mb-4">Portfolio</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 max-w-4xl mx-auto ">
        {portfolioItems.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200 h-32">
            <div className="card-body p-3 flex flex-col justify-between">
              <div className="flex-1 bg-offWhite rounded-md flex items-center justify-center border border-base-300">
                <span className="text-xs text-base-content/50">Video/Image Area</span>
              </div>
              <div className="text-center mt-2">
                <h3 className="text-sm font-medium">{item.title}</h3>
                {item.description && (
                  <p className="text-xs text-base-content/70">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
