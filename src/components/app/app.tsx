import React, { FC, useState } from 'react';
import Button from '../button/button';
import TextInput from '../text-input/text-input';
import linkIcon from '../../assets/images/icon-link.svg';
import DropDown from '../drop-down/drop-down';
import { ReactComponent as LinkIcon } from "../../assets/images/icon-link.svg";
import Tabs from '../tabs/tabs';
import tabsValues from '../../constants/tabs';
import Links from '../../models/links';
import { socialNetworks } from '../../constants/social-networks';
import ImageInput from '../image-input/image-input';

const App:FC = () => {
  const [ links, setLinks ] = useState<Links>(new Links(socialNetworks));

  return (
    <div>
      <p>Hello</p>
      <Button>Button</Button>
      <TextInput icon={linkIcon} placeholder={'Text Field Empty'} errorText={'Please check again'}></TextInput>
      <DropDown
        items={links.dropDownItems}
        name={'Link-1'}
        placeholder={'Choose a social network'}
        Icon={LinkIcon}
      />
      <Tabs values={tabsValues}/>
      <ImageInput />
    </div>
  );
}

export default App;
