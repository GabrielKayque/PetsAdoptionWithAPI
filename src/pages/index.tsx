import type { NextPage } from 'next';
import List from '../ui/components/list/List';
import Title from '../ui/components/title/Title';


const Home: NextPage = () => {
  return (
    <div>
      <Title 
        title='JOGOS'
        subtitle={
          <span>with a small monthly donation, <br />
            you <strong>can adopt a pet virtually</strong>
          </span>
        } 
      />

      <List pets={[
        {
          id: 1,
          name: 'Bidu',
          description: ' loruaasdjifoajsdof jas dofi jsad fioja siofdj asi dfj aiosfdj iaosjd faisjd foias df asif jaiojf',
          photo: 'https://osasco.sp.gov.br/wp-content/uploads/2022/05/1k1a0509_ccexpress.jpeg',

        },
        {
          id: 2,
          name: 'Simbad',
          description: ' loruaasdjifoajsdof jas dofi jsad fioja siofdj asi dfj aiosfdj iaosjd faisjd foias df asif jaiojf',
          photo: 'https://osasco.sp.gov.br/wp-content/uploads/2022/05/1k1a0509_ccexpress.jpeg',

        }
      ]} /> 
    </div>
  )
}

export default Home
