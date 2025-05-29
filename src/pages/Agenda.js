// src/pages/Agenda.js
import React from 'react';

const agenda = [
  {
    day: 'Friday, September 12',
    events: [
      { time: '3:00 PM', title: 'Check-In & Welcome Reception' },
      { time: '6:00 PM', title: 'Welcome Dinner at Halcyon Rooftop' },
    ],
  },
  {
    day: 'Saturday, September 13',
    events: [
      { time: '8:00 AM', title: 'Breakfast & Networking' },
      { time: '9:00 AM', title: 'Opening Remarks by Steve Russell' },
      { time: '9:30 AM', title: 'Strategic Vision Presentation' },
      { time: '11:00 AM', title: 'Panel: Growth Stories from the Portfolio' },
      { time: '12:30 PM', title: 'Lunch Break' },
      { time: '2:00 PM', title: 'Breakout Workshops (Finance, Ops, HR)' },
      { time: '4:00 PM', title: 'Fireside Chat: Innovation in Private Equity' },
      { time: '7:00 PM', title: 'Group Dinner at Matsuhisa Denver' },
    ],
  },
  {
    day: 'Sunday, September 14',
    events: [
      { time: '9:00 AM', title: 'Breakfast Roundtables by Role' },
      { time: '10:30 AM', title: 'Interactive Session: Building Culture Remotely' },
      { time: '12:00 PM', title: 'Lunch at The Jacquard Hotel' },
      { time: '2:00 PM', title: 'Free Time / Optional Activities' },
    ],
  },
  {
    day: 'Monday, September 15',
    events: [
      { time: '8:00 AM', title: 'Closing Brunch & Takeaways' },
      { time: '10:00 AM', title: 'Departures' },
    ],
  },
];

export default function Agenda() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-highviewBlue mb-12">
        Summit Agenda
      </h2>

      <img
        src={`${process.env.PUBLIC_URL}/images/event-crowd.jpg`}
        alt="Summit attendees networking"
        className="rounded-xl shadow-lg mb-10 mx-auto"
      />

      {agenda.map((dayItem, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{dayItem.day}</h3>
          <ul className="space-y-2">
            {dayItem.events.map((event, idx) => (
              <li key={idx} className="text-gray-700">
                <span className="font-semibold">{event.time}</span> — {event.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}