export interface Slide {
  id: number
  title: string
  description: string
  image: string
  number: string
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Android App Development",
    description: "Create powerful Android applications with our expert development team using the latest technologies and best practices for optimal performance and user experience.",
    image: "/mbl-app-dev/mad_tech1.webp",
    number: "01"
  },
  {
    id: 2,
    title: "iOS App Development",
    description: "Develop stunning iOS applications that leverage the full potential of Apple's ecosystem, ensuring seamless functionality and elegant user interfaces.",
    image: "/mbl-app-dev/mad_tech2.webp",
    number: "02"
  },
  {
    id: 3,
    title: "Progressive Web App Development",
    description: "Our app development solutions complies with multiple platforms, delivering an optimal experience for each operating system. This approach saves on costs and speeds up time-to-market with top-notch quality.",
    image: "/mbl-app-dev/mad_tech3.webp",
    number: "03"
  },
  {
    id: 4,
    title: "Cross-Platform Development",
    description: "Build once, deploy everywhere with our cross-platform development expertise, reducing development time and costs while maintaining native-like performance.",
    image: "/mbl-app-dev/mad_tech4.webp",
    number: "04"
  }
]

