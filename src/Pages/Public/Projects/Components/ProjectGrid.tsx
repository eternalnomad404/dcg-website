const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Social Media Strategy",
      company: "BETEE",
      description: [
        "Designed a comprehensive social media strategy for Instagram and LinkedIn.",
        "Curated content calendars, reels, and posts aligned with moment marketing trends.",
        "Identified growth opportunities using a 2x2 matrix.",
        "Conducted market surveys to support positioning."
      ],
      duration: "Jan - Mar 2025",
      lead: "Emma Johnson",
      coLead: "Michael Chen",
    },
    {
      id: 2,
      title: "Market Entry Strategy",
      company: "ZUNO",
      description:[
        "Mapped regulatory frameworks and uncovered a ₹1T market opportunity.",
        "Developed a phased market entry strategy combining surety bonds with CAR/EAR insurance.",
        "Quantified financial impact on loan approvals and creditworthiness."
      ],
        
      duration: "Feb - Apr 2025",
      lead: "Sophie Williams",
      coLead: "Alexander Petersen",
    },
    {
      id: 3,
      title: "Lead Generation Strategies",
      company: "SOCIAL24",
      description:[
        "Identified startups likely to allocate ₹50L+ for influencer campaigns.",
        "Created customized cold outreach frameworks.",
        "Conducted deep industry research on US convenience retail giants.",
        "Delivered company-wise SWOT and financial analysis."
      ],
      duration: "Mar - May 2025",
      lead: "Thomas Nielsen",
      coLead: "Olivia Garcia",
    },
    {
      id: 4,
      title: "Digital Marketing Plan",
      company: "RentOK",
      description:
        [
          "Performed pricing comparisons across competitors.",
          "Built financial models including CapEx, P&L, and ROI forecasts.",
          "Crafted a digital marketing plan with platform-specific content.",
          "Developed influencer collaboration and ad campaign strategies."
        ],
      duration: "Apr - Jun 2025",
      lead: "Daniel Andersen",
      coLead: "Isabella Kim",
    },
    {
      id: 5,
      title: "Developed Financial Models",
      company: "MarkupX",
      description:
        [
          "Developed financial projections for MarkupX, suppliers, and creators.",
          "Built a customizable template for D2C brand planning.",
          "Included profitability metrics and key performance indicators."
        ],
      duration: "May - Jul 2025",
      lead: "Lucas Schmidt",
      coLead: "Sophia Patel",
    },
    {
      id: 6,
      title: "Multi-Channel Marketing",
      company: "NICHEBRAINS",
      description:
        [
          "Conducted in-depth competitor benchmarking.",
          "Designed multi-channel marketing and email campaigns.",
          "Launched referral and influencer-led growth initiatives.",
          "Tracked performance metrics and optimized user flows."
        ],
      duration: "Jun - Aug 2025",
      lead: "Mia Jørgensen",
      coLead: "Noah Wilson",
    },
    {
      id: 7,
      title: "Strengthened Brand Traction",
      company: "Concert Clone",
      description:
        [
          "Conducted competitor analysis and market positioning.",
          "Designed personalized email drip campaigns.",
          "Optimized user onboarding and referral incentives.",
          "Built a targeted content and outreach roadmap."
        ],
      duration: "Jun - Aug 2025",
      lead: "Mia Jørgensen",
      coLead: "Noah Wilson",
    },
    {
      id: 8,
      title: "Brand Strategy and Growth",
      company: "LILYPAD",
      description:
        [
          "Analyzed competitor landscape and identified positioning gaps.",
          "Curated a marketing content calendar and outreach strategy.",
          "Developed conversion-focused email campaigns.",
          "Suggested UX enhancements to boost retention."
        ],
      duration: "Jun - Aug 2025",
      lead: "Mia Jørgensen",
      coLead: "Noah Wilson",
    }
  ];
  return (
    <div>
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#020F59]/10 flex items-center justify-center">
                  <i className={`fas fa-building text-[#020F59] text-xl`}></i>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#020F59]">
                    {project.company}
                  </span>
                  <h3 className="text-xl font-bold text-[#020F59]">
                    {project.title}
                  </h3>
                </div>
              </div>
              {/* Render description as list if it's an array */}
              {Array.isArray(project.description) ? (
                <ul className="text-gray-600 mb-4 list-disc pl-5">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
              )}
              <div className="flex justify-end">
                <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                  {project.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectGrid
