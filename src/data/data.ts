import { Sparkles, Users2, GraduationCap, Building2, type LucideIcon } from 'lucide-react'

// ---- Shared shapes ----
export interface NavLink {
  label?: string
  name?: string
  path: string
}

export interface StatItem {
  value: string
  label: string
  sub?: string
}

export interface InfoCard {
  title: string
  body: string
}

export interface IconCard extends InfoCard {
  icon: LucideIcon
}

export const stats = [
  { value: '1000+', label: 'EVENTS', sub: 'Happening every year' },
  { value: '500+', label: 'CAMPUSES', sub: 'Across India' },
  { value: '50+', label: 'BRANDS', sub: 'Trust us' },
  { value: '1L+', label: 'YOUTH', sub: 'Empowered globally' },
  { value: '5+', label: 'COUNTRIES', sub: 'One movement' },
]

export const framework = [
  { letter: 'I', word: 'INTERNSHIP', desc: 'Your first step into the real world.', color: 'text-blue-600' },
  { letter: 'N', word: 'NETWORK', desc: 'The connections that change your terms.', color: 'text-teal-500' },
  { letter: 'G', word: 'GROWTH', desc: 'Revenue, skills and status — your terms.', color: 'text-purple-500' },
  { letter: 'L', word: 'LEADERSHIP', desc: "You don't wait to be given it.", color: 'text-orange-500' },
  { letter: 'U', word: 'UNITY', desc: 'One generation. One ecosystem.', color: 'text-blue-600' },
]

export const e3Model = [
  {
    title: 'EDUCATION',
    desc: 'Learn. Upskill. Build your future.',
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    title: 'ENHANCEMENT',
    desc: 'Grow. Experience. Elevate yourself.',
    gradient: 'from-teal-500 to-emerald-400',
  },
  {
    title: 'ENTERTAINMENT',
    desc: 'Have fun. Create memories.',
    gradient: 'from-purple-500 to-violet-500',
  },
]

export const subBrands = [
  'INGLU Education 🎓',
  'Muse Records 🎵',
  'INGLU Events 📅',
  'INGLU Creators ✨',
  'Crew Connect 👥',
  'Coll-Edge Connect 🎖️',
  'INGLU Travels ✈️',
  'INGLU Esports 🎮',
]

export const ecosystemTabs = ['For Students', 'For Brands', 'For Creators', 'For Artists', 'For Colleges']

export const ecosystemItems = [
  { title: 'Internships', desc: 'Real opportunities with real impact.' },
  { title: 'Events', desc: "Experience India's best youth events." },
  { title: 'Network', desc: 'Connect with people who shape the future.' },
  { title: 'Courses', desc: 'Learn from experts. Build your edge.' },
  { title: 'Community', desc: 'Be part of a movement that lasts forever.' },
  { title: 'Growth', desc: 'From college life to dream life.' },
]


// data.js
export const brands = [
  { name: 'NYKAA', logo: 'https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e714/67434bc3f8cab15f2f07ebe4_Nykaa.png' },
  { name: 'PIZZA HUT', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNMG_4rbZMDO1-iieWH4M6jydnty4Vb3w3TgKqqYOT8k03uMZDn-c3q0&s=10' },
  { name: 'Spotify', logo: 'https://www.billboard.com/wp-content/uploads/media/spotify-logo-green-2017-billboard-1548.jpg' },
  { name: 'ENVY', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXWlJNomXF8gufab0PdY9YacUAmk5E6SNHudw0UJeTpeaH1SPrcAaBVk&s=10' },
  { name: 'MONSTER', logo: 'https://media.licdn.com/dms/image/v2/C560BAQGt1iKQ9aTiBQ/company-logo_200_200/company-logo_200_200/0/1648228339621/monsterenergy_logo?e=2147483647&v=beta&t=6kr0hPqdkXrgAT6cg6kC5I7sAydDfaKrRlIJ6hJnZac' },
  { name: 'HILARY RHODA', logo: 'https://hilaryrhoda.in/cdn/shop/files/profile_image_1000x1000.jpg?v=1728459784' },
  { name: 'VANESA', logo: 'https://i.pinimg.com/1200x/4a/ba/89/4aba89382fddb23e179541df80f7d3bd.jpg' },
  { name: 'DENVER', logo: 'https://images.yourstory.com/cs/images/companies/094560dd6305-denverlogoRecovered-1695378394134.jpg' },
]

export const successStories = [
  { tag: 'STUDENT', name: 'Aryan Mehta', sub: 'Delhi University', headline: 'Earned ₹12,000 in 60 days', desc: 'Through internships and gigs on INGLU' },
  { tag: 'CREATOR', name: 'Riya Sharma', sub: 'Content Creator', headline: 'Landed ₹18,000 brand deal', desc: 'For a single Instagram collaboration' },
  { tag: 'COLLEGE', name: 'Aditya Rawat', sub: 'Manipal University', headline: '380+ students participated', desc: 'In our fest through INGLU promotions' },
  { tag: 'BRAND', name: 'Priya Kapoor', sub: 'D2C Beauty Brand', headline: 'Activated 40+ campuses', desc: 'Successful youth campaign across India', isVideo: true },
  { tag: 'EVENT', name: 'Rahul Sen', sub: 'Event Organizer', headline: 'Sold 500+ passes in 5 days', desc: 'Massive student turnout at the annual music concert' }, // New Event Card added
]


export const events = [
  { title: 'GYLC 2026', sub: 'Global Youth Leadership Conclave', date: '25 JUN', daysLeft: '47 Days Left', gradient: 'from-purple-700 to-fuchsia-600' },
  { title: 'FOMO XPERIENCE', sub: "India's Biggest Campus Festival", date: '12 JUL', daysLeft: '64 Days Left', gradient: 'from-pink-600 to-rose-500' },
  { title: 'GROUND ZERO', sub: 'Esports Championship Season 2', date: '02 AUG', daysLeft: '85 Days Left', gradient: 'from-slate-800 to-slate-600' },
  { title: 'HOLI BASH', sub: "India's Biggest Holi Celebration", date: '14 MAR', daysLeft: '240 Days Left', gradient: 'from-orange-500 to-pink-500' },
]

export const personas = [
  { title: 'STUDENT', desc: 'Opportunities, Events & Growth', bg: 'bg-blue-50', accent: 'bg-blue-600', text: 'text-blue-600', iconColor: 'text-blue-600' },
  { title: 'CREATOR', desc: 'Collaborate, Create & Earn', bg: 'bg-pink-50', accent: 'bg-pink-500', text: 'text-pink-500', iconColor: 'text-pink-500' },
  { title: 'ARTIST', desc: 'Showcase Your Talent & Grow', bg: 'bg-violet-50', accent: 'bg-violet-600', text: 'text-violet-600', iconColor: 'text-violet-600' },
  { title: 'BRAND', desc: 'Reach Gen Z At Scale', bg: 'bg-orange-50', accent: 'bg-orange-500', text: 'text-orange-500', iconColor: 'text-orange-500' },
  { title: 'COLLEGE COMMITTEE', desc: 'Build Epic Events On Campus', bg: 'bg-slate-50', accent: 'bg-inglu-ink', text: 'text-inglu-ink', iconColor: 'text-inglu-ink' },
]

export const liveFeed = [
  { tag: 'Reel', title: 'FOMO Xperience Highlights' },
  { tag: 'Reel', title: 'Creator Spotlight', sub: 'INGLU' },
  { tag: 'Event', title: 'Campus Diaries', sub: 'Delhi' },
  { tag: 'Reel', title: 'Holi Bash 2025', sub: 'Fest' },
  { tag: 'Opportunity', title: 'Internship Alert' },
  { tag: 'Workshop', title: 'AI & Design Masterclass', sub: 'Upskill' },
  { tag: 'Gig', title: 'Freelance Content Project', sub: 'Earn' },
  { tag: 'Campaign', title: 'Red Bull Campus Activation', sub: 'Brands' },
]

export const footerLinks = {
  ECOSYSTEM: [
    { label: 'Education', path: '/ecosystem' },
    { label: 'Events', path: '/events' },
    { label: 'Creators', path: '/creators' },
    { label: 'Muse Records', path: '/muse' },
    { label: 'Travels', path: '/travels' },
    { label: 'Esports', path: '/esports' },
    { label: 'FOMO Xperience', path: '/fomo' },
    { label: 'The Grid', path: '/grid' },
  ],
  COMPANY: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Brand Partners', path: '/for-brands' },
    { label: 'Press', path: '/press' },
    { label: 'Contact Us', path: '/contact' }, 
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Colleges', path: '/colleges' },
    { label: 'Artists', path: '/artists' },
    { label: 'Spacebar', path: '/spacebar' },
  ],
  RESOURCES: [
    { label: 'Blog', path: '/blog' },
    { label: 'Help Center', path: '/help' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Campus Buzz', path: '/campus-buzz' },
  ],
  LEGAL: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Use', path: '/terms' },
    { label: 'Refund Policy', path: '/refunds' },
    { label: 'Code of Conduct', path: '/code-of-conduct' },
  ],
}


// ---- Navbar ----
export const NAV_LINKS = [
  { name: 'About Us', path: '/about' },
  { name: 'Ecosystem', path: '/ecosystem' },
  { name: 'For Students', path: '/for-students' },
  { name: 'For Brands', path: '/for-brands' },
  { name: 'Events', path: '/events' },
  { name: 'Campus Buzz', path: '/campus-buzz' },
]

// ---- Stats (used in Hero, StatsBar, About) ----
export const GLANCE_STATS = [
  { value: '1000+', label: 'Events' },
  { value: '500+', label: 'Campuses' },
  { value: '50+', label: 'Brands' },
  { value: '1L+', label: 'Youth' },
]

// ---- About Page ----
export const ECOSYSTEM_CARDS = [
  { icon: GraduationCap, title: 'Students', body: 'Internships, real skills, campus leadership and a student community where you belong.' },
  { icon: Sparkles, title: 'Creators', body: 'Creator economy access without follower gatekeeping.' },
  { icon: Building2, title: 'Colleges', body: 'Sponsors, artists and a campus network for students at zero cost.' },
  { icon: Users2, title: 'Brands', body: 'Gen Z reach through verified campus and creator channels.' },
]

export const WHY_IT_MATTERS_CARDS = [
  { title: '50M students', body: 'Talent locked out by access.' },
  { title: 'Brands guessing', body: 'Budgets spent without proof of relevance.' },
  { title: 'Campuses siloed', body: 'Communities reset when each batch graduates.' },
]

export const STORY_CARDS = [
  { title: '2017', body: 'One college, a handful of students, and a belief that young talent deserved to be seen.' },
  { title: '2021', body: 'Events became an ecosystem across students, creators, campuses and brands.' },
  { title: 'Now', body: 'A connected operating layer for opportunity, culture and youth growth.' },
]

// ---- Footer ----
export const FOOTER_COLUMNS = [
  {
    title: 'Ecosystem',
    links: [
      { label: 'All Verticals', path: '/ecosystem' },
      { label: 'Events', path: '/events' },
      { label: 'Creators', path: '/creators' },
      { label: 'Muse Records', path: '/muse' },
      { label: 'FOMO Xperience', path: '/fomo' },
      { label: 'SPACEBAR', path: '/spacebar' },
    ],
  },
  {
    title: 'Audiences',
    links: [
      { label: 'Students', path: '/for-students' },
      { label: 'Brands', path: '/for-brands' },
      { label: 'Colleges', path: '/colleges' },
      { label: 'Creators', path: '/creators' },
      { label: 'Artists', path: '/artists' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Press', path: '/press' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
      { label: 'Case Studies', path: '/case-studies' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Refund Policy', path: '/refunds' },
      { label: 'DPDP Compliance', path: '/privacy' },
    ],
  },
]

// ---- For Brands Page ----
export const BRANDS_STATS = [
  { value: '500+', label: 'Campuses' },
  { value: '50+', label: 'Brand partners' },
  { value: '7 days', label: 'Activation window' },
  { value: '1L+', label: 'Youth reach' },
]

export const BRANDS_PROBLEM_CARDS = [
  { title: 'Attention is fragmented', body: 'Gen Z lives across apps, feeds, campuses and communities.' },
  { title: 'Reach is not engagement', body: 'Impressions are cheap. Trust is not.' },
  { title: 'Communities cannot be bought', body: 'You have to be part of them, not interrupt them.' },
]

export const BRANDS_WAYS_CARDS = [
  { title: 'Campus activations', body: 'On-ground experiences across colleges.' },
  { title: 'Creator campaigns', body: 'Student creators make authentic content.' },
  { title: 'Product launches', body: 'Introduce products where Gen Z already is.' },
  { title: 'Ambassador programs', body: 'Always-on local campus presence.' },
  { title: 'Community building', body: 'Grow and energise youth communities.' },
]

// ---- Campus Buzz Page ----
export const CAMPUS_BUZZ_STATS = [
  { value: 'Latest', label: 'Brand deal playbook' },
  { value: 'Muse Drop', label: 'PARO editorial' },
  { value: 'GRID', label: 'Riya hit Circuit' },
  { value: 'Weekly', label: 'Drops' },
]

export const CAMPUS_BUZZ_POSTS = [
  { title: 'How to pitch your first brand deal', body: 'A practical playbook for student creators from DM to signed brief.' },
  { title: 'Riya, NIFT hit Circuit tier', body: 'From zero earnings to Rs 8,000/month in 45 days.' },
  { title: 'PARO hits Spotify editorial', body: 'Campus-to-playlist in four months.' },
]

export const CAMPUS_BUZZ_STREAMS = [
  { title: 'Articles', body: 'Practical guides and youth culture commentary.' },
  { title: 'Podcast', body: 'Founder stories, creator talks and campus operators.' },
  { title: 'Announcements', body: 'Events, drops, rosters and opportunities.' },
]


// ---- Artists Page ----
export const ARTISTS_STATS = [
  { value: 'Music', label: 'Room' },
  { value: 'Dance', label: 'Movement' },
  { value: 'Visual Art', label: 'Gallery' },
  { value: 'Spoken Word', label: 'Stage' },
]

export const ARTISTS_TYPE_CARDS = [
  { title: 'Musicians', body: 'Producers, bands, bedroom beatmakers.' },
  { title: 'Singers', body: 'Voices that carry a whole room.' },
  { title: 'Dancers', body: 'Movement that says the unsayable.' },
  { title: 'Poets', body: 'Spoken word, slam, verse and story.' },
  { title: 'Visual artists', body: 'Painters, illustrators and designers.' },
  { title: 'Performers', body: 'Theatre, stand-up and the whole stage.' },
]

export const ARTISTS_DISCOVERY_CARDS = [
  { title: 'Campus stages', body: 'Real talent in front of real audiences.' },
  { title: 'Festivals', body: 'Moments that travel beyond the room.' },
  { title: 'Bookers', body: 'People who can sign, share and support.' },
]


// ---- Careers Page ----
export const CAREERS_STATS = [
  { value: 'High', label: 'Ownership' },
  { value: 'Fast', label: 'Learning' },
  { value: 'Cross', label: 'Verticals' },
  { value: 'Real', label: 'Impact' },
]

export const CAREERS_WHY_JOIN_CARDS = [
  { title: 'Build something that matters', body: 'Work people actually use, not slide decks.' },
  { title: 'Learn fast', body: 'Run real projects and see impact within weeks.' },
  { title: 'Work across verticals', body: 'Education, creators, events, brands and media.' },
  { title: 'Grow with the ecosystem', body: 'Scope expands as the network scales.' },
]

export const CAREERS_ROLES_CARDS = [
  { title: 'Growth & Marketing', body: 'Funnels, content, analytics and campus footprint.' },
  { title: 'Partnerships', body: 'Brands, colleges and sponsors.' },
  { title: 'Operations', body: 'Events, programs and process design.' },
  { title: 'Community', body: 'Programs, ambassadors and rituals.' },
]


// ---- Case Studies Page ----
export const CASE_STUDIES_STATS = [
  { value: '1L+', label: 'Reach' },
  { value: '+18%', label: 'Engagement' },
  { value: '500+', label: 'Creators' },
  { value: '4.5M+', label: 'Conversions' },
]

export const CASE_STUDIES_FEATURED_CARDS = [
  { title: 'Objective', body: 'Launch awareness with credible student voices.' },
  { title: 'Challenge', body: 'Traditional channels were expensive and shallow.' },
  { title: 'Solution', body: 'Campus ambassador network plus student-creator activations.' },
  { title: 'Result', body: 'Authentic content engine across colleges.' },
]

export const CASE_STUDIES_CAMPAIGN_TYPES = [
  { title: 'Beauty', body: 'Campus awareness and creator sampling.' },
  { title: 'Food and beverage', body: 'College activations and student offers.' },
  { title: 'Entertainment', body: 'Event-led recall and fan communities.' },
]

// ---- Colleges Page ----
export const COLLEGES_STATS = [
  { value: '500+', label: 'Campuses' },
  { value: 'Zero cost', label: 'Institution' },
  { value: 'Brand funded', label: 'Programs' },
  { value: 'Living', label: 'Campus engine' },
]

export const COLLEGES_TRANSFORMATION_CARDS = [
  { title: 'Passive campus', body: 'Disconnected, few opportunities, degrees only.' },
  { title: 'Thriving campus', body: 'Connected, opportunity-rich, stories that last.' },
]

export const COLLEGES_WHY_PARTNER_CARDS = [
  { title: 'More engagement', body: 'Students stop spectating and start showing up.' },
  { title: 'More communities', body: 'Clubs, societies and crews multiply.' },
  { title: 'More opportunities', body: 'Events, internships and creators arrive on campus.' },
  { title: 'Stronger reputation', body: 'The campus everyone wants to be on.' },
]


// ---- Contact Page ----
export const CONTACT_STATS = [
  { value: 'New Delhi', label: 'Base' },
  { value: '12-48 hrs', label: 'Response' },
  { value: 'Every', label: 'Message read' },
  { value: 'Nationwide', label: 'Building' },
]

export const CONTACT_REACH_CARDS = [
  { title: 'Students', body: 'Find internships, events and opportunities.' },
  { title: 'Creators', body: 'Join brand campaigns and creator programs.' },
  { title: 'Brands', body: 'Run youth campaigns through the ecosystem.' },
  { title: 'Campuses', body: 'Bring the campus engine to your students.' },
]

export const CONTACT_FAQ_CARDS = [
  { title: 'How can I partner with INGLU?', body: 'Tell us your goals and the partnerships team replies with a tailored path.' },
  { title: 'How do I become a creator?', body: 'Join INGLU Creators and get matched to briefs.' },
  { title: 'Can my college collaborate?', body: 'Yes, the college pathway is built for societies, committees and institutions.' },
]

export const CONTACT_ROLE_OPTIONS = ['I am a...', 'Student', 'Creator', 'Brand', 'Campus Partner']



// ---- Creators Page ----
export const CREATORS_STATS = [
  { value: '500+', label: 'Creators' },
  { value: '14 days', label: 'To first gig' },
  { value: '10-15%', label: 'Commission' },
  { value: 'Verified', label: 'Creator network' },
]

export const CREATORS_JOURNEY_CARDS = [
  { title: 'Create', body: 'Make the content you already love making.' },
  { title: 'Publish', body: 'Post it anywhere, any audience size.' },
  { title: 'Collaborate', body: 'Match with creators and the ecosystem.' },
  { title: 'Work with brands', body: 'AI-matched paid gigs in about 14 days.' },
]

export const CREATORS_OPPORTUNITY_CARDS = [
  { title: 'Brand campaigns', body: 'Paid gigs from Denver, Nykaa, Monster and more.' },
  { title: 'Event coverage', body: 'Shoot, stream and cover INGLU events.' },
  { title: 'Internships', body: 'Content, social and production roles.' },
  { title: 'Ambassador programs', body: 'Earn your node on The Grid.' },
]


// ---- Ecosystem Page ----
export const ECOSYSTEM_STATS = [
  { value: 'E1', label: 'Education' },
  { value: 'E2', label: 'Enhancement' },
  { value: 'E3', label: 'Entertainment' },
  { value: '14', label: 'Verticals' },
]

export const ECOSYSTEM_ORBIT_ITEMS = [
  'Education', 'Enhancement', 'Entertainment', 'THE GRID', 'FOMO', 'Muse', 'Creators', 'SPACEBAR',
]

export const ECOSYSTEM_E3_CARDS = [
  { title: 'Education', body: 'Talent with skills, proof and career capital.' },
  { title: 'Enhancement', body: 'Earnings, credentials, network and a home to use them.' },
  { title: 'Entertainment', body: 'Events, music, esports and the culture students show up for.' },
]

export const ECOSYSTEM_VERTICAL_CARDS = [
  { title: 'INGLU Education', body: 'Skills built with brands.' },
  { title: 'CUET Prep', body: 'The on-ramp before campus begins.' },
  { title: 'INGLU Creators', body: '50 followers or 500K, you are in.' },
  { title: 'SPACEBAR', body: 'The home where the ecosystem belongs.' },
  { title: 'Society OS', body: 'Operating system for college societies.' },
  { title: 'FOMO Xperience', body: 'Campus events people talk about after.' },
]



// ---- Events Page ----
export const EVENTS_STATS = [
  { value: 'FOMO Dubai', label: 'Nov 15, 2026' },
  { value: '287', label: 'Registered' },
  { value: '57%', label: 'Full' },
  { value: 'Ground Zero S2', label: 'Aug 10, 2026' },
]

export const EVENTS_FEATURED_CARDS = [
  { title: 'FOMO Dubai', body: 'Nov 15, 2026 · Dubai, UAE · 500 capacity.' },
  { title: 'Ground Zero S2', body: 'Aug 10, 2026 · Delhi · creator battles and campus energy.' },
  { title: 'Campus fest takeovers', body: 'Sponsors, artists, audiences and culture operations.' },
]

export const EVENTS_FORMAT_CARDS = [
  { title: 'Founder talks', body: 'The real backstory behind ambitious youth journeys.' },
  { title: 'Creator meetups', body: 'How creators actually collaborate, earn and grow.' },
  { title: 'Workshops', body: 'Hands-on sessions that leave students with proof.' },
  { title: 'Live shows', body: 'Artists, music, culture and the moment wall.' },
]



// ---- FOMO Xperience Page ----
export const FOMO_STATS = [
  { value: '100+', label: 'Campuses' },
  { value: '1 day', label: 'Format' },
  { value: '0', label: 'Fluff' },
  { value: 'All access', label: 'Energy' },
]

export const FOMO_MOMENT_WALL_CARDS = [
  { title: 'The drop that shook the quad', body: 'Amity · Noida.' },
  { title: 'From hostel room to Rs 40Cr', body: 'Founder story at Bennett University.' },
  { title: 'How creators actually get paid', body: 'Creator economy at SRM Chennai.' },
  { title: '3,000 phones up at once', body: 'Campus fest at Christ Bangalore.' },
]

export const FOMO_MODULE_CARDS = [
  { title: 'Founder talk', body: 'Ambition in first person.' },
  { title: 'Workshop', body: 'Hands-on, useful, fast.' },
  { title: 'Creator meetup', body: 'Collaboration that keeps going.' },
  { title: 'Live show', body: 'The reason everyone remembers it.' },
]


// ---- The Grid Page ----
export const GRID_STATS = [
  { value: '200+', label: 'Active nodes' },
  { value: '500+', label: 'Campuses' },
  { value: 'Tiers', label: 'Progression' },
  { value: 'Paid', label: 'Opportunities' },
]

export const GRID_WHY_CARDS = [
  { title: 'Opportunities fragmented', body: 'Internships, gigs and collabs scattered across DMs and luck.' },
  { title: 'Communities isolated', body: 'Every campus works alone and networks reset at graduation.' },
  { title: 'Access uneven', body: 'Who you know decides what you get.' },
]

export const GRID_FLOW_CARDS = [
  { title: 'Internships', body: 'Real, paid internships from INGLU brand partners.' },
  { title: 'Campus ambassador roles', body: 'Represent brands and build local presence.' },
  { title: 'Collaborations', body: 'Creators, founders, leaders and projects.' },
  { title: 'Growth', body: 'Credentials, network and proof of momentum.' },
]



// ---- Home Sitemap Section ----
export const SITEMAP_LINKS = [
  { label: 'About INGLU', path: '/about' },
  { label: 'The Ecosystem', path: '/ecosystem' },
  { label: 'For Students', path: '/for-students' },
  { label: 'For Brands', path: '/for-brands' },
  { label: 'Events', path: '/events' },
  { label: 'Campus Buzz', path: '/campus-buzz' },
  { label: 'INGLU Creators', path: '/creators' },
  { label: 'Muse Records', path: '/muse' },
  { label: 'FOMO Xperience', path: '/fomo' },
  { label: 'SPACEBAR', path: '/spacebar' },
  { label: 'For Colleges', path: '/colleges' },
  { label: 'For Artists', path: '/artists' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Press & Media', path: '/press' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
  { label: 'THE GRID', path: '/grid' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Refund Policy', path: '/refunds' },
]


// ---- Muse Records Page ----
export const MUSE_STATS = [
  { value: 'PARO', label: 'Flagship' },
  { value: '50+', label: 'Colleges' },
  { value: 'Spotify', label: 'Editorial' },
  { value: '2026', label: 'Tour year' },
]

export const MUSE_ROSTER_CARDS = [
  { title: 'Hip-Hop', body: 'Cyphers, bars and the campus movement.' },
  { title: 'Indie', body: 'Campus voices finding their sound.' },
  { title: 'Electronic', body: 'Producers building the next campus rave.' },
  { title: 'Fusion', body: 'Where classical meets the cypher.' },
]

export const MUSE_EXPERIENCE_CARDS = [
  { title: 'Campus concerts', body: 'Emerging artists live on 500+ campuses.' },
  { title: 'Recording sessions', body: 'Studio time, production and music videos.' },
  { title: 'Creator collaborations', body: 'Artists paired with student creators.' },
  { title: 'Showcases', body: 'Rooms where labels, brands and audiences discover talent.' },
]


// ---- Press & Media Page ----
export const PRESS_STATS = [
  { value: '2017', label: 'Founded' },
  { value: '500+', label: 'Campuses' },
  { value: '1000+', label: 'Events' },
  { value: '1L+', label: 'Youth' },
]

export const PRESS_FEATURED_CARDS = [
  { title: 'YourStory', body: 'Startup and ecosystem coverage.' },
  { title: 'Entrepreneur India', body: 'Founder and growth stories.' },
  { title: 'Hindustan Times', body: 'Youth culture and campus movement.' },
  { title: 'Business Today', body: 'Brand and market context.' },
]

export const PRESS_STORY_CARDS = [
  { title: 'The Beginning', body: '2017: campus communities and student ambition.' },
  { title: 'Expansion', body: '2019: city-to-city movement.' },
  { title: 'The Ecosystem', body: '2021: events, creators and opportunities at scale.' },
]

// ---- Privacy Policy Page ----
export const PRIVACY_STATS = [
  { value: 'Clear', label: 'Data use' },
  { value: 'Secure', label: 'Systems' },
  { value: 'User', label: 'Control' },
  { value: 'DPDP', label: 'Ready' },
]

export const PRIVACY_COVERAGE_CARDS = [
  { title: 'Information collected', body: 'Account, contact, program, event and communication information.' },
  { title: 'How it is used', body: 'To operate opportunities, events, partnerships and community programs.' },
  { title: 'User choices', body: 'Access, update, unsubscribe and privacy requests.' },
]



// ---- Refund Policy Page ----
export const REFUNDS_STATS = [
  { value: 'Clear', label: 'Eligibility' },
  { value: 'Fast', label: 'Support' },
  { value: 'Event', label: 'Rules' },
  { value: 'Program', label: 'Rules' },
]

export const REFUNDS_FLOW_CARDS = [
  { title: 'Eligibility', body: 'When refunds apply and what evidence is needed.' },
  { title: 'Timelines', body: 'Expected review and processing windows.' },
  { title: 'Exceptions', body: 'No-show, transfer, cancellation and event-specific terms.' },
]


// ---- Spacebar Page ----
export const SPACEBAR_STATS = [
  { value: 'Ideas', label: 'Sticky notes' },
  { value: 'People', label: 'Introductions' },
  { value: 'Projects', label: 'First drafts' },
  { value: 'Outcomes', label: 'Startups' },
]

export const SPACEBAR_LIVING_ROOM_CARDS = [
  { title: 'Ideas', body: 'Sticky notes. Half-thoughts. The maybe.' },
  { title: 'People', body: 'Introductions. Shared obsessions.' },
  { title: 'Projects', body: 'Sketches. Prototypes. First drafts.' },
  { title: 'Outcomes', body: 'Startups. Bands. Festivals. Friends.' },
]

export const SPACEBAR_MOMENTS_CARDS = [
  { title: '11:42 PM', body: 'Three strangers, one whiteboard, zero plan.' },
  { title: '4:10 PM', body: 'Someone needed a guitarist.' },
  { title: '9:05 AM', body: 'A second-year asked a question. A final-year stayed.' },
  { title: '2:23 AM', body: 'The experiment failed beautifully.' },
]


// ---- For Students Page ----
export const STUDENTS_STATS = [
  { value: 'Rs 8-25K', label: 'Typical stipend' },
  { value: '50K+', label: 'Students' },
  { value: '14', label: 'Verticals' },
  { value: '500+', label: 'Campuses' },
]

export const STUDENTS_ADVANTAGE_CARDS = [
  { title: 'Internships', body: 'Real internships, not coffee runs.' },
  { title: 'Brand collaborations', body: 'Paid campus and creator briefs.' },
  { title: 'Networking', body: 'The connections that change a career.' },
  { title: 'Leadership', body: 'Run campus programs that actually matter.' },
  { title: 'Creator opportunities', body: 'Monetize content at any audience size.' },
  { title: 'Community', body: 'Belong to a network that outlasts your degree.' },
]

export const STUDENTS_E3_CARDS = [
  { title: 'Education', body: 'Industry-led bootcamps, playbooks and career capital.' },
  { title: 'Entertainment', body: 'FOMO Xperience, festivals, shows and campus culture.' },
  { title: 'Enhancement', body: 'THE GRID, SPACEBAR and leadership opportunities.' },
]


// ---- Terms of Service Page ----
export const TERMS_STATS = [
  { value: 'Fair', label: 'Participation' },
  { value: 'Safe', label: 'Community' },
  { value: 'Clear', label: 'Programs' },
  { value: 'Trusted', label: 'Partners' },
]

export const TERMS_STRUCTURE_CARDS = [
  { title: 'Participation', body: 'Rules for joining programs, events and communities.' },
  { title: 'Conduct', body: 'Community expectations and safety.' },
  { title: 'Programs', body: 'Terms for internships, creator briefs and brand activations.' },
]