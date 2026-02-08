'use client';

import Link from 'next/link';

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Product',
    href: '/product',
    submenu: [
      { label: 'Overview', href: '/product/overview' },
      { label: 'Architecture', href: '/product/architecture' },
      { label: 'Data Model', href: '/product/data-model' },
      { label: 'Security', href: '/product/security' },
      { label: 'Performance', href: '/product/performance' },
      { label: 'Roadmap', href: '/product/roadmap' },
      { label: 'Validation', href: '/product/validation' },
    ]
  },
  {
    label: 'Method',
    href: '/method',
    submenu: [
      { label: 'Bow Tie Overview', href: '/method/bow-tie-overview' },
      { label: 'Hazards', href: '/method/hazards' },
      { label: 'Threats', href: '/method/threats' },
      { label: 'Consequences', href: '/method/consequences' },
      { label: 'Preventive Barriers', href: '/method/barriers/preventive' },
      { label: 'Mitigative Barriers', href: '/method/barriers/mitigative' },
      { label: 'Degradation Factors', href: '/method/degradation-factors' },
      { label: 'Escalation', href: '/method/escalation' },
      { label: 'Performance Standards', href: '/method/performance-standards' },
      { label: 'Bow Tie vs Other Methods', href: '/method/bow-tie-vs-other-methods' },
    ]
  },
  {
    label: 'Standards',
    href: '/standards',
    submenu: [
      { label: 'ISO 31000', href: '/standards/iso-31000' },
      { label: 'ISO 27001', href: '/standards/iso-27001' },
      { label: 'ISO 27005', href: '/standards/iso-27005' },
      { label: 'IEC 61508', href: '/standards/iec-61508' },
      { label: 'IEC 61511', href: '/standards/iec-61511' },
      { label: 'How Standards Connect to Bow Tie', href: '/standards/how-standards-connect-to-bow-tie' },
    ]
  },
  {
    label: 'Research',
    href: '/research',
    submenu: [
      { label: 'Theory', href: '/research/theory' },
      { label: 'Methodology', href: '/research/methodology' },
      { label: 'Limitations', href: '/research/limitations' },
      { label: 'Comparisons', href: '/research/comparisons' },
      { label: 'References', href: '/research/references' },
    ]
  },
  {
    label: 'Use Cases',
    href: '/use-cases',
    submenu: [
      { label: 'Oil and Gas', href: '/use-cases/oil-and-gas' },
      { label: 'Manufacturing', href: '/use-cases/manufacturing' },
      { label: 'Energy', href: '/use-cases/energy' },
      { label: 'Rail and Transport', href: '/use-cases/rail-and-transport' },
      { label: 'Information Security', href: '/use-cases/information-security' },
      { label: 'Public Sector', href: '/use-cases/public-sector' },
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    submenu: [
      { label: 'Glossary', href: '/resources/glossary' },
      { label: 'Templates', href: '/resources/templates' },
      { label: 'Examples', href: '/resources/examples' },
      { label: 'Whitepapers', href: '/resources/whitepapers' },
      { label: 'FAQ', href: '/resources/faq' },
    ]
  },
  {
    label: 'Company',
    href: '/company',
    submenu: [
      { label: 'About', href: '/company/about' },
      { label: 'History', href: '/company/history' },
      { label: 'Philosophy', href: '/company/philosophy' },
      { label: 'Security and Trust', href: '/company/security-and-trust' },
      { label: 'Contact', href: '/company/contact' },
    ]
  },
];

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600 flex-shrink-0" style={{ fontFamily: 'Source Serif 4' }}>
          Bowtie360
        </Link>
        
        <div className="hidden lg:flex gap-6 flex-1 justify-center">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link 
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1 py-4"
              >
                {item.label}
                {item.submenu && (
                  <span className="text-xs">▼</span>
                )}
              </Link>
              
              {item.submenu && (
                <div className="absolute left-0 mt-0 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 border border-gray-200">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t last:rounded-b"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition flex-shrink-0">
          Sign In
        </button>
      </nav>
    </header>
  );
}