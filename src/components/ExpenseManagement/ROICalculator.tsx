"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  const [expensesPerMonth, setExpensesPerMonth] = useState(100);
  const [timePerExpense, setTimePerExpense] = useState(15);

  const calculateROI = () => {
    const totalExpenses = employees * expensesPerMonth;
    const totalTimeSpent = (totalExpenses * timePerExpense) / 60; // in hours
    const timeSaved = totalTimeSpent * 0.7; // assuming 70% time savings
    const moneySaved = timeSaved * 50; // assuming $50/hour average salary
    return Math.round(moneySaved);
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Calculate Your ROI
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how much you can save with our expense management solution.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="employees"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Number of Employees
                </label>
                <input
                  type="range"
                  id="employees"
                  min="10"
                  max="1000"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full"
                />
                <p className="mt-1 text-sm text-gray-500">{employees}</p>
              </div>
              <div>
                <label
                  htmlFor="expensesPerMonth"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Average Expenses per Employee per Month
                </label>
                <input
                  type="range"
                  id="expensesPerMonth"
                  min="10"
                  max="500"
                  value={expensesPerMonth}
                  onChange={(e) => setExpensesPerMonth(Number(e.target.value))}
                  className="w-full"
                />
                <p className="mt-1 text-sm text-gray-500">{expensesPerMonth}</p>
              </div>
              <div>
                <label
                  htmlFor="timePerExpense"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Average Time per Expense Report (minutes)
                </label>
                <input
                  type="range"
                  id="timePerExpense"
                  min="5"
                  max="60"
                  value={timePerExpense}
                  onChange={(e) => setTimePerExpense(Number(e.target.value))}
                  className="w-full"
                />
                <p className="mt-1 text-sm text-gray-500">{timePerExpense}</p>
              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Estimated Annual Savings
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${calculateROI().toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get Started
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Results may vary. Calculation based on industry averages and
                  assumptions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
