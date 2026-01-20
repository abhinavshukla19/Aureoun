import { Hero_section } from "../../Components/Hero-section/herosection";
import { Header } from "../../Combiner/header/header";
import { Continue_watching } from "../../Components/continue-watching/cw";
import { Topfive } from "../../Components/topten-movies/topfive";
import { AllMoviesTV } from "../../Components/all-movies-tv/all-movies-tv";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  // 🔐 AUTH CHECK ONLY HERE
  if (!token) {
    redirect("/signin");
  }

  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      <Header></Header>
      <Hero_section></Hero_section>
      <Topfive token={token} />
      <Continue_watching token={token} />
      <AllMoviesTV token={token}></AllMoviesTV>
    </main>
  );
}
