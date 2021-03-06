import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoTiktok } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/masraf.png'
import thumbMusicYoutube from '../public/images/links/masrafmusic.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        mt={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a front end developer based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rafli Ramadhan
          </Heading>
          <p>Digital Artisan ( Developer / Content Creator / Gamer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/rafli.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hello, I am an Software Engineer based in Indonesia
          focused on front end development that creates high
          performance applications and neat architecture. I am also experienced
          in product design and client relations.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Jakarta, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Senior High School at SMAN 43 Jakarta
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Freelance full-stack Developer
        </BioSection>
        <BioSection>
          <BioYear>2018-2022</BioYear>
          Undergraduate, Informatics Engineering Students at Gunadarma University
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/raflyrrr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @raflyrrr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/raflyrdnn" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @raflyrdnn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/raflyrdn" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @raflyrdn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.tiktok.com/@raflyrdn" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTiktok} />}
              >
                @raflyrdn
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/mabrougels"
            title="Masraf"
            thumbnail={thumbYouTube}
          >
            Gaming Youtube Channel
          </GridItem>
          <GridItem
            href="https://www.youtube.com/rafliramadhan"
            title="Rafli Ramadhan"
            thumbnail={thumbMusicYoutube}
          >
            Music Youtube Channel
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
