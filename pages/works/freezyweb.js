import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Freezy Fresh (Web)">
    <Container>
      <Title>
        Freezy Fresh <Badge>2022</Badge>
      </Title>
      <P>Pay Less For Fresh</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://freezyfresh.com/">
          https://www.freezyfresh.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React JS, Antd, Redux, Axios, Firebase, OAuth</span>
        </ListItem> 
      </List>

      <WorkImage src="/images/works/freezyweb1.png" alt="Freezy Fresh" />
      <WorkImage src="/images/works/freezyweb2.png" alt="Freezy Fresh" />
      <WorkImage src="/images/works/freezyweb3.png" alt="Freezy Fresh" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
