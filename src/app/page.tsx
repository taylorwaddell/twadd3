import Nav from "~/components/Nav";
import Projects from "~/components/Projects";
import Writings from "~/components/Writings";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="grid-container">
        <div>
          <article className="grid-item">
            <h1>About</h1>
            <p className="cushy delay-show">
              I&apos;m <strong className="italics">Taylor Waddell</strong>, a{" "}
              <strong className="italics">Full Stack Developer</strong> at{" "}
              <a href="https://verisglobal.com/" target="_blank">
                Veris Global
              </a>
              , where I <span className="underline-best">create</span>{" "}
              easy-to-use components,{" "}
              <span className="underline-best">lead</span> projects to enhance
              user experience, and{" "}
              <span className="underline-best">develop</span> design systems.
            </p>
          </article>
          <section>
            <h2>Writing</h2>
            <Writings />
          </section>
        </div>
        <section>
          <h2>Projects</h2>
          <Projects />
        </section>
      </main>
    </>
  );
}
