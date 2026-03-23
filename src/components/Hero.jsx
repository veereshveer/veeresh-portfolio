import { motion } from "framer-motion"
import { resumeData } from "../data/resumeData"

export default function Hero() {

return (

<section className="min-h-screen flex items-center justify-center text-center relative z-10 px-6">

<motion.div
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-xl max-w-2xl"
>

{/* Profile Image */}

<img
src="/profile.jpg"
alt="Veeresh Profile"
className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
/>

{/* Name */}

<h1 className="text-5xl font-bold">
{resumeData.name}
</h1>

{/* Title */}

<p className="text-2xl text-primary mt-3">
{resumeData.title}
</p>

{/* Summary */}

<p className="mt-6 text-gray-300 leading-relaxed">
{resumeData.summary}
</p>

{/* Buttons */}

<div className="mt-8 flex justify-center gap-4">

<a
href="/resume.pdf"
download
className="px-6 py-3 bg-primary rounded-lg hover:scale-105 transition"
>
Download Resume
</a>

<a
href="mailto:veereshr87@gmail.com"
className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
>
Contact Me
</a>

</div>

</motion.div>

</section>

)

}