import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">React Hooks</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Material Ui</span>
            <span className="chip">Styled Components</span>
            <span className="chip">GitHub</span>
            <span className="chip">Jenkins</span>
            <span className="chip">Heroku</span>
            <span className="chip">Postman</span>
            <span className="chip">Trello</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React Native</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Python</span>
            <span className="chip">Bash Scripting</span>
            <span className="chip">Burp Suite</span>
            <span className="chip">OWASP Zap</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
