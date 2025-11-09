"use client"

// Paste your ProductPortfolio component code here
import { useState } from 'react';
import { Briefcase, Award, Target, Users, FileText, TrendingUp, ChevronRight, Sparkles, Lightbulb, Rocket } from 'lucide-react';
import { RiProfileLine } from 'react-icons/ri';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const projects = [
    {
      id: 1,
      title: "Healthcare Digital Transformation",
      company: "PT Kalbe Farma",
      role: "Product Manager Intern",
      period: "Feb 2025 - Present",
      category: "Enterprise Product",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
      impact: {
        metric1: "2 Projects",
        metric2: "Cross-functional",
        metric3: "Agile Method"
      },
      challenge: "How do you manage multiple stakeholders across different teams while keeping technical documentation accurate and projects on track? That was my challenge in a fast-paced pharmaceutical environment where precision matters.",
      approach: [
        "Conducted comprehensive requirement gathering sessions with 10+ stakeholders",
        "Created detailed technical documentation (URS, FSD, DSD, SLA) for 2 ongoing projects",
        "Facilitated weekly sprint planning and review sessions using Agile methodology",
        "Collaborated with Software Engineers, UI/UX Designers, and AI Engineers for seamless integration",
        "Supported product development for internal and external coordination through documentation and research"
      ],
      outcome: "I successfully bridged the gap between business needs and technical requirements, which helped keep our product development cycles smooth and our stakeholders happy - both internally and externally.",
      skills: ["Requirement Gathering", "Technical Documentation", "Agile/SDLC", "Stakeholder Management", "Cross-functional Collaboration"],
      keyLearnings: "Learned to balance technical precision with business priorities while managing complex stakeholder ecosystems in enterprise environments."
    },
    {
      id: 2,
      title: "PT INALUM Digital Integration Strategy",
      company: "ITS Surabaya Competition",
      role: "Business Analyst & Strategist",
      period: "Oct 2024",
      category: "Case Competition - 3rd Place",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-blue-500",
      impact: {
        metric1: "3rd Winner",
        metric2: "National Level",
        metric3: "Digital Strategy"
      },
      challenge: "Indonesia's largest aluminum producer needed a digital transformation strategy. The challenge? Creating a comprehensive plan that would improve efficiency through automation while working around their existing legacy systems.",
      approach: [
        "Conducted thorough business process analysis and identified key pain points",
        "Performed competitive benchmarking against industry best practices",
        "Designed integrated automation concepts addressing efficiency gaps",
        "Proposed data-driven solutions with measurable KPIs and ROI projections",
        "Created implementation roadmap considering change management"
      ],
      outcome: "Our team secured 3rd place among Indonesia's top universities! What made it special was hearing that our solution was both practical and strategically sound - something that could actually work in the real world.",
      skills: ["Business Process Analysis", "Digital Transformation", "Data-driven Decision Making", "Strategic Planning", "Presentation Skills"],
      keyLearnings: "Developed ability to design scalable digital solutions and communicate complex technical strategies to diverse audiences effectively."
    },
    {
      id: 3,
      title: "Academic Mentorship Program",
      company: "BINUS University",
      role: "Scholarship Mentor",
      period: "Feb 2024 - Aug 2024",
      category: "User Success & Engagement",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-400 to-purple-400",
      impact: {
        metric1: "Multiple Mentees",
        metric2: "Goal Achievement",
        metric3: "Performance Growth"
      },
      challenge: "How do you help students not just maintain their grades, but actually thrive? I needed to create an environment that was supportive yet kept them accountable for their growth.",
      approach: [
        "Conducted one-on-one sessions to understand individual pain points and aspirations",
        "Created personalized development plans with measurable milestones",
        "Facilitated skill-building workshops and peer learning sessions",
        "Provided continuous feedback and motivation tracking progress",
        "Adapted mentoring approach based on each mentee's learning style"
      ],
      outcome: "Watching my mentees hit their academic goals and grow as individuals was incredibly rewarding. The structured guidance combined with genuine support made all the difference.",
      skills: ["User Research", "Empathy & Communication", "Goal Setting", "Performance Tracking", "Continuous Improvement"],
      keyLearnings: "Strengthened user-centric mindset and ability to understand pain points to create meaningful solutions that drive engagement and success."
    },
    {
      id: 4,
      title: "Information Systems Case Study Analysis",
      company: "BINUS University",
      role: "Case Study Club Member",
      period: "Feb 2024 - Jan 2025",
      category: "Business Analysis",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-purple-400 to-blue-400",
      impact: {
        metric1: "Team Collaboration",
        metric2: "Data-driven",
        metric3: "Digital Solutions"
      },
      challenge: "Working with my team to analyze real business cases and come up with digital solutions that actually make sense - that's what this club was all about. The challenge was turning complex problems into actionable strategies.",
      approach: [
        "Collaborated with cross-functional teams to break down business problems",
        "Conducted research and data analysis to identify key insights",
        "Proposed data-driven digital transformation strategies",
        "Presented findings and recommendations to stakeholders",
        "Refined analytical and critical thinking skills through iterative case discussions"
      ],
      outcome: "Through multiple real-world business scenarios, I built strong analytical frameworks and learned how powerful collaborative problem-solving can be when you have the right team.",
      skills: ["Business Analysis", "Teamwork", "Critical Thinking", "Data Analysis", "Problem Solving"],
      keyLearnings: "Enhanced ability to translate business problems into actionable digital solutions through structured analysis and team collaboration."
    }
  ];

  const productPhilosophy = {
    title: "My Product Philosophy",
    principles: [
      {
        icon: <Target className="w-5 h-5" />,
        title: "User-Centered Thinking",
        description: "I believe every product decision should start with really understanding what users need, what frustrates them, and what they're trying to achieve"
      },
      {
        icon: <Rocket className="w-5 h-5" />,
        title: "Data-Driven Decisions",
        description: "I combine what users needs with what the technical capabilities can provide - that's how I validate assumptions and actually measure if we're defining a great solution"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Collaborative Excellence",
        description: "Great products don't happen in a day - they need effective teamwork across functions and crystal-clear communication"
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Continuous Improvement",
        description: "I'm a big believer in feedback loops and Agile principles - products should always be evolving and getting better"
      }
    ]
  };

  const skills = {
    product: ["Requirement Gathering", "User Research", "Product Documentation", "Stakeholder Management", "Agile/Scrum"],
    technical: ["UML Modeling", "Process Mapping", "Technical Writing", "Data Analysis", "UI/UX Principles"],
    tools: ["Asana", "Microsoft Teams", "SharePoint", "Flowchart Maker", "AI Tools (Claude, ChatGPT)"],
    soft: ["Cross-functional Collaboration", "Problem Solving", "Communication", "Analytical Thinking", "Adaptability"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            {/* <Sparkles className="w-6 h-6 animate-pulse" /> */}
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Project Portfolio</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Olivia Augusta Soeyatno</h1>
          <p className="text-xl text-indigo-100 mb-6 max-w-3xl">
            Information Systems Student | Passionate about creating user-centered products that are game changers for both organizations and society
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Award className="w-4 h-4" />
              <span>GPA 3.91 | SIS Outstanding Student 2024 & 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Briefcase className="w-4 h-4" />
              <span>PM Intern @ PT Kalbe Farma</span>
            </div>
            <a  href="/cv.pdf" target="_blank" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm hover: hover:cursor-pointer">
              <RiProfileLine className="w-4 h-4" />
              <span>Access My CV Here</span>
            </a>
          </div>
        </div>
      </div>

      {/* Product Philosophy Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{productPhilosophy.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {productPhilosophy.principles.map((principle, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-indigo-600 mt-1">{principle.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Projects & Experience</h2>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.company} • {project.role}</p>
                      <p className="text-xs opacity-75 mt-1">{project.period}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">{project.impact.metric1}</div>
                    <div className="text-xs opacity-75">Scope</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">{project.impact.metric2}</div>
                    <div className="text-xs opacity-75">Team Type</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">{project.impact.metric3}</div>
                    <div className="text-xs opacity-75">Methodology</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b">
                  {['overview', 'approach', 'learnings'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setSelectedProject(project.id);
                      }}
                      className={`px-4 py-2 font-medium transition-all ${
                        activeTab === tab && selectedProject === project.id
                          ? 'text-indigo-600 border-b-2 border-indigo-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab === 'overview' ? 'Overview' : tab === 'approach' ? 'Approach' : 'Key Learnings'}
                    </button>
                  ))}
                </div>

                {/* Content */}
                {selectedProject === project.id && (
                  <div className="space-y-4">
                    {activeTab === 'overview' && (
                      <>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-indigo-600" />
                            Challenge
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            Outcome
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{project.outcome}</p>
                        </div>
                      </>
                    )}

                    {activeTab === 'approach' && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-purple-600" />
                          My Approach
                        </h4>
                        <ul className="space-y-2">
                          {project.approach.map((step, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-gray-600">
                              <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'learnings' && (
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-indigo-600" />
                          Key Learnings
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">{project.keyLearnings}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, idx) => (
                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-indigo-700 shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedProject !== project.id && (
                  <button
                    onClick={() => {
                      setSelectedProject(project.id);
                      setActiveTab('overview');
                    }}
                    className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-2 transition-colors"
                  >
                    View Details <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills & Competencies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 capitalize text-lg">
                {category === 'product' ? 'Product Management' : 
                 category === 'technical' ? 'Technical Skills' :
                 category === 'tools' ? 'Tools & Platforms' : 'Soft Skills'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium border border-indigo-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect and Create Amazing Projects Together</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto text-sm">
            I&apos;m highly motivated to apply analytical thinking, communication and digital skills to build impactful user-centered products that create value for organizations and society
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:oliviaaugusta11@gmail.com" className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colorst text-sm">
              Contact Me
            </a>
            <a href="https://www.linkedin.com/in/olivia-augusta-soeyatno" target="_blank" rel="noopener noreferrer" className="bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-sm">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};