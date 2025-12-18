'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'

export default function Projects() {
  const projects = [
    {
      title: "Nexus - Smart Home Garden Watering System (Home Watering Booster)",
      location: "University of Westminster, London, United Kingdom (Level 4 - 1st Year)",
      abstract: "The irrigation system allows water to drip slowly to the roots of plants, either onto the soil surface or directly onto the root zone, through a solenoid valve. However, it is found that the market price of the system is expensive for small area coverage. Thus, this paper proposes a design for a smart home garden irrigation system that implements ready-to-use, energy-efficient, and cost-effective devices. Raspberry Pi, which is implemented in this system is integrated with multi-sensors such as soil moisture sensors, ultrasonic sensors, and light sensors. This proposed system managed to reduce cost, minimize wastewater, and reduce the physical human interface. In this paper, the relay is utilized to control the switching of the solenoid valve. The system also managed to measure the moisture of the soil and control the solenoid valve according to human requirements. It is conducted with Graphical User Interface (GUI) using an Android application to activate watering activity. Email notification is also sent to the home user for alert purposes either for normal or critical operations. An experimental setup has been tested and it is proven that the system can intelligently control and monitor the soil moisture levels in the experiment field.",
      technologies: ["Ubidots cloud", "Arduino", "ESP8266 NodeMCU", "Android", "C++", "HTML5", "CSS3", "Bootstrap", "Java Script", "JSON", "jQuery UI", "REST Web Services"],
      image: "/projects/Iot1.jpg"
    },
    {
      title: "Smart Irrigation Controlling System",
      location: "Sri Lanka",
      abstract: "In Sri Lanka, agriculture plays an important role in the development of food production. In our country, agriculture depends on monsoons which are not a sufficient source of water. So irrigation is used in the agriculture field. The Internet of Things (IoT) is a milestone in the evolution of technology. IoT plays an important role in many fields, one of that is Agriculture by which it can feed billions of people on Earth in the future. The objective of this paper is aiming to overcome this challenge, the whole system is microcontroller based and can be operated from a remote location through wireless transmission so there is no need to be concerned about irrigation timing as per crop or soil condition. The sensor is used to take sensor readings of soil like soil moisture, temperature, and air moisture, and decision-making is controlled by the user (farmer) by using a microcontroller. The data received from sensors are sent to the server database using wireless transmission. The irrigation will be automated when the moisture and temperature of the field are reduced. The farmer is notified with the information regarding field conditions through mobile periodically. This system will be more useful in areas where there is a scarcity of water and will be worth efficient in satisfying its requirements.",
      technologies: [],
      image: "/projects/iot2.jpg"
    },
    {
      title: "Smart Irrigation Control System (IoT) - Second-Year Project",
      location: "University of Westminster, London, United Kingdom (Level 5 - 2nd Year)",
      features: [
        "remotely controlled water pump",
        "Automatic/manual mode",
        "humidity and water pump status display",
        "Irrigation can be triggered in the Web user interface. In this case, the pump will start for 10s. You can also use the automatic mode. In this case, you set threshold soil humidity in the Web interface. If soil humidity drops below this value pump will switch on for 5s. After 10 min will again check soil moisture and switch the pump on if needed."
      ],
      technologies: ["Ubidots cloud", "Arduino", "ESP8266 NodeMCU", "Android", "C++", "HTML5", "CSS3", "Bootstrap", "JavaScript", "JSON", "jQuery UI"],
      image: "/projects/Iot2.jpg"
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Enterprise Cutting-Edge Projects</h1>
          <p className="text-gray-600 mb-12">Innovative solutions in IoT and smart systems</p>
        </AnimatedSection>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.15} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                {project.image && (
                  <div className="md:w-1/3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                )}
                <div className={`${project.image ? 'md:w-2/3' : 'w-full'} p-8`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-primary-600 font-medium mb-4">{project.location}</p>
                  
                  {project.abstract && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Abstract:</h3>
                      <p className="text-gray-700 leading-relaxed">{project.abstract}</p>
                    </div>
                  )}

                  {project.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Irrigation system features:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  )
}

