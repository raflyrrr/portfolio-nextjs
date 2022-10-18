import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center,
  SimpleGrid,
  Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Fienews">
    <Container>
      <Title>
        Fienews <Badge>2021</Badge>
      </Title>
      <P>
        A news application consumed news API for retrieve the latest news data
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React Native, native-base, react-native-webview, Moment Js
          </span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/raflyrrr/news-app-reactnative">
            https://github.com/raflyrrr/news-app-reactnative{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <SimpleGrid gap={2} columns={2}>
        <WorkImage src="/images/works/fienews2.png" alt="fienews" />
        <WorkImage src="/images/works/fienews3.png" alt="fienews" />
      </SimpleGrid>

      <WorkImage src="/images/works/fienews.png" alt="fienews" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
