export type Status = 'ACTIVE' | 'IN DEVELOPMENT' | 'UPCOMING' | 'CONCEPT' | 'R&D'

export const contact = {
  whatsapp: 'https://wa.me/256752255676',
  email: 'naturalintellectsltd@gmail.com',
  phones: ['+26752255676', '+256762449504'],
}

export const services = [
  { number: '01', title: 'Website Development & Maintenance', description: 'Modern, responsive and secure websites that keep businesses running online.', capability: 'Digital Products' },
  { number: '02', title: 'Graphics Designing', description: 'Creative, professional and impactful visual designs that help brands stand out.', capability: 'Digital Products' },
  { number: '03', title: 'Social Media Marketing', description: 'Help businesses grow their brand, engage their audience and strengthen their online presence.', capability: 'Digital Products' },
  { number: '04', title: 'Computer Software & Hardware Installation', description: 'Reliable installation and setup for effective computer systems and technology infrastructure.', capability: 'Technology Exploration' },
  { number: '05', title: 'App Development & Updating', description: 'Custom applications built around specific needs, with ongoing updates where required.', capability: 'Software Platforms' },
  { number: '06', title: 'School, Office & Domestic System Development', description: 'Smart, tailored systems for schools, offices and appropriate domestic use cases.', capability: 'Business Systems' },
] as const

export const capabilities = [
  { slug: 'digital-products', number: '01', title: 'Digital Products', description: 'From first principle to useful interface.', longDescription: 'We shape focused digital products around real needs, clear journeys and room to evolve.', projects: ['smart-ride', 'nisms', 'house-for-rent', 'disms', 'ticketug'], approach: ['Discover the real constraint', 'Design the simplest useful system', 'Build, learn and evolve'] },
  { slug: 'business-systems', number: '02', title: 'Business Systems', description: 'Clarity and leverage for how organizations work.', longDescription: 'We make complex operations more visible, structured and ready for better decisions.', projects: ['nisms', 'disms', 'employee-reporting'], approach: ['Map how work actually happens', 'Connect information and action', 'Create durable operating clarity'] },
  { slug: 'software-platforms', number: '03', title: 'Software Platforms', description: 'Durable foundations for ideas with room to grow.', longDescription: 'We build software foundations that support useful products without unnecessary complexity.', projects: ['smart-ride', 'nisms', 'house-for-rent', 'lyn'], approach: ['Start with a coherent foundation', 'Prioritize useful capability', 'Leave room for scale'] },
  { slug: 'technology-exploration', number: '04', title: 'Technology Exploration', description: 'Research directions for a changing world.', longDescription: 'Our lab holds ambitious explorations across mobility, education, sustainability and digital independence.', projects: ['elon-project', 'ni-socket', 'aqua-ni', 'state-schools-international', 'prizon', 'lyn'], approach: ['Question the default', 'Explore responsibly', 'Carry the useful idea forward'] },
] as const

export const products = [
  { slug: 'smart-ride', name: 'Smart Ride', status: 'ACTIVE' as Status, category: 'Digital product / Software platform', overview: 'A practical mobility platform exploring smarter, more accessible transport experiences.', problem: 'Mobility systems can be difficult to navigate and improve when information and experience are fragmented.', solution: 'Smart Ride explores a clearer digital layer for more useful transport experiences.', capabilities: ['Mobility experience', 'Digital product thinking'], technologies: ['Product design', 'Software platform'] },
  { slug: 'nisms', name: 'NISMS', status: 'ACTIVE' as Status, category: 'Business system / Digital product', overview: 'Digital systems that help organizations bring structure, visibility and intelligence to operations.', problem: 'Organizations need clearer ways to understand and coordinate how work moves.', solution: 'NISMS is being developed as a structured digital system for operational clarity.', capabilities: ['Operational visibility', 'Information systems'], technologies: ['Business systems', 'Digital platforms'] },
  { slug: 'house-for-rent', name: 'House For Rent', status: 'ACTIVE' as Status, category: 'Digital product / Software platform', overview: 'A focused property platform connecting people with clearer ways to find and manage housing.', problem: 'Finding and managing housing can be fragmented and unclear.', solution: 'House For Rent explores a more direct, focused property experience.', capabilities: ['Property discovery', 'Digital marketplace'], technologies: ['Product design', 'Software platform'] },
  { slug: 'disms', name: 'DISMs', status: 'UPCOMING' as Status, category: 'Business system / Digital product', overview: 'A developing direction for digital information and management systems.', problem: 'Growing organizations need information systems that remain useful as complexity increases.', solution: 'DISMs is an upcoming direction for practical digital management.', capabilities: ['Information management', 'Organizational systems'], technologies: ['Business systems', 'Research and development'] },
  { slug: 'employee-reporting', name: 'Employee Reporting', status: 'IN DEVELOPMENT' as Status, category: 'Workforce management platform', overview: 'A centralized platform for employee activity, accountability and performance reporting.', problem: 'Organizations spend too much time collecting, organizing and interpreting disconnected employee reports.', solution: 'The platform organizes daily activity submissions into structured monthly reports, with role-based access, reminders and a durable reporting history.', capabilities: ['Business systems', 'Operational visibility'], technologies: ['Web platform', 'Automated reporting', 'Voice input'] },
  { slug: 'ticketug', name: 'TicketUG', status: 'IN DEVELOPMENT' as Status, category: 'Digital ticketing / Event management', overview: 'A digital event platform for discovery, ticket sales, QR verification and organized entry.', problem: 'Event organizers need a clearer way to promote events, manage ticket orders and control attendance.', solution: 'TicketUG connects event discovery with digital ticket issuance, QR-based verification, organizer dashboards and event operations.', capabilities: ['Digital products', 'Event operations'], technologies: ['Ticketing platform', 'QR verification', 'Analytics'] },
] as const

export const innovation = [
  { slug: 'prizon', name: 'PRIZ~ON', status: 'CONCEPT' as Status, category: 'Natural food & hospitality', description: 'A hospitality concept centered on organic food, waste reduction, local farmers and healthier sustainable living.' },
  { slug: 'elon-project', name: 'ELON Project', status: 'R&D' as Status, category: 'Solar-powered vehicles', description: 'An early sustainable mobility initiative exploring solar panels, batteries and lower-emission transport.' },
  { slug: 'lyn', name: 'LYN', status: 'CONCEPT' as Status, category: 'African Union social platform', description: 'A pan-African platform concept for connection, culture, secure networking and digital independence.' },
  { slug: 'state-schools-international', name: 'State Schools International', status: 'CONCEPT' as Status, category: 'Future-oriented education', description: 'A learning concept focused on practical skills, creativity, technology, problem-solving and sustainability.' },
  { slug: 'aqua-ni', name: 'Aqua NI', status: 'R&D' as Status, category: 'Modernized water transport', description: 'A concept for stronger, safer and lighter fiberglass boats for fishing, trade and tourism.' },
  { slug: 'ni-socket', name: 'NI Socket', status: 'R&D' as Status, category: 'EV charging & battery swap', description: 'A sustainable mobility infrastructure direction involving charging points and fast battery-swap hubs.' },
] as const

export const workArchive = [
  { name: 'ACA', logo: '/work-done/aca.png', width: 93, height: 56 },
  { name: 'Aicher IT', logo: '/work-done/aicherit.png', width: 225, height: 76 },
  { name: 'Daily Sports', logo: '/work-done/dailsports.png', width: 238, height: 65 },
  { name: 'IPD', logo: '/work-done/ipd.png', width: 513, height: 486 },
  { name: 'Sorriso Hostesses', logo: '/work-done/sorrisohostesses.png', width: 279, height: 46 },
  { name: 'UFMI', logo: '/work-done/ufmi.png', width: 91, height: 66 },
  { name: 'WUFPA', logo: '/work-done/wufpa.png', width: 70, height: 57 },
  { name: 'Smart Ride', logo: '/work-done/smart-ride.png', width: 1254, height: 1254 },
  { name: 'House For Rent', logo: '/work-done/house-for-rent.png', width: 774, height: 768 },
] as const

export const team = [
  { name: 'Team member', role: 'Natural Intellects', bio: 'Profile details will be added as the team information is published.' },
  { name: 'Team member', role: 'Natural Intellects', bio: 'Profile details will be added as the team information is published.' },
  { name: 'Team member', role: 'Natural Intellects', bio: 'Profile details will be added as the team information is published.' },
]

export const timeline = [
  ['2023', 'FOUNDATION / EARLY VISION', 'Natural Intellects begins exploring ambitious technology and innovation concepts.'],
  ['2023+', 'EARLY INNOVATION', 'Projects such as ELON, PRIZ~ON, LYN, State Schools International, Aqua NI and NI Socket represent broader technological ambitions.'],
  ['2026', 'FORMAL REGISTRATION', 'Natural Intellects becomes officially registered.'],
  ['2026+', 'PRODUCT DEVELOPMENT', 'Focus expands around practical digital products and platforms including Smart Ride, NISMS, House For Rent and upcoming DISMs.'],
] as const

export function findProject(slug: string) { return products.find((p) => p.slug === slug) }
export function findInnovation(slug: string) { return innovation.find((p) => p.slug === slug) }
export function findCapability(slug: string) { return capabilities.find((p) => p.slug === slug) }
export function projectName(slug: string) { return findProject(slug)?.name ?? findInnovation(slug)?.name ?? slug }
export function allSlugs() { return { products: products.map((p) => p.slug), innovation: innovation.map((p) => p.slug), capabilities: capabilities.map((p) => p.slug) } }
