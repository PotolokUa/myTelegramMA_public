import { Section, Cell, Image, List, Input, Tappable } from '@telegram-apps/telegram-ui';
import { useState, type FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
  const [value, setValue] = useState('');
  const num = Number(value) || 0;

// Example calculations based on input value
  const field1 = num + 1;
  const field2 = num * 2;
  const field3 = num - 3;


  return (
    <Page back={false}>
      <List>
        <Section
          header="Розрахунок Податків"
          footer="Розраховано з любов'ю"
        >
          <Cell subtitle="Вставте потрібне значення">Init Data</Cell>
       <Input 
        status="focused" 
        header="Input" 
        placeholder="Write and clean me" 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        after={
        <Tappable Component="div" style={{display: 'flex'}} 
        onClick={() => setValue('')}>
          <Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>
        </Tappable>} />

        <Cell subtitle="Значення 1 (value + 1)">{field1}</Cell>
        <Cell subtitle="Значення 2 (value * 2)">{field2}</Cell>
        <Cell subtitle="Значення 3 (value - 3)">{field3}</Cell>
        
        </Section>
        <Section
          header="Альона ваш менеджер з фінансів"
          footer="Лінк на соціальну мережу"
        >
          
        </Section>
      </List>
    </Page>
  );
};
