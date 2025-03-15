import React from "react";

const Home = () => {
  return (
    <div className="container mx-aut px-4 py-8">
      <div className="flex gap-4">
        <div className="w-[60%] rounded-lg">
          <div className="grid grid-cols-4 gap-4">
            <div className="rounded-lg h-32 p-4 relative bg-cover" style={{ backgroundImage: 'url("/src/assets/dashboard/camp-sent-bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h3 className="text-lg font-semibold text-gray-800">Campaign Sent</h3>
            </div>
            <div className="rounded-lg h-32 p-4 relative" style={{ backgroundImage: 'url("/src/assets/dashboard/annual-profit-bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h3 className="text-lg font-semibold text-gray-800">Annual Profit</h3>
            </div>
            <div className="rounded-lg h-32 p-4 relative" style={{ backgroundImage: 'url("/src/assets/dashboard/lead-conversation-bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h3 className="text-lg font-semibold text-gray-800">Lead Conversation</h3>
            </div>
            <div className="rounded-lg h-32 p-4 relative" style={{ backgroundImage: 'url("/src/assets/dashboard/daily-average-income-bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h3 className="text-lg font-semibold text-gray-800">Daily Average Income</h3>
            </div>
          </div>
        </div>
        <div className="w-[40%] bg-gray-100/40 rounded-lg p-4">Right Content (40%)</div>
      </div>
    </div>
  );
};

export default Home;
