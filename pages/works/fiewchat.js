import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="fiew">
    <Container>
      <Title>
        Fiew <Badge>2021</Badge>
      </Title>
      <P>
        A group chatting web application using chatengine.io for CMS and token
        for back-end
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fiewchat.netlify.app/">
          https://fiewchat.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React JS, chatengine.io, Netlify</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fiew.png" alt="fiew" />
      <WorkImage src="/images/works/fiew2.png" alt="fiew" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
