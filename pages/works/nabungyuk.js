import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="NabungYuk">
    <Container>
      <Title>
        NabungYuk <Badge>2021</Badge>
      </Title>
      <P>
        An application that can manage monthly finances about income and
        expenses for personal and business
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Javascript, Nodejs, React Native, lodash, Redux, Victory Native
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/raflyrrr/tabungan-app">
            https://github.com/raflyrrr/tabungan-app{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/nabungyuk2.png" alt="nabungyuk" />
        <WorkImage src="/images/works/nabungyuk3.png" alt="nabungyuk" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/nabungyuk4.png" alt="nabungyuk" />
        <WorkImage src="/images/works/nabungyuk5.png" alt="nabungyuk" />
      </SimpleGrid>{' '}
      <WorkImage src="/images/works/nabungyuk.png" alt="nabungyuk" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
