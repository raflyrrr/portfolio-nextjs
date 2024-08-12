import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="YASAONS (BULOG)">
    <Container>
      <Title>
        YASAONS <Badge>2023</Badge>
      </Title>
      <P>Logistics management services for distributing rice from BULOG</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://admin.yasaons.com/">
          https://www.admin.yasaons.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Typescript, Bootstrap, Redux, Amcharts5, jsPDF, formik</span>
        </ListItem> 
      </List>

      <WorkImage src="/images/works/yasaons1.png" alt="yasaons" />
      <WorkImage src="/images/works/yasaons2.png" alt="yasaons" />
      <WorkImage src="/images/works/yasaons3.png" alt="yasaons" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
