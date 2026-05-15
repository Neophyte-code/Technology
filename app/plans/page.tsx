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

      {/* Action Plan Page with Mountain Scenery Background */}
      <section className="pt-24 pb-16 relative min-h-screen overflow-hidden">
        {/* Mountain / Forest Scenery Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format')", // Mountain lake scenery
          }}
        />

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="bg-linear-to-r from-yellow-500 to-amber-600 dark:from-yellow-600 dark:to-amber-700 rounded-2xl px-8 py-4 shadow-lg mb-4 w-fit mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Action Plan
              </h1>
            </div>
            <p className="text-xl text-zinc-800 dark:text-zinc-200 font-medium mt-3 bg-white/40 dark:bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm w-fit mx-auto">
              Technology-Assisted Module in Mathematics Instruction Towards
              Digitalization
            </p>
            <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-2 font-semibold w-fit mx-auto">
              District of Daanbantayan II • Division of Cebu Province
            </p>
          </div>

          {/* Enhanced Table with Glassmorphism */}
          <div className="overflow-x-auto rounded-3xl shadow-2xl border border-white/20 dark:border-zinc-700/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
            <table className="w-full text-sm">
              <thead className="bg-linear-to-r from-yellow-500/90 to-amber-600/90 dark:from-yellow-600/90 dark:to-amber-700/90 sticky top-0">
                <tr>
                  <th className="px-6 py-5 text-left font-semibold text-white">
                    Objectives
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-white">
                    Strategies
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-white">
                    Persons Involved
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-white">
                    Budget
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-white">
                    Source
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-white">
                    Time Frame
                  </th>
                  <th className="px-6 py-5 text-left font-semibold text-white">
                    Expected Outcome
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/50 dark:divide-zinc-700/50">
                {actionPlans.map((plan, index) => (
                  <tr
                    key={index}
                    className={`transition-all duration-200 hover:bg-yellow-100/50 dark:hover:bg-yellow-900/30 hover:backdrop-blur-sm ${
                      index % 2 === 0
                        ? "bg-white/40 dark:bg-zinc-900/40"
                        : "bg-white/20 dark:bg-zinc-800/20"
                    }`}
                  >
                    <td className="px-6 py-6 text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                      {plan.objective}
                    </td>
                    <td className="px-6 py-6 text-zinc-700 dark:text-zinc-300">
                      {plan.strategy}
                    </td>
                    <td className="px-6 py-6 text-zinc-700 dark:text-zinc-300">
                      {plan.persons}
                    </td>
                    <td className="px-6 py-6 font-bold text-emerald-700 dark:text-emerald-400">
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

          {/* Total Budget Badge */}
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-white/30 dark:border-zinc-700/50">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Total Budget:
              </span>
              <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                ₱27,000
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
