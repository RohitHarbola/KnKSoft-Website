import { motion } from 'framer-motion'

const steps = [
  {
    title: "Apply Online",
    description: "Submit your application through our careers portal with your resume and cover letter."
  },
  {
    title: "Initial Screening",
    description: "Our recruitment team will review your application and reach out if there's a potential fit."
  },
  {
    title: "Technical Assessment",
    description: "Complete a take-home assignment or participate in a live coding session, depending on the role."
  },
  {
    title: "Interview Rounds",
    description: "Meet with team members and leaders through a series of interviews to assess mutual fit."
  },
  {
    title: "Final Decision",
    description: "We'll make a decision and extend an offer to the selected candidate."
  }
]

export default function ApplicationProcess() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Application Process
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex mb-8 last:mb-0"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

