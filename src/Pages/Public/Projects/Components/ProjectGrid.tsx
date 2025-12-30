const ProjectGrid = () => {
  const internationalProjects = [
    {
      id: 1,
      title: "UMAMA",
      company: "Management & Strategy Consulting",
      description: [
        "NGO working for marine & coastal conservation at Comoros Island (East Africa) which is administered by France.",
        "Research alternative to Sand Mining-marine degradation- we have to find alternative to sand mining+ economical preachable",
        "Doing Research on Waste disposal system strategy-marine pollution, waste generation, garbage produced."
      ],
      duration: "July'23- December'23",
      category: "International"
    },
    {
      id: 2,
      title: "Charity Centre for Children & Youth Development",
      company: "Strategy Consulting",
      description: [
        "NGO Operated by Zambia country for the welfare of orphans & vulnerable children",
        "Providing them the market research with focus on improving education in Zambia.",
        "Designing a creative pitch deck to showcase to angel investors.",
        "Helping in the Database Management & Startup Scounting of International Client"
      ],
      duration: "July'23- November'23",
      category: "International"
    },
    {
      id: 3,
      title: "TeenHive",
      company: "Management consulting for a US based startup",
      description: [
        "Teen Hive is a US based ed tech startup",
        "Developing comprehensive business strategy & plan",
        "Providing market research & analysis for upcoming trends in ed tech",
        "Guiding them in growth and expansion in the market."
      ],
      duration: "April'23-July'23",
      category: "International"
    }
  ];

  const domesticProjects = [
    {
      id: 4,
      title: "Zuno General Insurance",
      company: "Strategy Consulting & GTM",
      description: [
        "Spearheaded a Go-To-Market (GTM) consulting engagement focused on market entry strategy, sectoral benchmarking, and regulatory analysis for Surety Bonds",
        "Benchmarked global vs. Indian markets to assess Surety Bond viability and identify strategic partnerships",
        "Led primary research and sector mapping to validate demand drivers and enable data-backed market entry",
        "Mapped ecosystem dynamics and intermediaries to define optimal distribution channels and target segments",
        "Designed frameworks linking Surety Bonds with CAR/EAR policies to drive client acquisition and growth"
      ],
      duration: "FEB'25- MAR'25",
      category: "Domestic",
      roles: [
        "Zuno Chief Product Officer) → Strategic oversight, executive sponsorship, final deliverable validation",
        "Manager of Commercial Projects → Project governance, operational alignment, primary client liaison",
        "Engagement Lead (1) → Workstream ownership, strategic guidance, stakeholder management, quality review",
        "Consultants (4) → Core research execution, data analysis, framework development, synthesis of insights"
      ]
    },
    {
      id: 5,
      title: "Maynabagh",
      company: "",
      description: [
        "Maynabagh is a Noida-based B2C startup by Ms. Vibhuti Jain.",
        "Consulting it with growth and competitive strategy related domains.",
        "Included digital marketing and categorization of the manufactured products.",
        "Looking for solutions to attain 1-day delivery of the products."
      ],
      duration: "",
      category: "Domestic"
    },
    {
      id: 6,
      title: "Shubhakshika",
      company: "Education, welfare, rehabilitation, and holistic child development.",
      description: [
        "Provide them with extravagant marketing strategies in order to promote it on various social media platforms. We also help them with CSR funding strategy for expansion and structuring of funds for the prosperity of the NCO."
      ],
      duration: "Jan'22-June'22",
      category: "Domestic"
    },
    {
      id: 7,
      title: "Accurate Component",
      company: "Management consulting for a startup",
      description: [
        "Consulting it with producing quality goods and render prompt service to their buyers. DCG assisted the organization by helping with Database Management, Client Calling and Lead Generation.",
        "The internship helped the students to understand the requirements of an Agro-Tractor sector."
      ],
      duration: "Feb'22-April'22",
      category: "Domestic"
    },
    {
      id: 8,
      title: "Yellow Club",
      company: "Management and Strategic Consulting",
      description: [
        "Provided assistance in market and business analysis",
        "Analyzed customer base, profit niches and devised a go to market strategy.",
        "Provided better user experience while increasing profits."
      ],
      duration: "July'20-January'21",
      category: "Domestic"
    },
    {
      id: 9,
      title: "Techlogical Enterprises LLP",
      company: "Operations and Management Consulting",
      description: [
        "Assessed marketing strategies by using knowledge of market characterstics, cost and markup factors, company objectives.",
        "Managed mock product distribution by formulating strategies through contractors, vendors and distributors."
      ],
      duration: "February'21-August'21",
      category: "Domestic"
    },
    {
      id: 10,
      title: "Zipper Minds",
      company: "Business and Strategic Consulting",
      description: [
        "Conducted thorough market research, analyzed competitors both domestic and international.",
        "Utilized frameworks to gather precise data, interpreting audience insights through direct nutritionist engagement.",
        "Assisted startup with detailed primary and secondary market research."
      ],
      duration: "January'24-March'24",
      category: "Domestic"
    }
  ];

  const technicalProjects = [
    {
      id: 11,
      title: "Strategic Execution Consultants",
      company: "Technical and Strategic Consulting",
      description: [
        "Collaborated with senior AI researchers and developers on on-going projects.",
        "Developed and refined AI models for accurate and efficient solutions.",
        "Researched emerging AI technologies to enhance their capabilities."
      ],
      duration: "November'23 - Present",
      category: "Technical"
    },
    {
      id: 12,
      title: "Impresario Global Limited",
      company: "Strategic & Technical Consulting for Social Impact Company",
      description: [
        "Collected data on issues within specific assigned pincode in Delhi.",
        "Compiled and organized data in a structured format for interaction.",
        "Assisted in identifying areas that require attention and potential solutions.",
        "Performed Data Analysis to obtain useful inferences."
      ],
      duration: "December'23 - March'24",
      category: "Technical"
    },
    {
      id: 13,
      title: "IATSAT",
      company: "Technical and Business Consulting",
      description: [
        "Managed 50K+ school database, acquired clients using MS office, PowerBI, SQL, and outreach strategies.",
        "Redesigned website with NodeJS, JavaScript, HTML, CSS for enhanced interaction.",
        "Developed social media growth strategy to boost engagement and visibility."
      ],
      duration: "July'23 - December'23",
      category: "Technical"
    }
  ];

  const ngoProjects = [
    {
      id: 14,
      title: "Pehchaan",
      company: "Strategy Consulting",
      description: [
        "Enhanced NGO visibility by 28.45% via SEO techniques, fostering government and private partnerships.",
        "Built a comprehensive CSR database, maximizing NGO benefits and exploring partnership opportunities.",
        "Developed streamlined pitch deck, showcasing achievements and facilitating efficient partnership processes."
      ],
      duration: "April'23 - July'23",
      category: "NGO"
    },
    {
      id: 15,
      title: "eVidyaloka",
      company: "",
      description: [
        "eVidyaloka is a not-for-profit organization that aims to transform the rural educational landscape of India.",
        "DCG collaborated with E- Vidyaloka to provide free education to underprivileged students.",
        "Our members prepared worksheets, assignments and taught students from all over India through online mode."
      ],
      duration: "Sept'21-Feb'22",
      category: "NGO"
    },
    {
      id: 16,
      title: "Humans for Humanity",
      company: "",
      description: [
        "Founded by renowned social worker Anurag Chauhan, it is working to bring awareness about menstrual health, hygiene among women across India.",
        "Provide different marketing strategies for different platforms, CSR funding.",
        "Provide different strategies for the establishment of manufacturing units of pads in order to uplift the employment for women."
      ],
      duration: "Jan'22-Aug'22",
      category: "NGO"
    }
  ];
  return (
    <div>
      {/* International Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#020F59] mb-8">INTERNATIONAL PROJECTS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#020F59]/10 flex items-center justify-center">
                  <i className={`fas fa-globe text-[#020F59] text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#020F59]">
                    {project.title}
                  </h3>
                  {project.company && (
                    <span className="text-sm font-medium text-gray-600">
                      {project.company}
                    </span>
                  )}
                </div>
              </div>
              {/* Render description as list if it's an array */}
              {Array.isArray(project.description) ? (
                <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-sm">{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
              )}
              {project.duration && (
                <div className="flex justify-end">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {project.duration}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Domestic Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#020F59] mb-8">DOMESTIC PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {domesticProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#020F59]/10 flex items-center justify-center">
                  <i className={`fas fa-building text-[#020F59] text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#020F59]">
                    {project.title}
                  </h3>
                  {project.company && (
                    <span className="text-sm font-medium text-gray-600">
                      {project.company}
                    </span>
                  )}
                </div>
              </div>
              {/* Render description as list if it's an array */}
              {Array.isArray(project.description) ? (
                <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-sm">{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
              )}
              {project.roles && (
                <div className="mb-4 bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-[#020F59] mb-2">Team Execution Model:</p>
                  <ul className="text-xs text-gray-700 space-y-1 list-disc pl-4">
                    {project.roles.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.duration && (
                <div className="flex justify-end">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {project.duration}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#020F59] mb-8">TECHNICAL PROJECTS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#020F59]/10 flex items-center justify-center">
                  <i className={`fas fa-laptop-code text-[#020F59] text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#020F59]">
                    {project.title}
                  </h3>
                  {project.company && (
                    <span className="text-sm font-medium text-gray-600">
                      {project.company}
                    </span>
                  )}
                </div>
              </div>
              {Array.isArray(project.description) ? (
                <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-sm">{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
              )}
              {project.duration && (
                <div className="flex justify-end">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {project.duration}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* NGOs Section */}
      <section>
        <h2 className="text-3xl font-bold text-[#020F59] mb-8">NGOs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngoProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#020F59]/10 flex items-center justify-center">
                  <i className={`fas fa-hands-helping text-[#020F59] text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#020F59]">
                    {project.title}
                  </h3>
                  {project.company && (
                    <span className="text-sm font-medium text-gray-600">
                      {project.company}
                    </span>
                  )}
                </div>
              </div>
              {Array.isArray(project.description) ? (
                <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-sm">{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
              )}
              {project.duration && (
                <div className="flex justify-end">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {project.duration}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectGrid
