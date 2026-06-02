import { useState } from 'react';
import Calendar from 'react-calendar';

import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex min-h-screen bg-[#FCFCFA] text-[#1F2937]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <h1 className="text-5xl font-bold mb-8">
          Expense Calendar
        </h1>

        <div className="bg-white rounded-3xl p-6 border border-[#E5E7EB] shadow-sm">
          <Calendar
            onChange={setDate}
            value={date}
          />
        </div>
      </main>
    </div>
  );
}