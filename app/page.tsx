import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const page = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <section className='home-section'>
        <CompanionCard
          id='123'
          subject='Science'
          title='Neura the Brainy Explorer  '
          topic='Neural Network of the Brain'
          color='#E5D0FF'
          duration={23}
        />
        <CompanionCard
          id='123'
          subject='Maths'
          title='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          color='#FFDA6E'
          duration={30}
        />
        <CompanionCard
          id='123'
          subject='Language'
          title='Verba the Vocabulary Builder'
          topic='English Literature'
          color='#BDE7FF'
          duration={45}
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default page