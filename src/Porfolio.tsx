import React from 'react';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { title: "Start with a draft", description: "I came up with the idea, prototype, and initial mvp shipped into the codebase of this AI powered Figma Slides feature! Check it out at: https://www.figma.com/slides/", video: "/assets/figma_speaker_notes.mp4" },
    { title: "Note Timelines", description: "I made a website that lets you turn a business plan into a structured notion timeline! Check it out at: https://notetimelines.com/", image: "/assets/NoteTimelines.png" },
    { title: "Quick Fit", description: "I made a website with my friend that lets you see how you look in different outfits! Check it out at: https://quick-fit.ai/", image: "/assets/QuickFit.png" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4 pt-2">Portfolio</h2>
      <div className="grid grid-cols-2 gap-3">
        {portfolioItems.map((item, index) => (
          <div key={index}>
            <div className="card-body p-3 flex flex-col justify-between">
              <div className="flex-1 bg-offWhite rounded-md flex items-center justify-center border border-base-300 overflow-hidden">
                {item.video ? (
                  <video
                    className="w-1/2"
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
                ) : (
                  <span>Video/Image Area</span>
                )}
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
