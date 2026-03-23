import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Contact(){

return(

<section id="contact" className="py-24 flex justify-center">

<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-xl max-w-lg w-full text-center">

<h2 className="text-3xl font-bold mb-6">
Contact Me
</h2>

<div className="space-y-4 text-gray-300">

<p className="flex items-center justify-center gap-3">

<FaEnvelope className="text-primary"/>

<a 
href="mailto:veereshr87@gmail.com"
className="hover:text-primary transition"
>
veereshr87@gmail.com
</a>

</p>

<p className="flex items-center justify-center gap-3">

<FaPhone className="text-primary"/>

<a 
href="tel:8867797481"
className="hover:text-primary transition"
>
+91 8867797481
</a>

</p>

<p className="flex items-center justify-center gap-3">

<FaLinkedin className="text-primary"/>

<a
href="https://www.linkedin.com/in/veeresh-r-b59b68151"
target="_blank"
rel="noopener noreferrer"
className="hover:text-primary transition"
>
linkedin.com/in/veeresh-r-b59b68151
</a>

</p>

</div>

<div className="mt-8">

<a
href="mailto:veereshr87@gmail.com"
className="px-6 py-3 bg-primary rounded-lg hover:scale-105 transition inline-block"
>
Hire Me
</a>

</div>

</div>

</section>

)

}