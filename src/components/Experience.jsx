
import {resumeData} from "../data/resumeData"

export default function Experience(){
return(
<section className="py-20">

<h2 className="text-3xl text-center font-bold">Experience</h2>

<div className="max-w-3xl mx-auto mt-10 space-y-6">

{resumeData.experience.map(e=>(
<div className="bg-white/10 border border-white/20 p-6 rounded-xl">

<h3 className="font-bold">{e.company}</h3>
<p>{e.role}</p>
<p className="text-gray-400">{e.year}</p>

</div>
))}

</div>

</section>
)
}
