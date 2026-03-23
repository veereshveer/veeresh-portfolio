
import Particles from "react-tsparticles"

export default function ParticlesBackground(){
return(
<Particles
options={{
background:{color:"#0f172a"},
particles:{
number:{value:60},
size:{value:2},
move:{enable:true,speed:1},
links:{enable:true,color:"#6366f1"}
}
}}
/>
)
}
