import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Header from 'components/Header/index'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'
import Section from 'components/Section/Section'
import Badge from 'components/Badge/Badge'

const App = () => {
  return (
    <>
      <Header
        className='bg-white'
        title='React Component Library'
        icon={<FontAwesomeIcon icon={faReact} className='h-8' />}
      >
        <Header.Navbar>
          <a href='#badges'>Badges</a>
          <a href='#banners'>Banners</a>
          <a href='#cards'>Cards</a>
          <a href='#testimonials'>Testimonials</a>
        </Header.Navbar>
      </Header>
      <Main>
        <Section id='badges' className='mb-16 flex flex-col gap-6'>
          <h2 className='text-xl mb-6 underline'>Badges</h2>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Square</h3>
            <div className='flex gap-4'>
              <Badge shape='square'>Badge</Badge>
              <Badge color='red' shape='square'>Badge</Badge>
              <Badge color='yellow' shape='square'>Badge</Badge>
              <Badge color='green' shape='square'>Badge</Badge>
              <Badge color='blue' shape='square'>Badge</Badge>
              <Badge color='indigo' shape='square'>Badge</Badge>
              <Badge color='purple' shape='square'>Badge</Badge>
              <Badge color='pink' shape='square'>Badge</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Rounded</h3>
            <div className='flex gap-4'>
              <Badge>Badge</Badge>
              <Badge color='red'>Badge</Badge>
              <Badge color='yellow'>Badge</Badge>
              <Badge color='green'>Badge</Badge>
              <Badge color='blue'>Badge</Badge>
              <Badge color='indigo'>Badge</Badge>
              <Badge color='purple'>Badge</Badge>
              <Badge color='pink'>Badge</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Pill</h3>
            <div className='flex gap-4'>
              <Badge shape='pill'>Badge</Badge>
              <Badge color='red' shape='pill'>Badge</Badge>
              <Badge color='yellow' shape='pill'>Badge</Badge>
              <Badge color='green' shape='pill'>Badge</Badge>
              <Badge color='blue' shape='pill'>Badge</Badge>
              <Badge color='indigo' shape='pill'>Badge</Badge>
              <Badge color='purple' shape='pill'>Badge</Badge>
              <Badge color='pink' shape='pill'>Badge</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Square + Border</h3>
            <div className='flex gap-4'>
              <Badge shape='square' border>Badge</Badge>
              <Badge color='red' shape='square' border>Badge</Badge>
              <Badge color='yellow' shape='square' border>Badge</Badge>
              <Badge color='green' shape='square' border>Badge</Badge>
              <Badge color='blue' shape='square' border>Badge</Badge>
              <Badge color='indigo' shape='square' border>Badge</Badge>
              <Badge color='purple' shape='square' border>Badge</Badge>
              <Badge color='pink' shape='square' border>Badge</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Rounded + Border</h3>
            <div className='flex gap-4'>
              <Badge shape='rounded' border>Badge</Badge>
              <Badge color='red' shape='rounded' border>Badge</Badge>
              <Badge color='yellow' shape='rounded' border>Badge</Badge>
              <Badge color='green' shape='rounded' border>Badge</Badge>
              <Badge color='blue' shape='rounded' border>Badge</Badge>
              <Badge color='indigo' shape='rounded' border>Badge</Badge>
              <Badge color='purple' shape='rounded' border>Badge</Badge>
              <Badge color='pink' shape='rounded' border>Badge</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Pill + Border</h3>
            <div className='flex gap-4'>
              <Badge shape='pill' border>Badge</Badge>
              <Badge color='red' shape='pill' border>Badge</Badge>
              <Badge color='yellow' shape='pill' border>Badge</Badge>
              <Badge color='green' shape='pill' border>Badge</Badge>
              <Badge color='blue' shape='pill' border>Badge</Badge>
              <Badge color='indigo' shape='pill' border>Badge</Badge>
              <Badge color='purple' shape='pill' border>Badge</Badge>
              <Badge color='pink' shape='pill' border>Badge</Badge>
            </div>
          </Section>

        </Section>

        <Section id='banners' className='mb-16'>
          <h2 className='text-xl mb-6 underline'>Banners</h2>
          <div>banner1</div>
          <div>banner2</div>
          <div>banner3</div>
          <div>banner4</div>
          <div>banner5</div>
          <div>banner6</div>
        </Section>

        <Section id='cards' className='mb-16'>
          <h2 className='text-xl mb-6 underline'>Cards</h2>
          <div>card1</div>
          <div>card2</div>
          <div>card3</div>
          <div>card4</div>
          <div>card5</div>
          <div>card6</div>
        </Section>

        <Section id='testimonials' className='mb-16'>
          <h2 className='text-xl mb-6 underline'>Testimonials</h2>
          <div>testimonial1</div>
          <div>testimonial2</div>
          <div>testimonial3</div>
          <div>testimonial4</div>
          <div>testimonial5</div>
          <div>testimonial6</div>
        </Section>
      </Main>
      <Footer />
    </>
  )
}

export default App
