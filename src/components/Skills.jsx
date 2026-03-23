
import {resumeData} from "../data/resumeData"

export default function Skills(){
return(
<section className="py-20">

<h2 className="text-3xl text-center font-bold">Skills</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">

{resumeData.skills.map(skill=>(
<div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl text-center hover:scale-105 transition">
{skill}
</div>
))}

</div>

</section>
)
}
