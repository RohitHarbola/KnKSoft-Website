'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button/Button'

const accordionItems = [
  {
    id: '01',
    title: 'Native Mobile App Development',
    content: 'Our proficient mobile app service provider develops high-quality native apps for both Android and iOS, customized to cater your business needs and security standards.'
  },
  {
    id: '02',
    title: 'Hybrid Mobile App Development',
    content: 'We create cross-platform mobile applications that work seamlessly across different devices and operating systems, providing a native-like experience while maintaining cost-effectiveness.'
  },
  {
    id: '03',
    title: 'Progressive Web App Development',
    content: 'Our PWA solutions combine the best of web and mobile applications, delivering fast, reliable, and engaging experiences that work offline and can be installed on any device.'
  },
  {
    id: '04',
    title: 'Wearables and Embedded Software',
    content: 'We develop custom software solutions for wearable devices and embedded systems, helping businesses leverage IoT technology and create innovative connected experiences.'
  }
]

export default function Page() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <main className="min-h-screen bg-[#141414]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-7xl lg:text-6xl font-bold mb-6 bg-clip-text text-white">
            Ready to Innovate?
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-white">
            Let Our Mobile Application Development Services Propel Your Ambition
          </h2>
          <p className="text-lg text-white leading-relaxed">
            Our mobile app development experts dwell with a decade-long expertise in crafting solutions that
            cater unmet market needs, empower brand&apos;s identity and inspire business growth and expansion
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-4">
            {accordionItems.map((item) => (
              <div key={item.id} className="border border-gray-800 rounded-lg">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-4 py-4 lg:py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={cn("text-sm lg:text-base text-[#949494]", openItem === item.id && "text-white")}>{item.id}</span>
                    <h3 className={cn(
                      "text-xl md:text-2xl font-semibold group-hover:text-blue-500 transition-colors",
                      openItem === item.id ? "text-white" : "text-[#949494]"
                    )}>
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      openItem === item.id
                        ? "rotate-180 bg-blue-500 rounded-full p-4 text-white"
                        : "text-blue-500"
                    )}
                  />
                </button>
                {openItem === item.id && (
                  <div className="px-4 pb-4 text-gray-400">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center flex justify-center">
          <Button variant={'outline'} size={'lg'} rightIcon={<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />} className='border-white'>
            Explore Services
          </Button>
        </div>
      </section>
    </main>
  )
}

