import React from 'react';

export default function Agenda() {
  const agendaItems = [
    { time: 'Thursday, September 12, 2025', details: [
      { time: '12:00 PM – 5:00 PM', event: 'Registration & Welcome Reception' },
      { time: '5:30 PM – 7:00 PM', event: 'Opening Dinner & Networking' },
    ]},
    { time: 'Friday, September 13, 2025', details: [
      { time: '8:00 AM – 9:00 AM', event: 'Breakfast & Networking' },
      { time: '9:00 AM – 10:30 AM', event: 'Keynote: Market Outlook' },
      { time: '10:45 AM – 12:00 PM', event: 'Panel Discussion: Investment Strategies' },
      { time: '12:00 PM – 1:30 PM', event: 'Lunch' },
      { time: '1:30 PM – 3:00 PM', event: 'Breakout Sessions' },
      { time: '3:15 PM – 4:30 PM', event: 'Workshops' },
      { time: '6:00 PM – 8:00 PM', event: 'Evening Social Event' },
    ]},
    { time: 'Saturday, September 14, 2025', details: [
      { time: '8:00 AM – 9:00 AM', event: 'Breakfast' },
      { time: '9:00 AM – 11:00 AM', event: 'Industry Deep Dive Sessions' },
      { time: '11:15 AM – 12:30 PM', event: 'Roundtable Discussions' },
      { time: '12:30 PM – 2:00 PM', event: 'Lunch' },
      { time: '2:00 PM – 4:00 PM', event: 'Networking Activities & Closing Remarks' },
      { time: '7:00 PM – 10:00 PM', event: 'Gala Dinner & Awards' },
    ]},
    { time: 'Sunday, September 15, 2025', details: [
      { time: '9:00 AM – 12:00 PM', event: 'Optional City Tours & Farewell Brunch' },
    ]},
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12 px-6">
      <h2 className="text-4xl font-bold mb-8">Highview Capital Annual Summit Agenda</h2>
      {agendaItems.map(({ time, details }) => (
        <div key={time} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">{time}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {details.map(({ time, event }) => (
              <li key={time} className="flex justify-between">
                <span className="font-medium">{time}</span>
                <span>{event}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}