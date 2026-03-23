import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero(){

return(

<section className="min-h-screen flex items-center justify-center text-center px-6">

<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-xl max-w-2xl"
>

<img
src={`${import.meta.env.BASE_URL}profile.jpg`}
className="w-40 h-40 rounded-full mx-auto mb-6"
/>

<h1 className="text-5xl font-bold">
Veeresh R
</h1>

<TypeAnimation
sequence={[
"Software Developer",
2000,
"Java Backend Engineer",
2000,
"Spring Boot Developer",
2000,
"Software Engineer",
2000
]}
wrapper="span"
speed={50}
className="text-xl text-primary mt-3 block"
/>

<p className="mt-6 text-gray-300 max-w-xl mx-auto">
Experienced backend developer specializing in Java, Spring Boot,
microservices and scalable APIs.
</p>

<div className="mt-8 flex justify-center gap-4">

<a
href={`${import.meta.env.BASE_URL}resume.pdf`}
download
className="px-6 py-3 bg-primary rounded-lg hover:scale-105 transition"
>
Download Resume
</a>

<a
href="#contact"
className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
>
Contact Me
</a>

</div>

</motion.div>

</section>

)
}