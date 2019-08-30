import Link from 'next/link'
import {
  Generic,
  Container,
  Content,
  Navbar,
  Section,
  Hero,
  Title,
  Footer
} from 'rbx'
import "rbx/index.sass";

const Layout = ({ children }) => {
  return (
    <Generic>
      <Navbar fixed='top' color='primary'>
        <Navbar.Brand>
          <Navbar.Item href='#'>Deadlands Classic Tools</Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align='start'>
            <Link href='/'>
              <Navbar.Item>Home</Navbar.Item>
            </Link>
            <Link href='/reference'>
              <Navbar.Item>Reference</Navbar.Item>
            </Link>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Section backgroundColor='primary'>
        <Hero>
          <Hero.Body>
            <Container>
              <Title as='h1' align='center' color='white'>
                Welcome to Next!
              </Title>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer>
        <Content textAlign='centered'>
          <strong>Deadlands Classic Tools</strong> by <a href="https://github.com/sazap10">Sachin Pande</a>.
          The source code is released under the{' '}
          <a href="https://opensource.org/licenses/mit-license.php">
            MIT License
          </a>
        </Content>
      </Footer>
    </Generic>
  )
}

export default Layout
