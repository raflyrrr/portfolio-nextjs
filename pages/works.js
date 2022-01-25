import { Container, Heading, SimpleGrid, Divider,Text,Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCovices from '../public/images/works/covices.png'
import thumbSkyoh from '../public/images/works/skyoh.png'
import thumbFienews from '../public/images/works/fienews.png'
import thumbNabungyuk from '../public/images/works/nabungyuk.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        Some works
      </Heading>
      <Text fontSize={15} mb={4} fontWeight={400}>
        See all my works on <Link href="https://github.com/raflyrrr">Github
        </Link>
      </Text>
      

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="covices" title="Covices" thumbnail={thumbCovices}>
            A global COVID-19 statistic application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="skyoh" title="Sky.oh" thumbnail={thumbSkyoh}>
            A group chatting web application
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="fienews" title="Fienews" thumbnail={thumbFienews}>
            A news application which updates data in real time
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="nabungyuk" thumbnail={thumbNabungyuk} title="NabungYuk">
          An application that can manage monthly finances about income and expenses
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
