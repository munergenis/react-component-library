import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Header from 'components/Header/index'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'
import Section from 'components/Section/Section'
import Badge from 'components/Badge/Badge'
import Banner from 'components/Banner/index'

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
        <Section id='badges' className='mb-24 flex flex-col gap-6'>
          <h2 className='text-xl mb-6 underline'>Badges</h2>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Square</h3>
            <div className='flex gap-4'>
              <Badge shape='square'>Gray</Badge>
              <Badge color='red' shape='square'>Red</Badge>
              <Badge color='yellow' shape='square'>Yellow</Badge>
              <Badge color='green' shape='square'>Green</Badge>
              <Badge color='blue' shape='square'>Blue</Badge>
              <Badge color='indigo' shape='square'>Indigo</Badge>
              <Badge color='purple' shape='square'>Purple</Badge>
              <Badge color='pink' shape='square'>Pink</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Rounded</h3>
            <div className='flex gap-4'>
              <Badge>Gray</Badge>
              <Badge color='red'>Red</Badge>
              <Badge color='yellow'>Yellow</Badge>
              <Badge color='green'>Green</Badge>
              <Badge color='blue'>Blue</Badge>
              <Badge color='indigo'>Indigo</Badge>
              <Badge color='purple'>Purple</Badge>
              <Badge color='pink'>Pink</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Pill</h3>
            <div className='flex gap-4'>
              <Badge shape='pill'>Gray</Badge>
              <Badge color='red' shape='pill'>Red</Badge>
              <Badge color='yellow' shape='pill'>Yellow</Badge>
              <Badge color='green' shape='pill'>Green</Badge>
              <Badge color='blue' shape='pill'>Blue</Badge>
              <Badge color='indigo' shape='pill'>Indigo</Badge>
              <Badge color='purple' shape='pill'>Purple</Badge>
              <Badge color='pink' shape='pill'>Pink</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Square + Border</h3>
            <div className='flex gap-4'>
              <Badge shape='square' border>Gray</Badge>
              <Badge color='red' shape='square' border>Red</Badge>
              <Badge color='yellow' shape='square' border>Yellow</Badge>
              <Badge color='green' shape='square' border>Green</Badge>
              <Badge color='blue' shape='square' border>Blue</Badge>
              <Badge color='indigo' shape='square' border>Indigo</Badge>
              <Badge color='purple' shape='square' border>Purple</Badge>
              <Badge color='pink' shape='square' border>Pink</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Rounded + Border</h3>
            <div className='flex gap-4'>
              <Badge shape='rounded' border>Gray</Badge>
              <Badge color='red' shape='rounded' border>Red</Badge>
              <Badge color='yellow' shape='rounded' border>Yellow</Badge>
              <Badge color='green' shape='rounded' border>Green</Badge>
              <Badge color='blue' shape='rounded' border>Blue</Badge>
              <Badge color='indigo' shape='rounded' border>Indigo</Badge>
              <Badge color='purple' shape='rounded' border>Purple</Badge>
              <Badge color='pink' shape='rounded' border>Pink</Badge>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Pill + Border</h3>
            <div className='flex gap-4'>
              <Badge shape='pill' border>Gray</Badge>
              <Badge color='red' shape='pill' border>Red</Badge>
              <Badge color='yellow' shape='pill' border>Yellow</Badge>
              <Badge color='green' shape='pill' border>Green</Badge>
              <Badge color='blue' shape='pill' border>Blue</Badge>
              <Badge color='indigo' shape='pill' border>Indigo</Badge>
              <Badge color='purple' shape='pill' border>Purple</Badge>
              <Badge color='pink' shape='pill' border>Pink</Badge>
            </div>
          </Section>

          <Section>
            <h3 className='font-light'>Usage</h3>
            <div className='bg-neutral-800 text-neutral-200 px-6 py-6'>
              <code className='whitespace-pre-wrap'>
                {`<Badge color='yellow' shape='pill' border>
  Text
</Badge>`}
              </code>
            </div>
          </Section>

        </Section>

        <Section id='banners' className='mb-24 flex flex-col gap-6'>
          <h2 className='text-xl mb-6 underline'>Banners</h2>
          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Success</h3>
            <div className='flex gap-2 items-start justify-start'>
              <Banner>
                <Banner.Title>Congratulations!</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sequi, dolorem incidunt mollitia sunt facilis magnam! </Banner.Text>
              </Banner>
              <Banner>
                <Banner.Title>Congratulations!</Banner.Title>
              </Banner>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Warning</h3>
            <div className='flex gap-2 items-start justify-start'>
              <Banner status='warning'>
                <Banner.Title>Attention</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sequi, dolorem incidunt mollitia sunt facilis magnam! </Banner.Text>
              </Banner>
              <Banner status='warning'>
                <Banner.Title>Attention</Banner.Title>
              </Banner>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Error</h3>
            <div className='flex gap-2 items-start justify-start'>
              <Banner status='error'>
                <Banner.Title>There is a problem with your application</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sequi, dolorem incidunt mollitia sunt facilis magnam! </Banner.Text>
              </Banner>
              <Banner status='error'>
                <Banner.Title>There is a problem with your application</Banner.Title>
              </Banner>
            </div>
          </Section>

          <Section className='flex flex-col gap-2'>
            <h3 className='font-light'>Neutral</h3>
            <div className='flex gap-2 items-start justify-start'>
              <Banner status='neutral'>
                <Banner.Title>Update available</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sequi, dolorem incidunt mollitia sunt facilis magnam! </Banner.Text>
              </Banner>
              <Banner status='neutral'>
                <Banner.Title>Update available</Banner.Title>
              </Banner>
            </div>
          </Section>

          <Section>
            <h3 className='font-light'>Usage</h3>
            <div className='bg-neutral-800 text-neutral-200 px-6 py-6'>
              <code className='whitespace-pre-wrap'>
                {`<Banner status='neutral'>
  <Banner.Title>Title</Banner.Title>
  <Banner.Text>Text</Banner.Text>
</Banner>`}
              </code>
            </div>
          </Section>

        </Section>

        <Section id='cards' className='mb-24'>
          <h2 className='text-xl mb-6 underline'>Cards</h2>
          <div>card1</div>
          <div>card2</div>
          <div>card3</div>
          <div>card4</div>
          <div>card5</div>
          <div>card6</div>
        </Section>

        <Section id='testimonials' className='mb-24'>
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
