import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description=""
      >
        <Prose>
          <p>
            Hello, I am Gaurav Shukla <br/>
            Young Full-Stack Developer & Designer currently @ <a href="https://accenture.com">Accenture</a>
          </p>
          <p>
            I like to make things. When presented with a challenge I do and learn what it takes to build the solution. 
            I like quick iterations and prototype-driven work. I am motivated by interesting projects,
            and I would rather get things done than shave a yak. I obsess over the developer experience.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
