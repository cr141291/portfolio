import { motion } from 'framer-motion'

function Home() {
  return (
    <section>
      <h1>Home</h1>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>Hello, I'm Crystal.</h2>
      </motion.section>

      <p>Welcome to my portfolio!</p>
    </section>
  )
}

export default Home