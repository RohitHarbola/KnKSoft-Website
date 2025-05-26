import { FC } from 'react'

const CloudArchitecture: FC = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-10">
          Cloud Architecture&nbsp;
          <span className="text-primary mt-2">Solutions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArchitectureCard
            title="Microservices Architecture"
            description="Design and implement scalable microservices architectures for improved modularity and flexibility."
            icon={
              <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
          />
          <ArchitectureCard
            title="Serverless Computing"
            description="Leverage serverless architectures to reduce operational complexity and improve scalability."
            icon={
              <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            }
          />
          <ArchitectureCard
            title="Multi-Cloud Strategy"
            description="Develop and implement multi-cloud strategies to optimize performance, cost, and reliability."
            icon={
              <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  )
}

interface ArchitectureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const ArchitectureCard: FC<ArchitectureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="rounded-xl bg-white shadow-xl p-6 transform transition duration-300 hover:scale-105">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="font-light text-center">{description}</p>
    </div>
  )
}

export default CloudArchitecture

