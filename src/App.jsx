
import ParticlesBackground from "./components/ParticlesBackground"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import GithubStats from "./components/GithubStats"

export default function App(){
return(
<div>

<div className="fixed inset-0 -z-10">
<ParticlesBackground/>
</div>

<Hero/>
<Skills/>
<Projects/>
<Experience/>
<Contact/>
<GithubStats/>
</div>
)
}
