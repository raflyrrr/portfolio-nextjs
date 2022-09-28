import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SatuDikti">
    <Container>
      <Title>
        SatuDikti <Badge>2022</Badge>
      </Title>
      <P>A web application to support government professional services activity</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://satudikti.id/">
          https://www.satudikti.id/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next JS, Tailwind, Axios, Nookies, Radium, Moment</span>
        </ListItem> 
      </List>

      <WorkImage src="/images/works/satudikti2.png" alt="SatuDikti" />
      <WorkImage src="/images/works/satudikti3.png" alt="SatuDikti" />
      <WorkImage src="/images/works/satudikti4.png" alt="SatuDikti" />
      <WorkImage src="/images/works/satudikti5.png" alt="SatuDikti" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
