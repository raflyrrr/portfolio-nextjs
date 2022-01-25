import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Covices">
    <Container>
      <Title>
        Covices <Badge>2021-</Badge>
      </Title>
      <P>A global COVID-19 statistic application consumed kawalcorona API and many corona statistic API from github</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://covices.netlify.app/">
          https://www.covices.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, React, Axios, Chart JS, Datatables, Netlify</span>
        </ListItem> 
      </List>

      <WorkImage src="/images/works/covices.png" alt="Covices" />
      <WorkImage src="/images/works/covices2.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
