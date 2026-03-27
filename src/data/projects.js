import ss1 from '../assets/Screenshot 2026-03-20 080534.png';
import ss2 from '../assets/Screenshot 2026-03-20 080543.png';
import ss3 from '../assets/Screenshot 2026-03-20 080604.png';
import ss4 from '../assets/Screenshot 2026-03-20 080612.png';
import ss5 from '../assets/Screenshot 2026-03-20 080627.png';
import elevation_1_2 from '../assets/elevation_1_2.png';
import sg_square from '../assets/sg_square.png';
import villa1 from '../assets/villa_elevation_1.jpeg';
import uwo_comm from '../assets/uwo_commercial.jpeg';
import sbi_comm from '../assets/commercial_elevation_1.jpeg';
import naivedyam_comm from '../assets/commercial_elevation_2.jpeg';
import yash_heights_entrance from '../assets/yash_heights_entrance.jpeg';

export const projectsData = [
  {
    id: "yug-villas",
    name: "Yug Villas",
    location: "Panchsheel Nagar, Jabalpur",
    year: "2011",
    status: "Completed",
    type: "Residential",
    description: "A benchmark of premium independent living offering exquisite design and comfort in the heart of Panchsheel Nagar.",
    highlights: ["Independent Living", "Premium Design", "Prime Location"],
    images: [villa1, ss1, ss2]
  },
  {
    id: "sg-square",
    name: "SG Square",
    location: "Rampur Chowk, Jabalpur",
    year: "2012",
    status: "Completed",
    type: "Commercial",
    description: "An iconic commercial and lifestyle destination redefining the urban landscape of Rampur Chowk.",
    highlights: ["Strategic Location", "High Footfall", "Modern Facade"],
    images: [sg_square, ss3, ss4]
  },
  {
    id: "yash-heights",
    name: "Yash Heights",
    location: "Dhanvantri Nagar, Jabalpur",
    year: "2013–2016",
    status: "Completed",
    type: "Residential",
    description: "A secure and luxurious residential complex offering premium lifestyle choices and state-of-the-art amenities.",
    highlights: ["Luxury Residences", "Grand Entrance", "Secure Living"],
    images: [yash_heights_entrance, ss1, ss5]
  },
  {
    id: "uwo-it-mall",
    name: "UWO IT Mall",
    location: "Narmada Road, Jabalpur",
    year: "2019",
    status: "Completed",
    type: "Commercial",
    description: "A cutting-edge IT and business hub designed to foster innovation and corporate excellence.",
    highlights: ["Corporate Suites", "High Tech Infrastructure", "Prime Location"],
    images: [uwo_comm, ss2]
  },
  {
    id: "sbi-building",
    name: "SBI Building",
    location: "Gwarighat Road, Jabalpur",
    year: "2021",
    status: "Completed",
    type: "Commercial",
    description: "A distinguished commercial landmark featuring modern architecture and premium facilities.",
    highlights: ["Strategic Location", "Premium Outlets", "Corporate Center"],
    images: [sbi_comm, ss3]
  },
  {
    id: "satguru-city-mall",
    name: "Satguru City Mall (Coming Soon)",
    location: "Tilhari, Jabalpur",
    year: "In Progress",
    status: "Ongoing",
    type: "Commercial",
    description: "An upcoming grand shopping and entertainment destination destined to become the new pulse of Tilhari.",
    highlights: ["Retail Spaces", "Entertainment Zones", "Food Courts"],
    images: [elevation_1_2, naivedyam_comm]
  },
  {
    id: "currency-tower",
    name: "Currency Tower",
    location: "Mangeli, Jabalpur",
    year: "Upcoming",
    status: "Upcoming",
    type: "Commercial",
    description: "A futuristic tower conceptualized for elite businesses seeking unparalleled prestige and connectivity.",
    highlights: ["Iconic Architecture", "Business Center", "Modern Design"],
    images: [elevation_1_2, ss4]
  },
  {
    id: "logistic-park",
    name: "Logistic Park (Coming Soon)",
    location: "Nigri, Bargi",
    year: "Upcoming",
    status: "Upcoming",
    type: "Commercial",
    description: "A massive, ultra-modern warehousing and logistics park strategically located for optimal supply chain efficiency.",
    highlights: ["Warehousing", "Supply Chain Hub", "Strategic Connectivity"],
    images: [ss5, uwo_comm]
  }
];
