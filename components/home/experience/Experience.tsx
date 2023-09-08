import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Text-Em-All",
    position: "Software Engineer",
    time: "2020 - 2023",
    location: "Frisco, Tx",
    description:
      "At Text-Em-All, I wore my coding hat with a smile, collaborating closely with Product Owners to turn their ideas into sleek code solutions. In our Agile playground, I followed the rhythm of SDLC best practices to deliver quick iterations for our clients. Testing web-based products was a routine, and I made sure to keep our customers happy with timely updates. Besides coding, I played the role of a security enthusiast, conducting monthly security audits using OWASP Zap and Burp Suite. Teaming up with our Sysadmin, I helped reinforce company-wide security policies. In a small, nimble crew, we took on the challenge of migrating and setting up servers at a new location while keeping the downtime to a minimum and ensuring smooth company-wide communication.. Also gained some mean skills in ping pong!",
    tech: [
      "Javascript",
      "TypeScript",
      "React",
      "React Hooks",
      "Redux",
      "Material UI",
      "Styled Components",
      "Jest",
      "SQL",
      "Git",
      "GitHub",
      "AWS",
    ],
  },
  {
    title: "GuestX",
    position: "Software Engineer",
    time: "2018 - 2022",
    location: "Plano, Tx",
    description:
      "As a Front End Engineer at GuestX, I put my creativity to work by giving the Kiosk UI a fresh look using React and Redux. I handled Azure's IIS, VMs, and App Service like a pro while introducing agile workflows and version control to keep things agile. Leading the charge in upgrading and maintaining new UI features was both challenging and rewarding. I also documented our development methodologies to guide future projects and wore multiple hats to meet deadlines and collaborate effectively with stakeholders.",
    tech: ["Javascript","jQuery","React", "Node", "C#", ".Net", "SQL", "Azure"],
  },
  {
    title: "THE KITCHEN",
    position: "Executive Chef",
    time: "2016 - 2020",
    location: "California, Texas,  Louisiana",
    description:
      "I orchestrated the symphony of restaurant operations, dancing through the intricate steps of inventory control and waltzing with customer service. Like a culinary sensei, I molded kitchen staff through a blend of training, occasional disciplinary action (gentle nudges, not martial arts), and performance reviews. Crafting menus was my palette, and I conducted a tightrope act to control food costs while ensuring a delicious experience for patrons. I was also the sanitation and safety maestro, making sure everything ran smoothly, just like a well-choreographed performance.  Also to answer your question..... Yes 'Bear' on hulu is very accurate!",
    tech: [
      "Chef Coat",
      "Knives",
      "Sweat",
      "Grit",
      "Whiskey",
    ],
  },
];

