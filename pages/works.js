import { Container, Heading, SimpleGrid, Divider,Text,Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCovices from '../public/images/works/covices.png'
import thumbFiew from '../public/images/works/fiew.png'
import thumbFienews from '../public/images/works/fienews.png'
import thumbSatuDikti from '../public/images/works/satudikti.png'
import thumbFreezyFreshWeb from '../public/images/works/freezyweb1.png'
import thumbFreezyFreshMobile from '../public/images/works/freezymobile1.png'
import thumbBernofarm from '../public/images/works/bernofarm1.png'


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
          <WorkGridItem id="fiewchat" title="Fiew" thumbnail={thumbFiew}>
            A group chatting web application
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="fienews" title="Fienews" thumbnail={thumbFienews}>
            A news application which updates data in real time
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="satudikti" title="SatuDikti" thumbnail={thumbSatuDikti}>
            A Directorate General of Higher Education Research and Technology super-app application
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="freezyweb" title="Freezy Fresh (Web)" thumbnail={thumbFreezyFreshWeb}>
            Pay Less For Fresh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="bernofarm" title="Bernofarm (CekTokoObat)" thumbnail={thumbBernofarm}>
            A Pharmaceutical Company
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="freezymobile" title="Freezy Fresh (Android & iOS)" thumbnail={thumbFreezyFreshMobile}>
            Pay Less For Fresh
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
