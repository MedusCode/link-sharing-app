import React, { FC, useState } from 'react';
import Button from '../button/button';
import TextInput from '../text-input/text-input';
import linkIcon from '../../assets/images/icon-link.svg';
import DropDown from '../drop-down/drop-down';
import { ReactComponent as LinkIcon } from "../../assets/images/icon-link.svg";
import Tabs from '../tabs/tabs';
import tabsItems from '../../constants/tabs';
import Links from '../../classes/links';
import { socialNetworks } from '../../constants/social-networks';
import ImageInput from '../image-input/image-input';
import LinkButton from '../link-button/link-button';
import { nanoid } from 'nanoid';

const App:FC = () => {
  const [ links, setLinks ] = useState<Links>(new Links(socialNetworks));

  return (
    <div>
      <p>Hello</p>
      <Button>Button</Button>
      <TextInput iconLink={linkIcon} placeholder={'Text Field Empty'} errorText={'Please check again'}></TextInput>
      <DropDown
        items={links.dropDownItems}
        name={'Link-1'}
        placeholder={'Choose a social network'}
        IconElement={LinkIcon}
      />
      <Tabs items={tabsItems}/>
      <ImageInput />
      {
        links.links.map((link) =>
          <LinkButton
            key={nanoid()}
            href={'https://www.youtube.com'}
            target={'_blank'}
            IconElement={link.icon}
            color={link.color}
            isLight={link.isColorLight}
          >{link.name}</LinkButton>)
      }
    </div>
  );
}

export default App;
