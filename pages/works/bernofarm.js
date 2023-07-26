import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Bernofarm (CekTokoObat)">
    <Container>
      <Title>
        Bernofarm (CekTokoObat) <Badge>2023</Badge>
      </Title>
      <P>A Pharmaceutical Company</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          {/* <Link href="https://freezyfresh.com/">
          https://www.freezyfresh.com/ <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React JS, Antd, Tailwind CSS, Redux, Axios</span>
        </ListItem> 
      </List>

      <WorkImage src="/images/works/bernofarm1.png" alt="bernofarm" />
      <WorkImage src="/images/works/bernofarm2.png" alt="bernofarm" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
