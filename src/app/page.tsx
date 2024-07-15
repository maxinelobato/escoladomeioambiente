import { AboutCourses } from './components/about-courses'
import { AboutHome } from './components/about-home'
import { Carrossel } from './components/carrossel'
import { Courses } from './components/courses'
import { Partners } from './components/partners'

export default function Home() {
  return (
    <>
      <AboutHome />
      <AboutCourses />
      <Courses />
      <Partners />
      <Carrossel />
    </>
  )
}
