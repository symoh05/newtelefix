// app/portfolio/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Project data
const projectsData = [
  {
    number: 1,
    owner: "Tumaini Brooks School",
    org: "Turn-point Church & Tumaini Children's Home",
    scope: "15HP Borehole solarizing, 5KVA School solar Power, School solar water heating",
    contact: "Bishop David Hinga / Dr. Alice Hinga",
    phone: "0722669033 / 0722665383",
    email: "davidhinga@yahoo.com / ahinga1@gmail.com",
    value: "KES 3,050,000",
    category: ["solar", "borehole", "water", "school", "church"]
  },
  {
    number: 2,
    owner: "Faith Premier High School",
    org: "Overcomers Faith Church, HappyLife Childrens Home, HappyLife school",
    scope: "Supply and installation of solar Power and lighting systems for the institutions",
    contact: "Bishop Peter Ndung'u / Pastor Njiiri",
    phone: "0711288115 / 0720685197",
    email: "peternjiiri@gmail.com",
    value: "KES 800,000",
    category: ["solar", "lighting", "school", "church"]
  },
  {
    number: 3,
    owner: "Verona Fathers - Comboni Missionaries",
    org: "Catholic Church - Verona Fathers",
    scope: "Solar water heaters servicing",
    contact: "Fr. Paulo Latorre",
    phone: "0722864597",
    email: "mccjproc@gmail.com",
    value: "KES 67,600",
    category: ["solar", "water", "church"]
  },
  {
    number: 4,
    owner: "Kikuyu Catholic Church - Kikuyu town Church",
    org: "Kikuyu Catholic Church",
    scope: "Supply and installation of solar lighting",
    contact: "Fr. Malema Kigaa",
    phone: "0726347956",
    email: "",
    value: "KES 250,000",
    category: ["lighting", "church"]
  },
  {
    number: 5,
    owner: "Kikuyu Catholic Church - Magoko Church",
    org: "Kikuyu Catholic Church",
    scope: "Supply and installation of solar lighting",
    contact: "Fr. Simone",
    phone: "0723472083",
    email: "",
    value: "KES 180,000",
    category: ["lighting", "church"]
  },
  {
    number: 6,
    owner: "Uhai water",
    org: "PCEA Nkoroi Church",
    scope: "5.5KW Borehole equipping and solar conversion",
    contact: "Mr. Onesmus Kimunya",
    phone: "0737438963",
    email: "kioneki2015@gmail.com",
    value: "KES 747,000",
    category: ["solar", "borehole", "water", "church"]
  },
  {
    number: 7,
    owner: "Rev. Musa Gitau Primary School",
    org: "PCEA Church - Kikuyu",
    scope: "Installation of 9mtr Tower - 40,000 Ltr capacity for Musa Gitau Pry Sch and Solar conversion for 7.5kW Borehole pump, Supply and installation of solar lighting",
    contact: "Principal / Mr. Joseph Njenga",
    phone: "0711933339",
    email: "revmusagitau@yahoo.com",
    value: "KES 4,000,000",
    category: ["solar", "borehole", "water", "lighting", "school", "church"]
  },
  {
    number: 8,
    owner: "Runda Water",
    org: "Runda Community Project",
    scope: "Supply and installation of solar lighting",
    contact: "Mr. Cleophas Agingu",
    phone: "0720201812",
    email: "gmanager@rundawater.co.ke",
    value: "KES 82,000",
    category: ["lighting", "water", "community"]
  },
  {
    number: 9,
    owner: "Karaba Farms",
    org: "Embu Karaba Farms",
    scope: "Supply and installation of 8KW Solar Power system, borehole pump equipment, Solarization of 5.5KW Borehole system",
    contact: "Manager Mburu Ngugi",
    phone: "0774076886",
    email: "",
    value: "KES 2,000,000",
    category: ["solar", "borehole", "water", "commercial"]
  },
  {
    number: 10,
    owner: "Jacob's Well Shamata",
    org: "Mailo Inya Nyahururu",
    scope: "Borehole Drilling, Borehole Pump equipping, Solarization of 7.5kw Borehole system",
    contact: "Manager Njuguna Karita",
    phone: "0716306453",
    email: "",
    value: "KES 2,700,000",
    category: ["borehole", "water", "solar", "commercial"]
  },
  {
    number: 11,
    owner: "Mama Ngina Kenyatta Childrens' Home",
    org: "Child Welfare society of Kenya",
    scope: "Supply and installation of Solar lighting in Karen B, Waithaka, HQ, Mama Ngina Kenyatta, Nanyuki, Isiolo and Muranga Branches",
    contact: "Jeniffer Oloo",
    phone: "0710599656",
    email: "jennyooro@gmail.com / jenipher@childwelfaremail.co.ke",
    value: "KES 806,000",
    category: ["lighting"]
  },
  {
    number: 12,
    owner: "Karen Miotoni estate",
    org: "Community project - Karen Miotoni",
    scope: "Supply and installation of solar lighting",
    contact: "Jane Harel",
    phone: "0733618838",
    email: "junedecor@yahoo.com",
    value: "KES 96,000",
    category: ["lighting", "community"]
  },
  {
    number: 13,
    owner: "Roy Hauliers",
    org: "Roy Transporters",
    scope: "Supply and installation of solar lighting",
    contact: "Peter",
    phone: "0725205577",
    email: "Peter@royhauliers.com",
    value: "KES 230,000",
    category: ["lighting", "commercial"]
  },
  {
    number: 14,
    owner: "Ngumi Water Project",
    org: "Muguga Community Project",
    scope: "15HP Borehole solarizing",
    contact: "Mr. Njau Ng'ang'a",
    phone: "0723670198",
    email: "",
    value: "KES 1,789,500",
    category: ["solar", "borehole", "water", "community"]
  },
  {
    number: 15,
    owner: "Spring of Hope in Life",
    org: "Childrens' Home - Mbirika (US donated project)",
    scope: "5KVA Solar power system for the Home",
    contact: "Rev. Shigonde",
    phone: "0725311133",
    email: "",
    value: "KES 392,000",
    category: ["solar", "community"]
  },
  {
    number: 16,
    owner: "Wahundura High School",
    org: "County Government school",
    scope: "Solar water heating supply and installation",
    contact: "Mr. Muchiri Mukunga",
    phone: "0721673991",
    email: "mmukunga2007@yahoo.com",
    value: "KES 380,000",
    category: ["solar", "water", "school"]
  },
  {
    number: 17,
    owner: "BlueBird Aviation Ltd",
    org: "Private airline",
    scope: "Supply and installation of solar lighting, Solar water heating, Solar Power installation and maintenance",
    contact: "Col(Rtd) Farah",
    phone: "0732189000",
    email: "husseinfarah.a@gmail.com",
    value: "KES 450,000",
    category: ["solar", "lighting", "water", "commercial"]
  },
  {
    number: 18,
    owner: "Hawa Children's Home",
    org: "PCEA St. Andrews Church - PCMF",
    scope: "Borehole maintenance and motor replacement",
    contact: "Paul Mwangi",
    phone: "0722758024",
    email: "",
    value: "KES 250,000",
    category: ["borehole", "water", "church"]
  },
  {
    number: 19,
    owner: "Nyakianda Water Project",
    org: "1-Acre Thamanda community water project",
    scope: "10HP Borehole pump solarizing",
    contact: "Mr. Muthama",
    phone: "0721447007",
    email: "",
    value: "KES 1,181,000",
    category: ["solar", "borehole", "water", "community"]
  },
  {
    number: 20,
    owner: "Immanuel Africa Children's Home & New Aubrey School Lusengeti",
    org: "Immanuel Africa Ministries & New Aubrey Lusengeti",
    scope: "10HP Borehole pump equipping & solar conversion, 5KW Solar Power for I-Africa Ministries & New Aubrey School",
    contact: "Mr. Nduati Or / Bethany Mc Gibbon",
    phone: "0721558578 / 0114682210",
    email: "opinduati@gmail.com",
    value: "KES 1,300,000",
    category: ["solar", "borehole", "water", "school", "church"]
  },
  {
    number: 21,
    owner: "Catholic Missionaries HQ - Karen",
    org: "Catholic Missionaries HQ - Karen",
    scope: "Supply and installation of solar lighting",
    contact: "Fr. Peter M. Mbocha",
    phone: "0721356089",
    email: "",
    value: "KES (Not specified)",
    category: ["lighting", "church"]
  },
  {
    number: 22,
    owner: "De Paul Centre Catholic Seminary Karen",
    org: "De Paul Centre Catholic Seminary Karen",
    scope: "Supply and installation of solar lighting",
    contact: "Fr. JohnBosco Idiama",
    phone: "0722486938",
    email: "idiamajohnbosco@yahoo.com",
    value: "KES 405,000",
    category: ["lighting", "church"]
  },
  {
    number: 23,
    owner: "Uthiru Genesis Schools Kamangu (Ndarakwa)",
    org: "Uthiru Genesis Schools Kamangu (Ndarakwa)",
    scope: "Supply and installation of 5KW Solar power system to support the school operations and solar lights in School compound",
    contact: "Mr. Samuel Gitau",
    phone: "0722272838",
    email: "samuelgitauk@gmail.com",
    value: "KES 782,000",
    category: ["solar", "lighting", "school"]
  },
  {
    number: 24,
    owner: "St. Lawrence University Kenya Campus",
    org: "Funded by MasterCard Foundation & St. Lawrence University US",
    scope: "Installation of 40VA and 90kWH Lithium battery capacity institutional Solar power system",
    contact: "Mr. Sinnary",
    phone: "0722310966",
    email: "asinnary@stlawu.edu",
    value: "KES 6,500,000",
    category: ["solar", "school"]
  },
  {
    number: 25,
    owner: "AIC Ndarakwa Children's Center",
    org: "AIC Church Ndarakwa",
    scope: "Supply and installation of 5KW with 7.2kWH Solar power system to support the organization",
    contact: "Manager Jane",
    phone: "0723128638",
    email: "ke734aicndarakwa@gmail.com",
    value: "KES 787,000",
    category: ["solar", "church"]
  },
  {
    number: 26,
    owner: "Podo Water Project",
    org: "Muguga Community Project",
    scope: "10HP Borehole solarizing",
    contact: "Mr. Peter Kamweti",
    phone: "0722721408",
    email: "peterkaranja81@gmail.com",
    value: "KES 933,000",
    category: ["solar", "borehole", "water", "community"]
  },
  {
    number: 27,
    owner: "Olooitikoshi Delights",
    org: "Birika Farm",
    scope: "7.5HP Borehole Solar conversion and 5kw with 5kwh storage solar system",
    contact: "Joseph Muongeri",
    phone: "0722819915 / 0721605965",
    email: "",
    value: "KES 1,200,000",
    category: ["solar", "borehole", "water", "commercial"]
  },
  {
    number: 28,
    owner: "Samkara Agencies",
    org: "Samkara Insurance agencies",
    scope: "7.5HP Borehole Solar conversion and 5kw with 5kwh storage solar system",
    contact: "Peter Kinyanjui",
    phone: "0738244632",
    email: "",
    value: "KES 850,000",
    category: ["solar", "borehole", "water", "commercial"]
  },
  {
    number: 29,
    owner: "Kent UK Homes",
    org: "Kenya Based",
    scope: "5kw with 5kwh storage solar system",
    contact: "James Mbogoro",
    phone: "0713676040",
    email: "",
    value: "KES 895,000",
    category: ["solar", "commercial"]
  },
  {
    number: 30,
    owner: "Mombasa Trade Centre",
    org: "Formerly Ambalal House",
    scope: "Supply of solar lights",
    contact: "Mr. Zahir Jiwan",
    phone: "0722410422",
    email: "zj@ikenya.com",
    value: "KES 250,000",
    category: ["lighting", "commercial"]
  },
  {
    number: 31,
    owner: "Food For Education",
    org: "NGO feeding schools",
    scope: "Solar power & water heaters supply for kitchens countrywide",
    contact: "Miss Jemmimah",
    phone: "0721296122",
    email: "jemimah@food4education.org",
    value: "KES 6,500,000",
    category: ["solar", "water", "school"]
  },
  {
    number: 32,
    owner: "Hiari Project by US donors",
    org: "Elang'ata Enkima Primary school",
    scope: "Solarization of 7.5HP/5.5KW Borehole system",
    contact: "Christine Busby",
    phone: "+1(714)3906935",
    email: "josephlengete@gmail.com",
    value: "KES 1,200,000",
    category: ["solar", "borehole", "water", "school"]
  },
  {
    number: 33,
    owner: "Plantech Farms & Residence",
    org: "Naivasha farms",
    scope: "Solarization of 10HP/7.5KW &7.5HP/5.5KW Borehole system",
    contact: "Mr. Mureithi",
    phone: "0722886217",
    email: "",
    value: "KES 3,200,000",
    category: ["solar", "borehole", "water", "commercial"]
  },
  {
    number: 34,
    owner: "Watken Apartments",
    org: "Watken Thogoto, Kikuyu",
    scope: "Solarization of 10HP/7.5KW Borehole system & solar lighting system",
    contact: "Mrs. Jane Njoroge",
    phone: "0720384469",
    email: "",
    value: "KES 850,000",
    category: ["solar", "borehole", "water", "lighting", "commercial"]
  },
  {
    number: 35,
    owner: "Vitech College",
    org: "Water project and Directors Residence",
    scope: "Solarization of 7.5HP/5.5KW Borehole system",
    contact: "Mr. Duncan Mbugua",
    phone: "0722781190",
    email: "",
    value: "KES 640,000",
    category: ["solar", "borehole", "water", "school"]
  },
  {
    number: 36,
    owner: "Kithimani Farm",
    org: "Kithimani Homes and Farm",
    scope: "Farm solar power system and irrigation",
    contact: "Abdi Mohammed",
    phone: "0722822768",
    email: "",
    value: "KES 350,000",
    category: ["solar", "water", "commercial"]
  },
  {
    number: 37,
    owner: "UHC Medical Centre",
    org: "Upperhill Medical Centre",
    scope: "Supply and installation of solar lights at UHC Centre",
    contact: "Mr. Kennedy Kimani",
    phone: "0720446191",
    email: "",
    value: "KES 487,500",
    category: ["lighting", "commercial"]
  },
  {
    number: 38,
    owner: "Alliance Media",
    org: "Alliance Media",
    scope: "Supply of solar lights for outdoor advertising billboards",
    contact: "Marting Gatua",
    phone: "0717457333",
    email: "",
    value: "KES 1,360,000",
    category: ["lighting", "commercial"]
  },
  {
    number: 39,
    owner: "Cylinder Works",
    org: "Cylinder works",
    scope: "Supply and installation of solar lights at the factory",
    contact: "Mr. Martin Ng'ang'a",
    phone: "0704986802",
    email: "",
    value: "KES 730,000",
    category: ["lighting", "commercial"]
  }
];

// Get unique categories
const allCategories = ['all', ...new Set(projectsData.flatMap(p => p.category))];
const categoryLabels: Record<string, string> = {
  'all': 'All Projects',
  'solar': 'Solar',
  'borehole': 'Borehole',
  'water': 'Water',
  'lighting': 'Lighting',
  'school': 'Schools',
  'church': 'Churches',
  'community': 'Community',
  'commercial': 'Commercial'
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [sortColumn, setSortColumn] = useState('number')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter and sort projects
  const filteredProjects = projectsData
    .filter(project => {
      const matchesFilter = filter === 'all' || project.category.includes(filter)
      const matchesSearch = search === '' || 
        `${project.number} ${project.owner} ${project.org} ${project.scope} ${project.contact} ${project.phone} ${project.email}`
          .toLowerCase()
          .includes(search.toLowerCase())
      return matchesFilter && matchesSearch
    })
    .sort((a, b) => {
      let aVal: any = a[sortColumn as keyof typeof a]
      let bVal: any = b[sortColumn as keyof typeof b]
      
      if (sortColumn === 'number') {
        aVal = a.number
        bVal = b.number
      } else if (sortColumn === 'value') {
        aVal = parseFloat(a.value.replace(/[^\d.]/g, '')) || 0
        bVal = parseFloat(b.value.replace(/[^\d.]/g, '')) || 0
      }
      
      if (sortDirection === 'asc') {
        return aVal < bVal ? -1 : aVal > bVal ? 1 : 0
      } else {
        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0
      }
    })

  const getCategoryBadge = (cat: string) => {
    const colors: Record<string, string> = {
      solar: 'bg-[#5ABE71]/15 text-[#5ABE71]',
      borehole: 'bg-[#012156]/15 text-[#012156]',
      water: 'bg-blue-100 text-blue-700',
      lighting: 'bg-yellow-100 text-yellow-700',
      school: 'bg-[#012156]/15 text-[#012156]',
      church: 'bg-purple-100 text-purple-700',
      community: 'bg-green-100 text-green-700',
      commercial: 'bg-orange-100 text-orange-700'
    }
    return colors[cat] || 'bg-gray-100 text-gray-700'
  }

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />

        {/* ===== PORTFOLIO HERO ===== */}
        <section className="relative py-12 md:py-16 pt-32 sm:pt-28 lg:pt-32">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            style={{
              fontSize: 'clamp(60px, 12vw, 140px)',
              fontWeight: '900',
              color: 'rgba(1, 33, 86, 0.05)',
              letterSpacing: 'clamp(5px, 2vw, 15px)',
              fontFamily: "'Orbitron', monospace",
              whiteSpace: 'nowrap',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            PORTFOLIO
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Our <span className="text-gray-500">Portfolio</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Completed Projects Across Kenya - Solar, Water, and ICT Solutions
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="py-6">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Our Impact <span className="text-gray-500">in Numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-project-diagram text-xl text-[#5ABE71]"></i>
              </div>
              <div className="text-2xl font-bold text-[#012156] font-['Orbitron']">39</div>
              <p className="text-gray-500 text-xs font-['Ubuntu']">Completed Projects</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-sun text-xl text-[#5ABE71]"></i>
              </div>
              <div className="text-2xl font-bold text-[#012156] font-['Orbitron']">28</div>
              <p className="text-gray-500 text-xs font-['Ubuntu']">Solar Projects</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-water text-xl text-[#5ABE71]"></i>
              </div>
              <div className="text-2xl font-bold text-[#012156] font-['Orbitron']">16</div>
              <p className="text-gray-500 text-xs font-['Ubuntu']">Water Projects</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-building text-xl text-[#5ABE71]"></i>
              </div>
              <div className="text-2xl font-bold text-[#012156] font-['Orbitron']">24</div>
              <p className="text-gray-500 text-xs font-['Ubuntu']">Institutional Clients</p>
            </div>
          </div>
        </section>

        {/* ===== FILTERS & SEARCH ===== */}
        <section className="py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-list text-[#012156] text-sm"></i>
              <span className="text-sm font-['Orbitron'] text-[#012156] tracking-wider">Filter:</span>
            </div>
            <div className="flex-1 overflow-x-auto scrollbar-hide pb-2">
              <div className="flex gap-2 min-w-max">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-['Orbitron'] tracking-wider whitespace-nowrap transition-all ${
                      filter === cat
                        ? 'bg-[#012156] text-white shadow-md'
                        : 'bg-[#012156]/10 text-[#012156] hover:bg-[#012156]/20'
                    }`}
                  >
                    {categoryLabels[cat] || cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5ABE71] focus:ring-2 focus:ring-[#5ABE71]/20 transition-all bg-white"
              />
            </div>
            <div className="text-sm text-gray-500 font-['Ubuntu']">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </div>
          </div>
        </section>

        {/* ===== PROJECTS TABLE - WITH HORIZONTAL SCROLL ===== */}
        <section className="py-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-[#012156]/5">
                  <th 
                    className="text-left py-3 px-3 font-['Orbitron'] text-xs text-[#012156] cursor-pointer hover:text-[#5ABE71] transition-colors border border-gray-200 whitespace-nowrap"
                    onClick={() => handleSort('number')}
                  >
                    # {sortColumn === 'number' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="text-left py-3 px-3 font-['Orbitron'] text-xs text-[#012156] cursor-pointer hover:text-[#5ABE71] transition-colors border border-gray-200 whitespace-nowrap"
                    onClick={() => handleSort('owner')}
                  >
                    Project Owner {sortColumn === 'owner' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="text-left py-3 px-3 font-['Orbitron'] text-xs text-[#012156] cursor-pointer hover:text-[#5ABE71] transition-colors border border-gray-200 whitespace-nowrap"
                    onClick={() => handleSort('scope')}
                  >
                    Project Scope {sortColumn === 'scope' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="text-left py-3 px-3 font-['Orbitron'] text-xs text-[#012156] cursor-pointer hover:text-[#5ABE71] transition-colors border border-gray-200 whitespace-nowrap"
                    onClick={() => handleSort('contact')}
                  >
                    Contact {sortColumn === 'contact' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="text-left py-3 px-3 font-['Orbitron'] text-xs text-[#012156] cursor-pointer hover:text-[#5ABE71] transition-colors border border-gray-200 whitespace-nowrap"
                    onClick={() => handleSort('value')}
                  >
                    Value {sortColumn === 'value' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left py-3 px-3 font-['Orbitron'] text-xs text-[#012156] border border-gray-200 whitespace-nowrap">View</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-500 font-['Ubuntu'] border border-gray-200">
                      <i className="fas fa-search text-2xl block mb-2 text-gray-300"></i>
                      No projects found. Try adjusting your search or filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredProjects.map((project) => (
                    <tr key={project.number} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 font-['Orbitron'] text-xs text-[#012156] border border-gray-200 whitespace-nowrap">{project.number}</td>
                      <td className="py-3 px-3 border border-gray-200 min-w-[180px]">
                        <div className="font-semibold text-[#012156] text-sm font-['Ubuntu'] whitespace-normal break-words">{project.owner}</div>
                        <div className="text-gray-500 text-xs font-['Ubuntu'] whitespace-normal break-words">{project.org}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.category.slice(0, 3).map((cat) => (
                            <span key={cat} className={`text-[9px] px-2 py-0.5 rounded-full ${getCategoryBadge(cat)} font-['Ubuntu']`}>
                              {categoryLabels[cat] || cat}
                            </span>
                          ))}
                          {project.category.length > 3 && (
                            <span className="text-[9px] text-gray-400 font-['Ubuntu']">+{project.category.length - 3}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-gray-600 text-xs font-['Ubuntu'] border border-gray-200 min-w-[200px] whitespace-normal break-words">{project.scope}</td>
                      <td className="py-3 px-3 border border-gray-200 min-w-[160px]">
                        <div className="text-[#012156] text-xs font-['Ubuntu'] whitespace-normal break-words">{project.contact}</div>
                        <div className="text-gray-500 text-[10px] font-['Ubuntu'] whitespace-normal break-words">{project.phone}</div>
                      </td>
                      <td className="py-3 px-3 font-['Orbitron'] text-xs text-[#5ABE71] border border-gray-200 whitespace-nowrap">{project.value}</td>
                      <td className="py-3 px-3 border border-gray-200 whitespace-nowrap">
                        <button
                          onClick={() => openModal(project)}
                          className="text-[#012156] hover:text-[#5ABE71] transition-colors"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== CTA SECTION - LEFT ALIGNED, SINGLE BUTTON ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-6 border border-gray-200 max-w-3xl">
            <h2 className="font-['Orbitron'] text-xl md:text-2xl font-bold text-[#012156] mb-3">
              Want to See Your Project <span className="text-gray-500">Here?</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mb-5 font-['Ubuntu']">
              Join our growing list of satisfied clients across Kenya. From solar installations to water solutions, we deliver professional services with proven results.
            </p>
            <Link href="/contact">
              <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-8 py-3 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                Start Your Project
              </button>
            </Link>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <Footer />
      </div>

      {/* ===== PROJECT MODAL ===== */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 p-6 pb-4 border-b border-gray-200 flex items-start justify-between">
              <div>
                <h2 className="font-['Orbitron'] text-xl font-bold text-[#012156]">{selectedProject.owner}</h2>
                <p className="text-gray-500 text-sm font-['Ubuntu']">{selectedProject.org}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-[#012156] transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Project Scope</h3>
                <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">{selectedProject.scope}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {selectedProject.category.map((cat) => (
                    <span key={cat} className={`text-[10px] px-2 py-0.5 rounded-full ${getCategoryBadge(cat)} font-['Ubuntu']`}>
                      {categoryLabels[cat] || cat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Contact Information</h3>
                <div className="space-y-1 text-sm font-['Ubuntu']">
                  <p className="text-gray-600"><span className="text-[#012156] font-semibold">Contact:</span> {selectedProject.contact}</p>
                  <p className="text-gray-600"><span className="text-[#012156] font-semibold">Phone:</span> {selectedProject.phone}</p>
                  {selectedProject.email && (
                    <p className="text-gray-600"><span className="text-[#012156] font-semibold">Email:</span> {selectedProject.email}</p>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Project Summary</h3>
                <div className="space-y-1 text-sm font-['Ubuntu']">
                  <p className="flex justify-between text-gray-600">
                    <span className="text-[#012156]">Project Number:</span>
                    <span>{selectedProject.number}</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span className="text-[#012156]">Contract Value:</span>
                    <span className="font-['Orbitron'] text-[#5ABE71]">{selectedProject.value}</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span className="text-[#012156]">Category:</span>
                    <span>{selectedProject.category.map(c => categoryLabels[c] || c).join(', ')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .break-words {
          word-break: break-word;
        }
        .whitespace-normal {
          white-space: normal;
        }
      `}</style>
    </div>
  )
}