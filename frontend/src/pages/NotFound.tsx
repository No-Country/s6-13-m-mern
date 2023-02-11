import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Hero from '../components/Hero'

const NotFound = () => {
  return (
    <section className="bg-content bg-redLight w-full">
      <Hero imageUrl="./assets/buildings.svg">
        <Container>
          <div className="flex flex-col items-center pt-16 gap-8">
            <h2 className="text-4.5xl text-blueDark font-bold">Page not found</h2>
            <Link
              className="text-blueDark hover:text-blue font-semibold text-xl"
              to="/"
            >
              Back to the home!
            </Link>
          </div>
        </Container>
      </Hero>
    </section>
  )
}

export default NotFound
