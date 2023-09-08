import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Chris, if you haven&apos;t already gathered that by
              now. I&apos;m a Chef 👨‍🍳 turned software engineer in Dallas,
              Texas. I specialize in Frontend Development, primarily with React and Redux, with a passion for security. Don&apos;t get me wrong, 
              I love learning new technologies. In fact I look forward to it. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I spent the last 5 years working as a frontend engineer. The last 3 of those spent with Text-Em-All. Building out new user interfaces and supporting the front end product team.
               I also toss in my ¢2 with security concerns and I even started a monthly penetration test to identify concerns and harden our security posture. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I still love to Cook. At any given time you can find me in the kitchen throwing down. 
              However the dishes are a little healthier these days omitting the butter in lieu of avocado oil 🥑.<br/>
              I&apos;m never afraid to share my trade secrets and you can always count on me throwing my hat in the ring at any
              kind of cook off. If you cant find me in the kitchen then there are only two other places to check, the gym or the discgolf course!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently looking for new positions where I can merge my
              love for code with my passion to learn new things. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
