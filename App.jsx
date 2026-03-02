import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{minHeight:'100vh',background:'black',color:'white',fontFamily:'sans-serif'}}>
      <section style={{textAlign:'center',padding:'120px 20px'}}>
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}>
          BOYCINEMIX
        </motion.h1>
        <p>Cinematographer • Video Editor • Storyteller • Film Director</p>
        <a href="https://wa.me/2349011119716" target="_blank">
          <button style={{padding:'10px 20px',marginTop:'20px'}}>Hire Me</button>
        </a>
      </section>

      <section style={{padding:'40px',textAlign:'center'}}>
        <h2>Featured Works</h2>
        <p>Add your cinematic videos here.</p>
      </section>

      <section style={{padding:'40px',textAlign:'center'}}>
        <h2>Contact</h2>
        <p>WhatsApp: 09011119716</p>
        <p>Email: adeniranboye06@gmail.com</p>
        <a href="https://www.tiktok.com/@historiancinemixnarrativeletvme" target="_blank">
          TikTok Profile
        </a>
      </section>
    </div>
  );
}
