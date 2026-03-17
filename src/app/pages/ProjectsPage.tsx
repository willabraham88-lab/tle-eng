import { Settings, Users, Building, Award, BookOpen, Wrench, Code, Network, Server, Shield, CheckCircle, Zap, Sparkles, Target, TrendingUp, MapPin, Calendar, Users2, DollarSign, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollableNav } from '../components/ScrollableNav';
import type { Page } from '../types';
import { useState } from 'react';

interface ProjectsPageProps {
  onNavigate: (page: Page) => void;
}

const technicalExpertise = [
  {
    icon: Code,
    title: 'Programming & Development',
    items: [
      'PLC Programming (Allen-Bradley, Siemens, Schneider)',
      'SCADA Development (Ignition, Wonderware, GE)',
      'HMI Design & Implementation',
      'Custom Software Solutions',
      'Database Design & Management',
      'API Development & Integration'
    ]
  },
  {
    icon: Network,
    title: 'Communication Technologies',
    items: [
      'Industrial Ethernet Networks',
      'Wireless Mesh Networks',
      'Radio Communication Systems',
      'Fiber Optic Networks',
      'Cellular & Satellite Communications',
      'Protocol Conversion & Gateways'
    ]
  },
  {
    icon: Server,
    title: 'System Architecture',
    items: [
      'Redundant System Design',
      'Virtualization Solutions',
      'Cloud & Hybrid Infrastructure',
      'Cybersecurity Implementation',
      'Disaster Recovery Planning',
      'High Availability Systems'
    ]
  },
  {
    icon: Wrench,
    title: 'Field Services',
    items: [
      'Installation & Commissioning',
      'Equipment Calibration',
      'System Testing & Validation',
      'Troubleshooting & Repair',
      'Preventive Maintenance',
      'Emergency Field Support'
    ]
  }
];

const certifications = [
  'ISA Certified Automation Professional (CAP)',
  'NICET Certified in Instrumentation',
  'Certified Control Systems Technician (CCST)',
  'Project Management Professional (PMP)',
  'OSHA Safety Certifications',
  'Vendor-Specific Certifications'
];

const projects = [
  {
    id: 'karbala-cpm-lds',
    title: 'CPM / Leak Detection System — Karbala Refinery',
    client: 'Karbala Refinery Products & LPG',
    industry: 'Oil & Gas',
    duration: 'Turnkey Delivery',
    location: 'Karbala, Iraq',
    description: 'Designed, integrated, and commissioned a full turnkey Computational Pipeline Monitoring (CPM) and Leak Detection System — both internal and external — for 8 pipelines carrying refined products and LPG. Scope covered leak detection hardware and software, telecommunications infrastructure, RTUs, field instrumentation, SCADA integration, and operator training.',
    challenges: [
      'Extreme desert operating conditions with ambient temperatures exceeding 50°C and sand/dust exposure demanding ruggedized instrumentation across all 8 pipeline corridors',
      'Multi-product pipeline complexity — each pipeline carries different products (refined fuels and LPG) with distinct fluid properties requiring individually calibrated CPM models',
      'Limited existing telecommunications infrastructure across remote pipeline routes with no pre-existing communication backbone',
      'Dual-method leak detection requirement demanding both internal (software-based computational) and external (hardware-based) detection for redundant coverage meeting international standards',
      'End-to-end turnkey responsibility from instrument specification and procurement through telecom design, RTU installation, software configuration, and full commissioning'
    ],
    solutions: [
      'Deployed ruggedized RTUs and field instrumentation rated for extreme ambient conditions with climate-controlled enclosures, surge protection, and sand-ingress-resistant housings',
      'Engineered bespoke real-time transient models (RTTM) for each pipeline, individually calibrated against product-specific fluid characteristics and operating profiles',
      'Designed and installed a full telecommunications network — including UHF/VHF radio links and microwave backhaul — providing reliable, low-latency connectivity from every measurement point to the central control room',
      'Implemented dual-layer leak detection combining internal CPM/RTTM algorithms (mass balance, pressure/flow analysis, statistical leak signature detection) with external sensing technologies for redundant coverage',
      'Delivered a unified SCADA platform with centralised alarm management, hydraulic profile visualisation, automatic leak localisation, and operator decision-support dashboards'
    ],
    outcomes: [
      'Continuous real-time monitoring achieved across all 8 pipelines with leak detection sensitivity and response times meeting API 1130 and TRFL guidelines',
      'Leak response time reduced from hours to minutes through automated alarm notification, precise leak localisation, and structured operator response workflows',
      'Complete telecommunications coverage established across the entire pipeline network enabling reliable, uninterrupted data transmission',
      'Unified control room visibility delivered — operators gained full hydraulic profiles, product tracking, and consolidated leak alarms from a single interface',
      'Enhanced safety and environmental protection through early-detection capability, reducing risk of product loss, environmental contamination, and safety incidents'
    ],
    technologies: ['CPM/RTTM Software', 'SCADA', 'RTUs', 'UHF/VHF Radio', 'Microwave Backhaul', 'Flow Meters', 'Pressure Transmitters', 'Temperature Sensors', 'LPG Instrumentation', 'API 1130 Compliance']
  },
  {
    id: 'middle-east-sdh-oilfield',
    title: 'Oil Field SDH Telecommunications Network',
    client: 'Confidential — Middle East Oil & Gas Operator',
    industry: 'Oil & Gas',
    duration: '12 months',
    location: 'Middle East',
    description: 'Partnered with Loop to design and deploy a complete SDH/SONET telecommunications network connecting multiple geographically dispersed oil fields. The solution provided a high-speed STM-4 backbone between the two largest sites using Loop O9400R devices, with O9500 devices deployed at satellite locations — delivering both high-speed connectivity for modern infrastructure and low-speed DS0 access for legacy voice and telemetry equipment across the entire operation.',
    challenges: [
      'Geographically dispersed oil fields spread across remote desert terrain requiring a unified, high-reliability communications network for real-time operational data transfer',
      'Disparate site requirements — large, high-investment fields demanded high-speed connectivity while smaller legacy or near-depleted sites still relied on low-speed voice and data interfaces (DS0, FXS, FXO, E&M)',
      'Mission-critical resilience — the network had to guarantee continuous data availability with automatic failover and ring protection to prevent any single point of failure from disrupting field operations',
      'Legacy infrastructure integration — ageing oil fields carried existing low-speed telecommunications infrastructure that had to be accommodated without costly replacement',
      'Future scalability — the backbone architecture needed a clear upgrade path to handle increasing bandwidth demands as new fields come online or existing operations expand'
    ],
    solutions: [
      'Deployed Loop O9400R devices to form the critical STM-4 backbone between the two largest sites, with Subnetwork Connection Protection (SNCP) for resilient ring connectivity and MSP 1+1 line protection for automatic failover',
      'Installed Loop O9500 devices at satellite sites providing STM-1/4 access with multiple ring protection, connecting smaller and remote field locations into the unified network',
      'Leveraged dual-speed access capability of the O9500 to deliver low-speed DS0 interfaces (FXS, FXO, E&M) for legacy voice and telemetry equipment alongside high-speed Ethernet for modern SCADA and network devices',
      'Engineered a future-proof backbone — the O9400R supports up to STM-16 (OC-48), enabling bandwidth upgrades without hardware replacement as the company\'s networking needs grow',
      'Designed and implemented the complete network architecture in cooperation with Loop, covering fibre route planning, equipment configuration, protection scheme design, and end-to-end commissioning'
    ],
    outcomes: [
      'Unified communications network established across all oil field sites, enabling faster communication and immediate transfer of critical operational data',
      'Seamless legacy and modern integration — older fields connected via low-speed DS0 interfaces while high-investment sites utilised high-speed SDH connectivity, all on a single platform',
      'Resilient, fault-tolerant backbone delivered with SNCP and MSP 1+1 protection ensuring continuous data availability even during fibre or line faults',
      'Future-proof architecture deployed — STM-16 upgrade path available on backbone equipment without hardware replacement, protecting the client\'s long-term investment',
      'Standardised telecommunications platform across disparate field operations, simplifying network management, monitoring, and maintenance'
    ],
    technologies: ['Loop O9400R', 'Loop O9500', 'SDH/SONET', 'STM-4 / STM-1', 'SNCP Ring Protection', 'MSP 1+1 Protection', 'FXS/FXO/E&M', 'DS0 Access', 'Fibre Optic Network']
  },
  {
    id: 'east-asia-teleprotection',
    title: 'Power Utility Teleprotection Interface Solution',
    client: 'Confidential — East Asian Power Utility',
    industry: 'Power & Utilities',
    duration: '18 months',
    location: 'East Asia',
    description: 'Delivered end-to-end planning, design, solution specification, equipment procurement, and remote commissioning for a power utility facing critical teleprotection communication failures. Line Current Differential Relays (87L) were unable to communicate due to insufficient fibre availability — resolved by deploying Loop AM3440 hybrid multiplexers with custom-designed C37.94 optical interface cards to route protection messages over the existing E1 and SDH infrastructure.',
    challenges: [
      'Line Current Differential Relays (87L) unable to communicate with each other due to insufficient available fibre optic capacity across the power utility network',
      'Protection relays required standard or customised C37.94 optical interfaces for message conversion, but only customised interfaces were available — limiting compatibility with off-the-shelf teleprotection equipment',
      'Finding a teleprotection device with a matching customised optical interface capable of integrating with the existing E1 and SDH infrastructure',
      'Remote commissioning requirement — the entire system had to be configured, tested, and commissioned remotely, adding complexity to validation and troubleshooting',
      'Ensuring the solution maintained the strict latency and reliability requirements of line current differential protection schemes, where communication delays can cause false tripping or failure to operate'
    ],
    solutions: [
      'Identified and specified the Loop AM3440 hybrid multiplexer as the ideal platform, featuring a custom single-mode optical interface card specifically designed for the customer\'s third-party teleprotection devices',
      'Designed the interface architecture so the AM3440\'s custom C37.94 optical card connected directly to the 87L relays, converting protection messages before transmitting them over the existing E1 network',
      'Leveraged the AM3440\'s hybrid multiplexing capability to bridge protection relay communications with the existing SDH network infrastructure and third-party leased lines without requiring new fibre installation',
      'Delivered complete planning, design, solution specification, equipment procurement, and remote commissioning — providing end-to-end project delivery',
      'Engineered a customised interface design adaptable to different teleprotection requirements, streamlining the overall installation process and reducing deployment costs'
    ],
    outcomes: [
      'Full communication restored between Line Current Differential Relays (87L) across the power utility network, re-establishing critical protection scheme functionality',
      'Existing E1 and SDH infrastructure fully utilised — no new fibre installation required, significantly reducing capital expenditure',
      'Customised C37.94 optical interface successfully integrated with third-party teleprotection devices, resolving the interface compatibility challenge',
      'Scalable and future-proof solution deployed — the AM3440\'s customisable design accommodates different teleprotection requirements for future network expansion',
      'End-to-end remote delivery model proven — planning through commissioning completed successfully without on-site presence, demonstrating TLE\'s capability for international remote project execution'
    ],
    technologies: ['Loop AM3440', 'C37.94 Optical Interface', '87L Line Current Differential Relays', 'E1 Multiplexing', 'SDH Network', 'Teleprotection', 'Single-Mode Fibre Optics', 'Hybrid Multiplexer']
  },
  {
    id: 'metro-railway-comms',
    title: 'Metro Railway Communications Network',
    client: 'Confidential — Middle East Metro Railway Operator',
    industry: 'Rail & Transportation',
    duration: '24 months',
    location: 'Middle East',
    description: 'Partnered with Loop Telecom to design and deliver a complete station-to-headquarters communications network for a metro railway line expansion and upgrade in a major Middle Eastern city. The solution provided an STM-16 SDH backbone connecting all stations, with Ethernet drops for SCADA, CCTV, and passenger information systems, PDH access for legacy telephony and dry contacts, and centralised monitoring and management from the railway headquarters.',
    challenges: [
      'Expanding and upgrading an existing metro railway line required a unified communications backbone capable of carrying alarm, security, and passenger information from every station back to central headquarters',
      'Diverse data types — the network had to simultaneously transport SCADA telemetry, security camera feeds, passenger information (bulletin boards, timetables, video advertisements), legacy telephone traffic, and dry contact alarm signals',
      'Integration of modern high-speed Ethernet services alongside legacy low-speed interfaces (traditional telephony and dry contact alarms) on a single converged platform',
      'Centralised monitoring requirement — all station data had to be aggregated at headquarters into unified interfaces enabling rapid response to abnormal events such as natural disasters, criminal activity, or high passenger traffic',
      'Network management simplicity — the operator needed an intuitive management platform that did not require large, complex NMS software for what was a focused, purpose-built railway network'
    ],
    solutions: [
      'Deployed an STM-16 ring using Loop O9400R SDH nodes to form a resilient, high-capacity communications backbone connecting every station along the metro line',
      'At each station, the O9400R drops into Ethernet lines feeding SCADA systems, security cameras, and passenger information displays including bulletin boards, time schedules, and video advertisements',
      'Integrated Loop AM3440 (PDH) multiplexers at each station for low-speed dry contact alarm interfaces and legacy telephone access, ensuring all signal types were carried over the single SDH backbone',
      'Aggregated all station information at central headquarters into unified monitoring interfaces, with a master telephone switch connecting traditional telephones at every station',
      'Deployed Loop iNET network management, enabling the network administrator to configure and monitor all devices from a single location without requiring complex large-scale NMS software'
    ],
    outcomes: [
      'Complete station-to-headquarters communications network established, enabling real-time monitoring of alarms, security, and passenger information across the entire metro line',
      'Metro rail managers gained the ability to monitor passengers and respond rapidly to abnormal events — natural disasters, criminal activity, or high traffic — from a centralised control point',
      'Converged network delivered — SCADA, CCTV, passenger information, legacy telephony, and dry contact alarms all transported over a single resilient STM-16 SDH backbone',
      'Operational efficiency improved — more information reaching more people faster with fewer staff required, resulting in a better and more reliable transportation network for the public',
      'Loop Telecom equipment recognised for its quality, ease of use, and reliability, with simplified network management via Loop iNET reducing ongoing operational overhead'
    ],
    technologies: ['Loop O9400R', 'Loop AM3440', 'SDH STM-16 Ring', 'Loop iNET NMS', 'Ethernet / SCADA', 'CCTV Integration', 'Passenger Information Systems', 'PDH Multiplexing', 'Dry Contact Interfaces', 'Legacy Telephony']
  }
];

const industries = [
  { name: 'Oil & Gas', icon: Zap },
  { name: 'Water & Utilities', icon: Shield },
  { name: 'Power Generation', icon: Zap },
  { name: 'Manufacturing', icon: Settings },
  { name: 'Transportation', icon: Network },
  { name: 'Mining', icon: Wrench }
];

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <main role="main" aria-label="Projects page">
    <div>
      {/* Hero Section with Background Image */}
      <section className="pb-12 pt-3 md:pt-4 relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.08) 100%)',
        borderBottom: '1px solid var(--bs-border-color)',
        marginTop: '-76px',
        paddingTop: '76px'
      }}>
        {/* Animated background circles */}
        <div className="absolute" style={{
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26, 115, 232, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div className="absolute" style={{
          bottom: '-10%',
          left: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13, 71, 161, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        
        <div className="container mx-auto max-w-7xl px-4 relative" style={{ paddingTop: '100px', paddingBottom: '3rem' }}>
          <div className="text-center px-3">
            <div className="mb-3 inline-block" style={{
              padding: '8px 16px',
              background: 'rgba(26, 115, 232, 0.1)',
              border: '1px solid rgba(26, 115, 232, 0.2)',
              borderRadius: '20px',
              color: 'var(--bs-primary)',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <Target size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Our Expertise
            </div>
            <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
              Deep Technical Knowledge<br />Proven Results
            </h1>
            <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '800px', color: 'var(--bs-body-color)', opacity: 0.7 }}>
              Decades of experience in designing, implementing, and maintaining mission-critical systems across diverse industries and applications.
            </p>
          </div>
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      {/* Projects Delivered */}
      <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
              Projects Delivered
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
              Real-world solutions demonstrating our technical capabilities
            </p>
          </div>

          {/* Project Tabs */}
          <ScrollableNav className="mb-4" style={{ '--scrollnav-fade': 'var(--bs-section-bg-light)' } as React.CSSProperties}>
            <div className="flex flex-nowrap gap-2 justify-start md:justify-center pb-2" style={{ minWidth: 'min-content' }}>
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectIndex(index)}
                  className="whitespace-nowrap border-0 cursor-pointer shrink-0"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '12px',
                    border: activeProjectIndex === index ? '2px solid var(--bs-primary)' : '0.5px solid var(--glass-border)',
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: activeProjectIndex === index ? 'linear-gradient(135deg, rgba(26, 115, 232, 0.1) 0%, rgba(13, 71, 161, 0.1) 100%)' : 'var(--glass-bg)',
                    color: activeProjectIndex === index ? 'var(--bs-primary)' : 'var(--bs-body-color)',
                    fontWeight: activeProjectIndex === index ? '600' : '500',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeProjectIndex !== index) {
                      e.currentTarget.style.borderColor = 'rgba(26, 115, 232, 0.5)';
                      e.currentTarget.style.background = 'rgba(26, 115, 232, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeProjectIndex !== index) {
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                      e.currentTarget.style.background = 'var(--glass-bg)';
                    }
                  }}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </ScrollableNav>

          {/* Active Project Content */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                display: activeProjectIndex === index ? 'block' : 'none'
              }}
            >
              <div className="border-0 shadow-sm rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="p-8 md:p-12">
                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="mb-3" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                      {project.title}
                    </h3>
                    <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                      {project.description}
                    </p>
                    
                    {/* Project Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Building size={18} style={{ color: 'var(--bs-primary)' }} />
                        <div>
                          <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Client</div>
                          <div className="font-semibold text-sm" style={{ color: 'var(--bs-body-color)' }}>{project.client}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Settings size={18} style={{ color: 'var(--bs-primary)' }} />
                        <div>
                          <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Industry</div>
                          <div className="font-semibold text-sm" style={{ color: 'var(--bs-body-color)' }}>{project.industry}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} style={{ color: 'var(--bs-primary)' }} />
                        <div>
                          <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Duration</div>
                          <div className="font-semibold text-sm" style={{ color: 'var(--bs-body-color)' }}>{project.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} style={{ color: 'var(--bs-primary)' }} />
                        <div>
                          <div className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.6 }}>Location</div>
                          <div className="font-semibold text-sm" style={{ color: 'var(--bs-body-color)' }}>{project.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenges, Solutions, Outcomes */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Challenges */}
                    <div className="h-full p-4 rounded-xl" style={{
                      background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.08) 0%, rgba(220, 53, 69, 0.05) 100%)',
                      border: '1px solid rgba(220, 53, 69, 0.15)'
                    }}>
                      <h4 className="mb-3 text-sm" style={{ fontWeight: '700', color: '#dc3545' }}>Challenges</h4>
                      <ul className="list-none p-0 mb-0">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start mb-2">
                            <div className="rounded-full mt-1 shrink-0" style={{
                              width: '6px',
                              height: '6px',
                              background: '#dc3545',
                              marginRight: '8px'
                            }}></div>
                            <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="h-full p-4 rounded-xl" style={{
                      background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.05) 100%)',
                      border: '1px solid rgba(26, 115, 232, 0.15)'
                    }}>
                      <h4 className="mb-3 text-sm" style={{ fontWeight: '700', color: 'var(--bs-primary)' }}>Solutions</h4>
                      <ul className="list-none p-0 mb-0">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start mb-2">
                            <div className="rounded-full mt-1 shrink-0" style={{
                              width: '6px',
                              height: '6px',
                              background: 'var(--bs-primary)',
                              marginRight: '8px'
                            }}></div>
                            <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="h-full p-4 rounded-xl" style={{
                      background: 'linear-gradient(135deg, rgba(25, 135, 84, 0.08) 0%, rgba(25, 135, 84, 0.05) 100%)',
                      border: '1px solid rgba(25, 135, 84, 0.15)'
                    }}>
                      <h4 className="mb-3 text-sm" style={{ fontWeight: '700', color: '#198754' }}>Outcomes</h4>
                      <ul className="list-none p-0 mb-0">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start mb-2">
                            <CheckCircle size={16} style={{ color: '#198754', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                            <span className="text-sm" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--bs-border-color)' }}>
                    <h4 className="mb-3 text-sm" style={{ fontWeight: '700', color: 'var(--bs-body-color)' }}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: 'rgba(26, 115, 232, 0.1)',
                            color: 'var(--bs-primary)',
                            border: '1px solid rgba(26, 115, 232, 0.2)',
                            padding: '8px 16px',
                            fontSize: '13px',
                            fontWeight: '500',
                            borderRadius: '8px'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-12" style={{ background: 'var(--bs-section-bg-lighter)' }}>
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="text-center mb-12 px-3">
            <h2 className="mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
              Technical Expertise
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
              Advanced skills across modern industrial technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalExpertise.map((area, index) => {
              const Icon = area.icon;
              
              return (
                <div key={index}>
                  <div className="h-full border-0 shadow-sm rounded-2xl" style={{
                    backdropFilter: 'saturate(180%) blur(20px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                    background: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 115, 232, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}>
                    {/* Card Header with Icon */}
                    <div className="p-4" style={{
                      background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.08) 0%, rgba(13, 71, 161, 0.05) 100%)',
                      borderBottom: '1px solid var(--bs-border-color)'
                    }}>
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl inline-flex items-center justify-center" style={{
                          width: '56px',
                          height: '56px',
                          background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
                          boxShadow: '0 4px 16px rgba(26, 115, 232, 0.3)'
                        }}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <h3 className="mb-0" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                          {area.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Card Body with Items */}
                    <div className="p-4">
                      <div className="flex flex-col gap-3">
                        {area.items.map((item, idx) => (
                          <div key={idx} className="flex items-start p-3 rounded-lg" style={{
                            background: 'var(--bs-body-bg)',
                            border: '1px solid var(--bs-border-color)',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(26, 115, 232, 0.08)';
                            e.currentTarget.style.borderColor = 'rgba(26, 115, 232, 0.3)';
                            e.currentTarget.style.transform = 'translateX(4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bs-body-bg)';
                            e.currentTarget.style.borderColor = 'var(--bs-border-color)';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}>
                            <CheckCircle size={16} style={{ color: 'var(--bs-primary)', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                            <span className="text-sm" style={{ color: 'var(--bs-body-color)' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-xl inline-flex items-center justify-center mb-4" style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)'
              }}>
                <Award size={40} className="text-white" />
              </div>
              <h2 className="mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '700', color: 'var(--bs-body-color)' }}>
                Certified Professionals
              </h2>
              <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--bs-body-color)', opacity: 0.7 }}>
                Our team holds industry-recognized certifications ensuring the highest standards of quality and expertise.
              </p>
              <p className="mb-4" style={{ color: 'var(--bs-body-color)', opacity: 0.7 }}>
                We invest continuously in our team's professional development, maintaining certifications and staying current with the latest technologies and best practices in industrial automation and control systems.
              </p>
            </div>
            <div>
              <div className="border-0 shadow-sm rounded-2xl" style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                background: 'var(--glass-bg)',
                border: '0.5px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div className="p-4">
                  <h3 className="mb-4" style={{ fontSize: '1.25rem', color: 'var(--bs-body-color)' }}>
                    Industry Certifications
                  </h3>
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start mb-3 pb-3" style={{
                      borderBottom: index < certifications.length - 1 ? '1px solid var(--bs-border-color)' : 'none'
                    }}>
                      <div className="rounded-full flex items-center justify-center shrink-0" style={{
                        width: '32px',
                        height: '32px',
                        background: 'rgba(26, 115, 232, 0.1)',
                        marginRight: '12px'
                      }}>
                        <CheckCircle size={18} style={{ color: 'var(--bs-primary)' }} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1" style={{ color: 'var(--bs-body-color)' }}>{cert}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12" style={{ background: 'var(--bs-section-bg-light)' }}>
        <div className="container mx-auto max-w-7xl px-4 py-12">
          {/* CTA Card */}
          <div className="rounded-xl border-0 shadow-2xl overflow-hidden" style={{
            background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
            color: 'white'
          }}>
            <div className="p-8 md:p-12 text-center">
              <Settings size={48} className="mb-4 mx-auto" style={{ opacity: 0.9 }} />
              <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
                Put Our Expertise to Work
              </h3>
              <p className="mb-8 mx-auto" style={{ fontSize: '1.125rem', opacity: 0.95, maxWidth: '800px' }}>
                Let our experienced team help you design, implement, and optimize your critical infrastructure systems with proven expertise and innovative solutions.
              </p>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-lg border-0 cursor-pointer px-8 py-4"
                style={{
                  background: 'white',
                  color: '#1a73e8',
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
                }}
              >
                <span>Start a Conversation</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
  );
}