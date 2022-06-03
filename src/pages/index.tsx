import type { NextPage } from 'next';
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
    </div>
  )
}

export default Home
