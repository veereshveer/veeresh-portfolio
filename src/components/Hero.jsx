import { motion } from "framer-motion"
import { resumeData } from "../data/resumeData"

export default function Hero(){

return(

<section className="min-h-screen flex items-center justify-center text-center">

<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="bg-white/10 backdrop-blur p-10 rounded-2xl"
>

<img
src="/veeresh-portfolio/profile.jpg"
className="w-40 h-40 rounded-full mx-auto mb-6"
/>

<h1 className="text-5xl font-bold">{resumeData.name}</h1>

<p className="text-xl text-primary mt-3">
{resumeData.title}
</p>

<p className="mt-6 text-gray-300 max-w-xl">
{resumeData.summary}
</p>

<div className="mt-8 flex justify-center gap-4">

<a
href="/veeresh-portfolio/resume.pdf"
download
className="px-6 py-3 bg-primary rounded"
>
Download Resume
</a>

<a
href="mailto:veereshr87@gmail.com"
className="px-6 py-3 border rounded"
>
Contact Me
</a>

</div>

</motion.div>

</section>

)
}