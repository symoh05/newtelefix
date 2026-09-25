// app/portfolio/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ---- Project data (unchanged) ----
const projectsData = [
  { number: 1, owner: "Tumaini Brooks School", org: "Turn-point Church & Tumaini Children's Home", scope: "15HP Borehole solarizing, 5KVA School solar Power, School solar water heating", contact: "Bishop David Hinga / Dr. Alice Hinga", phone: "0722669033 / 0722665383", email: "davidhinga@yahoo.com / ahinga1@gmail.com", value: "KES 3,050,000", category: ["solar", "borehole", "water", "school", "church"] },
  { number: 2, owner: "Faith Premier High School", org: "Overcomers Faith Church, HappyLife Childrens Home, HappyLife school", scope: "Supply and installation of solar Power and lighting systems for the institutions", contact: "Bishop Peter Ndung'u / Pastor Njiiri", phone: "0711288115 / 0720685197", email: "peternjiiri@gmail.com", value: "KES 800,000", category: ["solar", "lighting", "school", "church"] },
  { number: 3, owner: "Verona Fathers - Comboni Missionaries", org: "Catholic Church - Verona Fathers", scope: "Solar water heaters servicing", contact: "Fr. Paulo Latorre", phone: "0722864597", email: "mccjproc@gmail.com", value: "KES 67,600", category: ["solar", "water", "church"] },
  { number: 4, owner: "Kikuyu Catholic Church - Kikuyu town Church", org: "Kikuyu Catholic Church", scope: "Supply and installation of solar lighting", contact: "Fr. Malema Kigaa", phone: "0726347956", email: "", value: "KES 250,000", category: ["lighting", "church"] },
  { number: 5, owner: "Kikuyu Catholic Church - Magoko Church", org: "Kikuyu Catholic Church", scope: "Supply and installation of solar lighting", contact: "Fr. Simone", phone: "0723472083", email: "", value: "KES 180,000", category: ["lighting", "church"] },
  { number: 6, owner: "Uhai water", org: "PCEA Nkoroi Church", scope: "5.5KW Borehole equipping and solar conversion", contact: "Mr. Onesmus Kimunya", phone: "0737438963", email: "kioneki2015@gmail.com", value: "KES 747,000", category: ["solar", "borehole", "water", "church"] },
  { number: 7, owner: "Rev. Musa Gitau Primary School", org: "PCEA Church - Kikuyu", scope: "Installation of 9mtr Tower - 40,000 Ltr capacity for Musa Gitau Pry Sch and Solar conversion for 7.5kW Borehole pump, Supply and installation of solar lighting", contact: "Principal / Mr. Joseph Njenga", phone: "0711933339", email: "revmusagitau@yahoo.com", value: "KES 4,000,000", category: ["solar", "borehole", "water", "lighting", "school", "church"] },
  { number: 8, owner: "Runda Water", org: "Runda Community Project", scope: "Supply and installation of solar lighting", contact: "Mr. Cleophas Agingu", phone: "0720201812", email: "gmanager@rundawater.co.ke", value: "KES 82,000", category: ["lighting", "water", "community"] },
  { number: 9, owner: "Karaba Farms", org: "Embu Karaba Farms", scope: "Supply and installation of 8KW Solar Power system, borehole pump equipment, Solarization of 5.5KW Borehole system", contact: "Manager Mburu Ngugi", phone: "0774076886", email: "", value: "KES 2,000,000", category: ["solar", "borehole", "water", "commercial"] },
  { number: 10, owner: "Jacob's Well Shamata", org: "Mailo Inya Nyahururu", scope: "Borehole Drilling, Borehole Pump equipping, Solarization of 7.5kw Borehole system", contact: "Manager Njuguna Karita", phone: "0716306453", email: "", value: "KES 2,700,000", category: ["borehole", "water", "solar", "commercial"] },
  { number: 11, owner: "Mama Ngina Kenyatta Childrens' Home", org: "Child Welfare society of Kenya", scope: "Supply and installation of Solar lighting in Karen B, Waithaka, HQ, Mama Ngina Kenyatta, Nanyuki, Isiolo and Muranga Branches", contact: "Jeniffer Oloo", phone: "0710599656", email: "jennyooro@gmail.com / jenipher@childwelfaremail.co.ke", value: "KES 806,000", category: ["lighting"] },
  { number: 12, owner: "Karen Miotoni estate", org: "Community project - Karen Miotoni", scope: "Supply and installation of solar lighting", contact: "Jane Harel", phone: "0733618838", email: "junedecor@yahoo.com", value: "KES 96,000", category: ["lighting", "community"] },
  { number: 13, owner: "Roy Hauliers", org: "Roy Transporters", scope: "Supply and installation of solar lighting", contact: "Peter", phone: "0725205577", email: "Peter@royhauliers.com", value: "KES 230,000", category: ["lighting", "commercial"] },
  { number: 14, owner: "Ngumi Water Project", org: "Muguga Community Project", scope: "15HP Borehole solarizing", contact: "Mr. Njau Ng'ang'a", phone: "0723670198", email: "", value: "KES 1,789,500", category: ["solar", "borehole", "water", "community"] },
  { number: 15, owner: "Spring of Hope in Life", org: "Childrens' Home - Mbirika (US donated project)", scope: "5KVA Solar power system for the Home", contact: "Rev. Shigonde", phone: "0725311133", email: "", value: "KES 392,000", category: ["solar", "community"] },
  { number: 16, owner: "Wahundura High School", org: "County Government school", scope: "Solar water heating supply and installation", contact: "Mr. Muchiri Mukunga", phone: "0721673991", email: "mmukunga2007@yahoo.com", value: "KES 380,000", category: ["solar", "water", "school"] },
  { number: 17, owner: "BlueBird Aviation Ltd", org: "Private airline", scope: "Supply and installation of solar lighting, Solar water heating, Solar Power installation and maintenance", contact: "Col(Rtd) Farah", phone: "0732189000", email: "husseinfarah.a@gmail.com", value: "KES 450,000", category: ["solar", "lighting", "water", "commercial"] },
  { number: 18, owner: "Hawa Children's Home", org: "PCEA St. Andrews Church - PCMF", scope: "Borehole maintenance and motor replacement", contact: "Paul Mwangi", phone: "0722758024", email: "", value: "KES 250,000", category: ["borehole", "water", "church"] },
  { number: 19, owner: "Nyakianda Water Project", org: "1-Acre Thamanda community water project", scope: "10HP Borehole pump solarizing", contact: "Mr. Muthama", phone: "0721447007", email: "", value: "KES 1,181,000", category: ["solar", "borehole", "water", "community"] },
  { number: 20, owner: "Immanuel Africa Children's Home & New Aubrey School Lusengeti", org: "Immanuel Africa Ministries & New Aubrey Lusengeti", scope: "10HP Borehole pump equipping & solar conversion, 5KW Solar Power for I-Africa Ministries & New Aubrey School", contact: "Mr. Nduati Or / Bethany Mc Gibbon", phone: "0721558578 / 0114682210", email: "opinduati@gmail.com", value: "KES 1,300,000", category: ["solar", "borehole", "water", "school", "church"] },
  { number: 21, owner: "Catholic Missionaries HQ - Karen", org: "Catholic Missionaries HQ - Karen", scope: "Supply and installation of solar lighting", contact: "Fr. Peter M. Mbocha", phone: "0721356089", email: "", value: "KES (Not specified)", category: ["lighting", "church"] },
  { number: 22, owner: "De Paul Centre Catholic Seminary Karen", org: "De Paul Centre Catholic Seminary Karen", scope: "Supply and installation of solar lighting", contact: "Fr. JohnBosco Idiama", phone: "0722486938", email: "idiamajohnbosco@yahoo.com", value: "KES 405,000", category: ["lighting", "church"] },
  { number: 23, owner: "Uthiru Genesis Schools Kamangu (Ndarakwa)", org: "Uthiru Genesis Schools Kamangu (Ndarakwa)", scope: "Supply and installation of 5KW Solar power system to support the school operations and solar lights in School compound", contact: "Mr. Samuel Gitau", phone: "0722272838", email: "samuelgitauk@gmail.com", value: "KES 782,000", category: ["solar", "lighting", "school"] },
  { number: 24, owner: "St. Lawrence University Kenya Campus", org: "Funded by MasterCard Foundation & St. Lawrence University US", scope: "Installation of 40VA and 90kWH Lithium battery capacity institutional Solar power system", contact: "Mr. Sinnary", phone: "0722310966", email: "asinnary@stlawu.edu", value: "KES 6,500,000", category: ["solar", "school"] },
  { number: 25, owner: "AIC Ndarakwa Children's Center", org: "AIC Church Ndarakwa", scope: "Supply and installation of 5KW with 7.2kWH Solar power system to support the organization", contact: "Manager Jane", phone: "0723128638", email: "ke734aicndarakwa@gmail.com", value: "KES 787,000", category: ["solar", "church"] },
  { number: 26, owner: "Podo Water Project", org: "Muguga Community Project", scope: "10HP Borehole solarizing", contact: "Mr. Peter Kamweti", phone: "0722721408", email: "peterkaranja81@gmail.com", value: "KES 933,000", category: ["solar", "borehole", "water", "community"] },
  { number: 27, owner: "Olooitikoshi Delights", org: "Birika Farm", scope: "7.5HP Borehole Solar conversion and 5kw with 5kwh storage solar system", contact: "Joseph Muongeri", phone: "0722819915 / 0721605965", email: "", value: "KES 1,200,000", category: ["solar", "borehole", "water", "commercial"] },
  { number: 28, owner: "Samkara Agencies", org: "Samkara Insurance agencies", scope: "7.5HP Borehole Solar conversion and 5kw with 5kwh storage solar system", contact: "Peter Kinyanjui", phone: "0738244632", email: "", value: "KES 850,000", category: ["solar", "borehole", "water", "commercial"] },
  { number: 29, owner: "Kent UK Homes", org: "Kenya Based", scope: "5kw with 5kwh storage solar system", contact: "James Mbogoro", phone: "0713676040", email: "", value: "KES 895,000", category: ["solar", "commercial"] },
  { number: 30, owner: "Mombasa Trade Centre", org: "Formerly Ambalal House", scope: "Supply of solar lights", contact: "Mr. Zahir Jiwan", phone: "0722410422", email: "zj@ikenya.com", value: "KES 250,000", category: ["lighting", "commercial"] },
  { number: 31, owner: "Food For Education", org: "NGO feeding schools", scope: "Solar power & water heaters supply for kitchens countrywide", contact: "Miss Jemmimah", phone: "0721296122", email: "jemimah@food4education.org", value: "KES 6,500,000", category: ["solar", "water", "school"] },
  { number: 32, owner: "Hiari Project by US donors", org: "Elang'ata Enkima Primary school", scope: "Solarization of 7.5HP/5.5KW Borehole system", contact: "Christine Busby", phone: "+1(714)3906935", email: "josephlengete@gmail.com", value: "KES 1,200,000", category: ["solar", "borehole", "water", "school"] },
  { number: 33, owner: "Plantech Farms & Residence", org: "Naivasha farms", scope: "Solarization of 10HP/7.5KW &7.5HP/5.5KW Borehole system", contact: "Mr. Mureithi", phone: "0722886217", email: "", value: "KES 3,200,000", category: ["solar", "borehole", "water", "commercial"] },
  { number: 34, owner: "Watken Apartments", org: "Watken Thogoto, Kikuyu", scope: "Solarization of 10HP/7.5KW Borehole system & solar lighting system", contact: "Mrs. Jane Njoroge", phone: "0720384469", email: "", value: "KES 850,000", category: ["solar", "borehole", "water", "lighting", "commercial"] },
  { number: 35, owner: "Vitech College", org: "Water project and Directors Residence", scope: "Solarization of 7.5HP/5.5KW Borehole system", contact: "Mr. Duncan Mbugua", phone: "0722781190", email: "", value: "KES 640,000", category: ["solar", "borehole", "water", "school"] },
  { number: 36, owner: "Kithimani Farm", org: "Kithimani Homes and Farm", scope: "Farm solar power system and irrigation", contact: "Abdi Mohammed", phone: "0722822768", email: "", value: "KES 350,000", category: ["solar", "water", "commercial"] },
  { number: 37, owner: "UHC Medical Centre", org: "Upperhill Medical Centre", scope: "Supply and installation of solar lights at UHC Centre", contact: "Mr. Kennedy Kimani", phone: "0720446191", email: "", value: "KES 487,500", category: ["lighting", "commercial"] },
  { number: 38, owner: "Alliance Media", org: "Alliance Media", scope: "Supply of solar lights for outdoor advertising billboards", contact: "Marting Gatua", phone: "0717457333", email: "", value: "KES 1,360,000", category: ["lighting", "commercial"] },
  { number: 39, owner: "Cylinder Works", org: "Cylinder works", scope: "Supply and installation of solar lights at the factory", contact: "Mr. Martin Ng'ang'a", phone: "0704986802", email: "", value: "KES 730,000", category: ["lighting", "commercial"] }
];

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

// Category badge styles — transparent backgrounds + solid 1px border in each color
const categoryStyles: Record<string, { icon: string; color: string; bg: string; border: string }> = {
  solar:      { icon: 'fa-sun',            color: '#5ABE71', bg: 'rgba(90,190,113,0.08)',  border: 'rgba(90,190,113,0.45)'  },
  borehole:   { icon: 'fa-water',          color: '#012156', bg: 'rgba(1,33,86,0.06)',     border: 'rgba(1,33,86,0.35)'     },
  water:      { icon: 'fa-tint',           color: '#2563EB', bg: 'rgba(37,99,235,0.07)',   border: 'rgba(37,99,235,0.40)'   },
  lighting:   { icon: 'fa-lightbulb',      color: '#CA8A04', bg: 'rgba(202,138,4,0.07)',   border: 'rgba(202,138,4,0.40)'   },
  school:     { icon: 'fa-graduation-cap', color: '#7C3AED', bg: 'rgba(124,58,237,0.07)',  border: 'rgba(124,58,237,0.40)'  },
  church:     { icon: 'fa-church',         color: '#9333EA', bg: 'rgba(147,51,234,0.07)',  border: 'rgba(147,51,234,0.40)'  },
  community:  { icon: 'fa-users',          color: '#16A34A', bg: 'rgba(22,163,74,0.07)',   border: 'rgba(22,163,74,0.40)'   },
  commercial: { icon: 'fa-building',       color: '#EA580C', bg: 'rgba(234,88,12,0.07)',   border: 'rgba(234,88,12,0.40)'   },
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [sortColumn, setSortColumn] = useState('number')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

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

  const getPrimaryCategory = (cats: string[]) => cats[0] || 'commercial'
  const getCategoryStyle = (cat: string) =>
    categoryStyles[cat] || {
      icon: 'fa-tag',
      color: '#6B7280',
      bg: 'rgba(107,114,128,0.07)',
      border: 'rgba(107,114,128,0.40)',
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

        {/* ===== STATS — LEFT ALIGNED ===== */}
        <section className="py-6">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Our Impact <span className="text-gray-500">in Numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: 'fa-project-diagram', num: '39', label: 'Completed Projects' },
              { icon: 'fa-sun',             num: '28', label: 'Solar Projects' },
              { icon: 'fa-water',           num: '16', label: 'Water Projects' },
              { icon: 'fa-building',        num: '24', label: 'Institutional Clients' }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${s.icon} text-lg text-[#5ABE71]`}></i>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-[#012156] font-['Orbitron'] leading-none">{s.num}</div>
                  <p className="text-gray-500 text-[10px] font-['Ubuntu'] mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
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

            <div className="flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`px-3 py-1.5 rounded-md text-xs font-['Orbitron'] tracking-wider transition-all flex items-center gap-1.5 ${
                    viewMode === 'cards'
                      ? 'bg-white text-[#012156] shadow-sm'
                      : 'text-gray-500 hover:text-[#012156]'
                  }`}
                >
                  <i className="fas fa-th-large text-[10px]"></i> Cards
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 rounded-md text-xs font-['Orbitron'] tracking-wider transition-all flex items-center gap-1.5 ${
                    viewMode === 'table'
                      ? 'bg-white text-[#012156] shadow-sm'
                      : 'text-gray-500 hover:text-[#012156]'
                  }`}
                >
                  <i className="fas fa-list text-[10px]"></i> Table
                </button>
              </div>

              <div className="text-sm text-gray-500 font-['Ubuntu'] whitespace-nowrap">
                {filteredProjects.length} of {projectsData.length}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS — CARDS VIEW ===== */}
        {viewMode === 'cards' && (
          <section className="py-6">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <i className="fas fa-search text-4xl text-gray-300 block mb-3"></i>
                <p className="text-gray-500 font-['Ubuntu']">No projects match your search.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredProjects.map((project) => {
                  const primary = getPrimaryCategory(project.category)
                  const style = getCategoryStyle(primary)
                  return (
                    <div
                      key={project.number}
                      onClick={() => openModal(project)}
                      className="group relative bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all cursor-pointer overflow-hidden"
                    >
                      {/* Watermark icon */}
                      <i
                        className={`fas ${style.icon} absolute pointer-events-none`}
                        style={{
                          position: 'absolute',
                          bottom: '-15px',
                          right: '-15px',
                          fontSize: '3.5rem',
                          opacity: 0.12,
                          color: style.color,
                          transform: 'rotate(-15deg)',
                        }}
                      ></i>

                      <div className="relative z-10 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:bg-[#5ABE71] group-hover:text-white transition-all"
                            style={{ background: style.bg }}
                          >
                            <i className={`fas ${style.icon} text-base group-hover:text-white transition-colors`} style={{ color: style.color }}></i>
                          </div>
                          <span className="font-['Orbitron'] text-[10px] text-gray-400 tracking-widest">
                            #{String(project.number).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-0.5 leading-snug line-clamp-2">
                          {project.owner}
                        </h3>
                        <p className="text-gray-500 text-[10px] font-['Ubuntu'] mb-2 line-clamp-1">
                          {project.org}
                        </p>

                        <p className="text-gray-600 text-[11px] font-['Ubuntu'] leading-relaxed line-clamp-2 mb-2">
                          {project.scope}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.category.slice(0, 3).map((cat) => {
                            const cs = getCategoryStyle(cat)
                            return (
                              <span
                                key={cat}
                                className="text-[9px] px-1.5 py-0.5 rounded-full font-['Ubuntu'] font-medium"
                                style={{
                                  background: cs.bg,
                                  color: cs.color,
                                  border: `1px solid ${cs.border}`,
                                }}
                              >
                                {categoryLabels[cat] || cat}
                              </span>
                            )
                          })}
                          {project.category.length > 3 && (
                            <span
                              className="text-[9px] font-['Ubuntu'] font-medium px-1.5 py-0.5 rounded-full self-center"
                              style={{
                                color: '#6B7280',
                                background: 'rgba(107,114,128,0.07)',
                                border: '1px solid rgba(107,114,128,0.35)',
                              }}
                            >
                              +{project.category.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                          <span className="font-['Orbitron'] text-[11px] font-bold" style={{ color: style.color }}>
                            {project.value}
                          </span>
                          <span className="text-[9px] font-['Orbitron'] text-gray-400 group-hover:text-[#5ABE71] transition-colors flex items-center gap-1 tracking-wider">
                            VIEW <i className="fas fa-arrow-right group-hover:translate-x-0.5 transition-transform"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>
        )}

        {/* ===== PROJECTS — TABLE VIEW ===== */}
        {viewMode === 'table' && (
          <section className="py-6">
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[1000px] text-sm border-collapse">
                <thead>
                  <tr className="bg-[#012156]/5">
                    {[
                      { key: 'number', label: '#' },
                      { key: 'owner', label: 'Project Owner' },
                      { key: 'scope', label: 'Project Scope' },
                      { key: 'contact', label: 'Contact' },
                      { key: 'value', label: 'Value' }
                    ].map((col) => (
                      <th
                        key={col.key}
                        onClick={() => handleSort(col.key)}
                        className="text-left py-3 px-3 font-['Orbitron'] text-xs text-[#012156] cursor-pointer hover:text-[#5ABE71] transition-colors border-b border-gray-200 whitespace-nowrap"
                      >
                        {col.label} {sortColumn === col.key && (sortDirection === 'asc' ? '↑' : '↓')}
                      </th>
                    ))}
                    <th className="text-left py-3 px-3 font-['Orbitron'] text-xs text-[#012156] border-b border-gray-200">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-gray-500 font-['Ubuntu']">
                        <i className="fas fa-search text-2xl block mb-2 text-gray-300"></i>
                        No projects found. Try adjusting your search or filter.
                      </td>
                    </tr>
                  ) : (
                    filteredProjects.map((project) => (
                      <tr key={project.number} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                        <td className="py-3 px-3 font-['Orbitron'] text-xs text-[#012156] whitespace-nowrap">{project.number}</td>
                        <td className="py-3 px-3 min-w-[180px]">
                          <div className="font-semibold text-[#012156] text-sm font-['Ubuntu'] whitespace-normal break-words">{project.owner}</div>
                          <div className="text-gray-500 text-xs font-['Ubuntu'] whitespace-normal break-words">{project.org}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {project.category.slice(0, 3).map((cat) => {
                              const cs = getCategoryStyle(cat)
                              return (
                                <span
                                  key={cat}
                                  className="text-[9px] px-2 py-0.5 rounded-full font-['Ubuntu'] font-medium"
                                  style={{
                                    background: cs.bg,
                                    color: cs.color,
                                    border: `1px solid ${cs.border}`,
                                  }}
                                >
                                  {categoryLabels[cat] || cat}
                                </span>
                              )
                            })}
                            {project.category.length > 3 && (
                              <span
                                className="text-[9px] font-['Ubuntu'] font-medium px-2 py-0.5 rounded-full self-center"
                                style={{
                                  color: '#6B7280',
                                  background: 'rgba(107,114,128,0.07)',
                                  border: '1px solid rgba(107,114,128,0.35)',
                                }}
                              >
                                +{project.category.length - 3}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-gray-600 text-xs font-['Ubuntu'] min-w-[200px] whitespace-normal break-words">{project.scope}</td>
                        <td className="py-3 px-3 min-w-[160px]">
                          <div className="text-[#012156] text-xs font-['Ubuntu'] whitespace-normal break-words">{project.contact}</div>
                          <div className="text-gray-500 text-[10px] font-['Ubuntu'] whitespace-normal break-words">{project.phone}</div>
                        </td>
                        <td className="py-3 px-3 font-['Orbitron'] text-xs text-[#5ABE71] whitespace-nowrap">{project.value}</td>
                        <td className="py-3 px-3 whitespace-nowrap">
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
        )}

        {/* ===== CTA SECTION ===== */}
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

      {/* ===== PROJECT MODAL — COMPACT ===== */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 p-4 pb-3 border-b border-gray-200 flex items-start justify-between">
              <div className="flex items-start gap-2.5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: getCategoryStyle(getPrimaryCategory(selectedProject.category)).bg }}
                >
                  <i
                    className={`fas ${getCategoryStyle(getPrimaryCategory(selectedProject.category)).icon} text-base`}
                    style={{ color: getCategoryStyle(getPrimaryCategory(selectedProject.category)).color }}
                  ></i>
                </div>
                <div>
                  <div className="font-['Orbitron'] text-[9px] text-gray-400 tracking-widest mb-0.5">
                    PROJECT #{String(selectedProject.number).padStart(2, '0')}
                  </div>
                  <h2 className="font-['Orbitron'] text-sm font-bold text-[#012156] leading-snug">{selectedProject.owner}</h2>
                  <p className="text-gray-500 text-[11px] font-['Ubuntu'] mt-0.5">{selectedProject.org}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-[#012156] transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-4 space-y-3.5">
              <div>
                <h3 className="font-['Orbitron'] text-[10px] font-bold text-[#012156] mb-1.5 tracking-wider">PROJECT SCOPE</h3>
                <p className="text-gray-600 text-xs font-['Ubuntu'] leading-relaxed">{selectedProject.scope}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {selectedProject.category.map((cat) => {
                    const cs = getCategoryStyle(cat)
                    return (
                      <span
                        key={cat}
                        className="text-[9px] px-1.5 py-0.5 rounded-full font-['Ubuntu'] font-medium"
                        style={{
                          background: cs.bg,
                          color: cs.color,
                          border: `1px solid ${cs.border}`,
                        }}
                      >
                        {categoryLabels[cat] || cat}
                      </span>
                    )
                  })}
                </div>
              </div>

              <div>
                <h3 className="font-['Orbitron'] text-[10px] font-bold text-[#012156] mb-1.5 tracking-wider">CONTACT INFORMATION</h3>
                <div className="space-y-1 text-xs font-['Ubuntu']">
                  <p className="text-gray-600 flex items-start gap-2">
                    <i className="fas fa-user text-[#5ABE71] mt-0.5 w-3.5 text-[10px]"></i>
                    <span>{selectedProject.contact}</span>
                  </p>
                  <p className="text-gray-600 flex items-start gap-2">
                    <i className="fas fa-phone text-[#5ABE71] mt-0.5 w-3.5 text-[10px]"></i>
                    <span>{selectedProject.phone}</span>
                  </p>
                  {selectedProject.email && (
                    <p className="text-gray-600 flex items-start gap-2">
                      <i className="fas fa-envelope text-[#5ABE71] mt-0.5 w-3.5 text-[10px]"></i>
                      <span className="break-all">{selectedProject.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-['Orbitron'] text-[10px] font-bold text-[#012156] mb-2 tracking-wider">PROJECT SUMMARY</h3>
                <div className="space-y-1.5 text-xs font-['Ubuntu']">
                  <p className="flex justify-between text-gray-600">
                    <span className="text-[#012156] font-semibold">Project Number:</span>
                    <span>#{String(selectedProject.number).padStart(2, '0')}</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span className="text-[#012156] font-semibold">Contract Value:</span>
                    <span className="font-['Orbitron'] text-[#5ABE71] font-bold">{selectedProject.value}</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span className="text-[#012156] font-semibold">Categories:</span>
                    <span className="text-right max-w-[60%]">{selectedProject.category.map(c => categoryLabels[c] || c).join(', ')}</span>
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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}