import React from "react";
import Navbar from "../components/Navbar";

const actionPlans = [
  {
    objective:
      "Research and identify the latest technology-assisted tools and resources that can be used in mathematics instruction.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers",
    budget: "1,500",
    source: "School MOOE",
    timeframe: "June 2026",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Develop a clear objective and plan for incorporating technology in mathematics instruction.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers",
    budget: "1,500",
    source: "School MOOE",
    timeframe: "July 2026",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Evaluate the effectiveness of the new technology-assisted modules in mathematics instruction through data analysis.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers",
    budget: "1,500",
    source: "School MOOE",
    timeframe: "August 2026",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Develop training programs and professional development opportunities for instructors to better understand and use the technology-assisted modules.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers",
    budget: "1,500",
    source: "School MOOE",
    timeframe: "September 2026",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Ensure that technology-assisted modules are accessible to all students, including those with disabilities and limited access to technology.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers and Students",
    budget: "3,000",
    source: "School MOOE",
    timeframe: "October 2026",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Encourage collaboration and communication between students and teachers through online platforms and messaging apps.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers and Students",
    budget: "3,000",
    source: "School MOOE",
    timeframe: "November 2026",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Incorporate gamification techniques, such as point systems and leaderboards to stimulate student engagement and motivation.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers and Students",
    budget: "3,000",
    source: "School MOOE",
    timeframe: "December 2026",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Continuously gather feedback from students and teachers to improve the technology-assisted modules and address any challenges that may arise.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers and Students",
    budget: "3,000",
    source: "School MOOE",
    timeframe: "January 2027",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Establish guidelines and policies for responsible technology use, including online safety and cyberbullying prevention.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers and Students",
    budget: "3,000",
    source: "School MOOE",
    timeframe: "February 2027",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
  {
    objective:
      "Allocate sufficient resources and funding to support the implementation and sustainability of technology-assisted modules in mathematics instruction.",
    strategy: "Organize conference.",
    persons: "Mathematics Teachers",
    budget: "3,000",
    source: "School MOOE",
    timeframe: "March 2027",
    outcome:
      "The teachers will be fully aware with regards to mathematics instructional development.",
  },
];

export default function PlansPage() {
  return (
    <>
      <Navbar />

      <div className="pt-24 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Action Plan
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mt-3">
              Technology-Assisted Module in Mathematics Instruction Towards
              Digitalization
            </p>
            <p className="text-sm text-yellow-600 dark:text-yellow-500 mt-1">
              District of Daanbantayan II • Division of Cebu Province
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-3xl shadow-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <table className="w-full text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-800 sticky top-0">
                <tr>
                  <th className="px-6 py-5 text-left font-semibold text-zinc-700 dark:text-zinc-300">
                    Objectives
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-zinc-700 dark:text-zinc-300">
                    Strategies
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-zinc-700 dark:text-zinc-300">
                    Persons Involved
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-zinc-700 dark:text-zinc-300">
                    Budget
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-zinc-700 dark:text-zinc-300">
                    Source
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-zinc-700 dark:text-zinc-300">
                    Time Frame
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-zinc-700 dark:text-zinc-300">
                    Expected Outcome
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {actionPlans.map((plan, index) => (
                  <tr
                    key={index}
                    className="hover:bg-yellow-50 dark:hover:bg-zinc-800/50 transition-colors"
                  >
                    <td className="px-6 py-6 text-zinc-800 dark:text-zinc-200 leading-relaxed">
                      {plan.objective}
                    </td>
                    <td className="px-6 py-6 text-zinc-700 dark:text-zinc-300">
                      {plan.strategy}
                    </td>
                    <td className="px-6 py-6 text-zinc-700 dark:text-zinc-300">
                      {plan.persons}
                    </td>
                    <td className="px-6 py-6 font-medium text-emerald-600 dark:text-emerald-500">
                      ₱{plan.budget}
                    </td>
                    <td className="px-6 py-6 text-zinc-700 dark:text-zinc-300">
                      {plan.source}
                    </td>
                    <td className="px-6 py-6 text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                      {plan.timeframe}
                    </td>
                    <td className="px-6 py-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {plan.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10 text-sm text-zinc-500">
            Total Budget:{" "}
            <span className="font-semibold text-emerald-600">₱27,000</span>
          </div>
        </div>
      </div>
    </>
  );
}
