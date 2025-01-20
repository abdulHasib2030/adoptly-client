import React from 'react';
import CountUp from "react-countup";

const CountUp = () => {
    const stats = [
        { icon: "🐕", value: 14, label: "Professionals" },
        { icon: "🏠", value: 100, label: "Adopted Pets" },
        { icon: "🏅", value: 12, label: "Awards" },
        { icon: "👨‍👩‍👧", value: 1200, label: "Clients" },
      ];
    
      return (
        <div
          className="bg-cover bg-center py-10 border-2"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/JBdgwKq/counterbg.jpg')",
          }}
        >
          <div className=" mx-auto flex justify-center gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white bg-opacity-70 rounded-lg p-4 shadow-lg"
              >
                <div className="text-blue-600 text-4xl mb-2">{stat.icon}</div>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  className="text-3xl font-bold text-gray-800"
                />
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default CountUp;