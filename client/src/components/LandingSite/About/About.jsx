import { TeamCard } from "./TeamMember";
function About() {

  const ahad = {
    name: "a",
    designation: "Front-end Engineer",
    image:
      "",
  };
  const danish = {
    name: "b",
    designation: "Backend-end Engineer",
    image:
      "",
  };
  const abubakar = {
    name: "c",
    designation: "Front End Developer",
    image:
      "",
  };
  const muneeb = {
    name: "d",
    designation: "Front End Developer",
    image:
      "",
  };
  const arsal = {
    name: "e",
    designation: "Database",
    image:
      "",
  };

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={a} />
        <TeamCard member={b} />
        <TeamCard member={c} />
        <TeamCard member={d} />
        <TeamCard member={e} />
      </div>
    </>
  );
}
export { About };
