
import {resumeData} from "../data/resumeData"

export default function Projects(){
return(
<section className="py-20">

<h2 className="text-3xl text-center font-bold">Projects</h2>

<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">

{resumeData.projects.map(p=>(
<div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-xl hover:scale-105 transition">

<h3 className="text-xl font-bold">{p.name}</h3>
<p className="text-gray-300 mt-2">{p.desc}</p>

</div>
))}

</div>

</section>
)
}
