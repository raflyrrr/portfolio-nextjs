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
    <Layout title="Freezy Fresh (Mobile)">
      <Container>
        <Title>
          Freezy Fresh <Badge>2022</Badge>
        </Title>
        <P>
          Pay Less For Fresh
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Flutter, BLoC, dio, Android Studio, XCode
            </span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android, iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://play.google.com/store/apps/details?id=com.freezy.app&hl=id&gl=US">
              Android{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
            <Link href="https://apps.apple.com/us/app/freezy-fresh/id1580053719">
              iOS{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>         
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <SimpleGrid gap={2} columns={2}>
          <WorkImage src="/images/works/freezymobile1.png" alt="Freezy Fresh" />
          <WorkImage src="/images/works/freezymobile2.png" alt="Freezy Fresh" />
        </SimpleGrid>
  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  