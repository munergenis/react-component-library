import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Header from 'components/Header/index'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'
import Section from 'components/Section/Section'
import Badge from 'components/Badge/Badge'
import Banner from 'components/Banner/index'
import Card from 'components/Card/index'
import cloudUploadIcon from 'assets/icons/cloud-upload-icon.png'
import templateImg from 'assets/images/template-img.jpeg'
import TestimonialWithImg from 'components/TestimonialWithImg/index'

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
            <div className='grid grid-cols-4 md:flex gap-2'>
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
            <div className='grid grid-cols-4 text-sm md:text-base md:flex gap-2'>
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
            <div className='grid grid-cols-4 md:flex gap-2'>
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
            <div className='grid grid-cols-4 md:flex gap-2'>
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
            <div className='grid grid-cols-4 md:flex gap-2'>
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
            <div className='grid grid-cols-4 md:flex gap-2'>
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
            <div className='flex flex-col lg:flex-row gap-2 items-start justify-start'>
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
            <div className='flex flex-col lg:flex-row gap-2 items-start justify-start'>
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
            <div className='flex flex-col lg:flex-row gap-2 items-start justify-start'>
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
            <div className='flex flex-col lg:flex-row gap-2 items-start justify-start'>
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

        <Section id='cards' className='mb-24 flex flex-col gap-8'>
          <h2 className='text-xl mb-6 underline'>Cards</h2>
          <Section className='flex flex-col gap-4'>
            <h3>Icon</h3>
            <div className='flex flex-col lg:flex-row gap-16 lg:gap-4'>
              <Card className='w-fit mx-auto'>
                <Card.Header icon={cloudUploadIcon} iconScale='75' iconPadding='md' />
                <Card.Title className='text-2xl'>Free Plan</Card.Title>
                <Card.Description>Ideal for individuals or small teams starting out, offering essential features at no cost.</Card.Description>
                <Card.Main className='gap-12 flex-1'>
                  <ul className='flex flex-col gap-2'>
                    <li>Access to basic features</li>
                    <li>5GB cloud storage</li>
                    <li>Community support</li>
                  </ul>
                  <ul className='flex flex-col gap-2 line-through text-neutral-400'>
                    <li>Access to advanced analytics</li>
                    <li>Custom branding</li>
                    <li>Priority customer support</li>
                    <li>Multi-user access</li>
                  </ul>
                </Card.Main>
                <Card.Title className='text-3xl mt-8'>
                  $0/month
                </Card.Title>
              </Card>
              <Card className='w-fit'>
                <Card.Header icon={cloudUploadIcon} iconScale='75' iconPadding='md' />
                <Card.Title className='text-2xl'>Pro Plan</Card.Title>
                <Card.Description>Perfect for growing teams, providing advanced tools and increased support to enhance productivity.</Card.Description>
                <Card.Main className='gap-12 flex-1'>
                  <ul className='flex flex-col gap-2'>
                    <li>Access to all basic features</li>
                    <li>100GB cloud storage</li>
                    <li>Advanced analytics</li>
                    <li>Custom branding</li>
                    <li>Priority customer support</li>
                    <li>Multi-user access (up to 5 users)</li>
                  </ul>
                  <ul className='flex flex-col gap-2 line-through text-neutral-400'>
                    <li>Access to premium integrations</li>
                    <li>Dedicated account manager</li>
                  </ul>
                </Card.Main>
                <Card.Title className='text-3xl mt-8'>
                  $19/month
                </Card.Title>
              </Card>
              <Card className='w-fit'>
                <Card.Header icon={cloudUploadIcon} iconScale='75' iconPadding='md' />
                <Card.Title className='text-2xl'>Enterprise Plan</Card.Title>
                <Card.Description>Designed for large organizations, delivering comprehensive solutions, unlimited access, and dedicated support.</Card.Description>
                <Card.Main className='gap-12 flex-1'>
                  <ul className='flex flex-col gap-2'>
                    <li>All features from the Pro Plan</li>
                    <li>Unlimited cloud storage</li>
                    <li>Premium integrations</li>
                    <li>Dedicated account manager</li>
                    <li>Multi-user access (unlimited users)</li>
                    <li>24/7 priority customer support</li>
                    <li>Custom solutions and integrations</li>
                    <li>SLA guaranteed uptime</li>
                  </ul>
                </Card.Main>
                <Card.Title className='text-3xl mt-8'>
                  $49/month
                </Card.Title>
              </Card>
            </div>
          </Section>

          <Section>
            <h3 className='font-light'>Usage</h3>
            <div className='bg-neutral-800 text-neutral-200 px-6 py-6'>
              <code className='whitespace-pre-wrap'>
                {`<Card>
  <Card.Header icon={iconSrc} iconScale='75' iconPadding='lg' />
  <Card.Title>Title</Card.Title>
  <Card.Description>Description</Card.Description>
  <Card.Main>
    Main content
  </Card.Main>
</Card>`}
              </code>
            </div>
            <div className='flex mx-auto w-fit gap-4 mt-8 pb-16'>
              <div className='text-right'>
                <h3 className='mb-2 underline'>Icon Scale Values</h3>
                <p><span className='font-bold'>50</span>: 50%</p>
                <p><span className='font-bold'>75</span>: 75%</p>
                <p><span className='font-bold'>90</span>: 90%</p>
                <p><span className='font-bold'>95</span>: 95%</p>
                <p><span className='text-gray-400 px-2'>(default)</span> <span className='font-bold'>100</span>: 100%</p>
                <p><span className='font-bold'>105</span>: 105%</p>
                <p><span className='font-bold'>110</span>: 110%</p>
                <p><span className='font-bold'>125</span>: 125%</p>
                <p><span className='font-bold'>150</span>: 150%</p>
              </div>
              <div className='border' />
              <div>
                <h3 className='mb-2 underline'>Icon Padding Values</h3>
                <p><span className='font-bold'>xs</span>: width 48px</p>
                <p><span className='font-bold'>sm</span>: width 56px</p>
                <p><span className='font-bold'>md</span>: width 64px <span className='text-gray-400 px-2'>(default)</span></p>
                <p><span className='font-bold'>lg</span>: width 80px</p>
                <p><span className='font-bold'>xl</span>: width 96px</p>
              </div>
            </div>
          </Section>

          <Section className='flex flex-col gap-4'>
            <h3>Image</h3>
            <div className='flex flex-col items-start lg:flex-row gap-16 lg:gap-4'>
              <Card className='max-w-lg mx-auto'>
                <Card.Header img={templateImg} imgSize='sm' />
                <Card.Title>Language Arts Teacher</Card.Title>
                <Card.Main className='w-fit'>
                  <p className=' leading-loose mt-4 text-base'>Committed to creating an engaging classroom environment that encourages creativity, critical thinking, and effective expression.</p>
                </Card.Main>
                <Card.Description>Unlock the power of words and let your voice be heard!</Card.Description>
              </Card>
              <Card className='max-w-lg mx-auto'>
                <Card.Header img={templateImg} />
                <Card.Title>Language Arts Teacher</Card.Title>
                <Card.Main className='w-fit'>
                  <p className=' leading-loose mt-4 text-lg'>Committed to creating an engaging classroom environment that encourages creativity, critical thinking, and effective expression.</p>
                </Card.Main>
                <Card.Description>Unlock the power of words and let your voice be heard!</Card.Description>
              </Card>
              <Card className='max-w-lg mx-auto'>
                <Card.Header img={templateImg} imgSize='lg' />
                <Card.Title>Language Arts Teacher</Card.Title>
                <Card.Main className='w-fit'>
                  <p className=' leading-loose mt-4 text-lg'>Committed to creating an engaging classroom environment that encourages creativity, critical thinking, and effective expression.</p>
                </Card.Main>
                <Card.Description>Unlock the power of words and let your voice be heard!</Card.Description>
              </Card>
            </div>
            <Section>
              <h3 className='font-light'>Usage</h3>
              <div className='bg-neutral-800 text-neutral-200 px-6 py-6'>
                <code className='whitespace-pre-wrap'>
                  {`<Card>
  <Card.Header img={imgSrc} imgSize='lg' imgPosition='top' />
  <Card.Title>Title</Card.Title>
  <Card.Main>
    Main content
  </Card.Main>
  <Card.Description>Description</Card.Description>
</Card>`}
                </code>
              </div>
              <div className='flex mx-auto w-fit gap-4 mt-8 pb-16'>
                <div className='text-right'>
                  <h3 className='mb-2 underline'>Image Size Values</h3>
                  <p className='text-gray-400 text-sm'>relative to Card width</p>
                  <p><span className='font-bold'>xs</span>: width 33%</p>
                  <p><span className='font-bold'>sm</span>: width 50%</p>
                  <p><span className='text-gray-400 px-2'>(default)</span> <span className='font-bold'>md</span>: width 66%</p>
                  <p><span className='font-bold'>lg</span>: width 83%</p>
                  <p><span className='font-bold'>xl</span>: width 100%</p>
                </div>
                <div className='border' />
                <div>
                  <h3 className='mb-2 underline'>Image Position Values</h3>
                  <p className='text-transparent text-sm'>_</p>
                  <p><span className='font-bold'>top</span>: object-top</p>
                  <p><span className='font-bold'>center</span>: object-center <span className='text-gray-400 px-2'>(default)</span></p>
                  <p><span className='font-bold'>bottom</span>: object-bottom</p>
                  <p><span className='font-bold'>left</span>: object-left</p>
                  <p><span className='font-bold'>right</span>: object-right</p>
                </div>
              </div>
            </Section>
          </Section>
        </Section>

        <Section id='testimonials' className='mb-24'>
          <h2 className='text-xl mb-6 underline'>Testimonials</h2>
          <TestimonialWithImg img={templateImg} alt='template image'>
            <TestimonialWithImg.Quote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
            </TestimonialWithImg.Quote>
            <TestimonialWithImg.Footer>
              <p className='font-bold'>Author Name</p>
              <p className='font-light'>Company</p>
            </TestimonialWithImg.Footer>
          </TestimonialWithImg>
        </Section>
      </Main>
      <Footer />
    </>
  )
}

export default App
