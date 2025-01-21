import { TeamCard } from "./TeamMember";
function About() {

  const ahad = {
    name: "a",
    designation: "Front-end Engineer",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fugcounselor.com%2Flisting%2Fbanasthali-vidyapith%2F&psig=AOvVaw0pFI_E4OkNGaX0kagxiHrv&ust=1737556210528000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIihgbeDh4sDFQAAAAAdAAAAABAQ",
  };
  const danish = {
    name: "b",
    designation: "Backend-end Engineer",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fugcounselor.com%2Flisting%2Fbanasthali-vidyapith%2F&psig=AOvVaw0pFI_E4OkNGaX0kagxiHrv&ust=1737556210528000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIihgbeDh4sDFQAAAAAdAAAAABAQ",
  };
  const abubakar = {
    name: "c",
    designation: "Front End Developer",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fugcounselor.com%2Flisting%2Fbanasthali-vidyapith%2F&psig=AOvVaw0pFI_E4OkNGaX0kagxiHrv&ust=1737556210528000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIihgbeDh4sDFQAAAAAdAAAAABAQ",
  };
  const muneeb = {
    name: "d",
    designation: "Front End Developer",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fugcounselor.com%2Flisting%2Fbanasthali-vidyapith%2F&psig=AOvVaw0pFI_E4OkNGaX0kagxiHrv&ust=1737556210528000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIihgbeDh4sDFQAAAAAdAAAAABAQ",
  };
  const arsal = {
    name: "e",
    designation: "Database",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fugcounselor.com%2Flisting%2Fbanasthali-vidyapith%2F&psig=AOvVaw0pFI_E4OkNGaX0kagxiHrv&ust=1737556210528000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIihgbeDh4sDFQAAAAAdAAAAABAQ",
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
