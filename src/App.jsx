import { Layout, ConfigProvider } from 'antd'
import TopCard from './components/TopCard'
import CreditCardList from './components/CreditCardList';
import SuggestionCard from './components/SuggestionCard';
const { Header, Footer, Content } = Layout;


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Montserrat',
          colorPrimary: '#1d242d'
        },
      }}
    >
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white'
          }}
        >
          <img src='https://finanzvergleich.com/wp-content/uploads/2023/05/Fin-new-logo.png.png' id='logo' alt='logo.png' />
        </Header>
        <Content
          style={{
            padding: '0',
          }}
        >
          <TopCard />
          <CreditCardList />
          <SuggestionCard />
        </Content>
        <Footer
          style={{
            textAlign: 'start',
            backgroundColor: '#101851',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
          className='footer'
        >
          <span>
            Datenschutz Impressum  ©{new Date().getFullYear()} Insidemarketing Alle Rechte vorbehalten.
          </span>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App
