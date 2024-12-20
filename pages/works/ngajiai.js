import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="ngaji.ai">
    <Container>
      <Title>
        ngaji.ai <Badge>2024</Badge>
      </Title>
      <P>
        {' '}
        An AI-based platform for managing Quran recitation learning and
        feedback.{' '}
      </P>
      <br />
      <ol>
        <li>
          <strong>User Management:</strong>
          <ul>
            <li>Manage users profiles, track their progress</li>
            <li>Provide insights into user activity</li>
          </ul>
        </li>
        <li>
          <strong>Performance Analytics:</strong>
          <ul>
            <li>
              Display real-time data and statistics, such as user performance in
              reading, listening and speaking accuracy, or completion rates.
            </li>
            <li>
              Use visualizations like charts and graphs for easier
              understanding.
            </li>
          </ul>
        </li>
        <li>
          <strong>Content Management:</strong>
          <ul>
            <li>
              Allow administrators to upload, organize, and manage contents.
            </li>
          </ul>
        </li>
        <li>
          <strong>AI Feedback Monitoring:</strong>
          <ul>
            <li>
              Track the AI performance in recognizing and correcting users
              recitations.
            </li>
            <li>
              Provide logs or insights on common user errors for improvement.
            </li>
          </ul>
        </li>
      </ol>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://admin.ngaji.ai/">
            https://www.admin.ngaji.ai/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Typescript, Ant Design, Redux, react-chart-js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ngajiai1.png" alt="ngajiai" />
      <WorkImage src="/images/works/ngajiai2.png" alt="ngajiai" />
      <WorkImage src="/images/works/ngajiai3.png" alt="ngajiai" />
      <WorkImage src="/images/works/ngajiai4.png" alt="ngajiai" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
