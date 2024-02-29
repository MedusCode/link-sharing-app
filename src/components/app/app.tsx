import React from 'react';
import styles from './app.module.css';
import Button from '../button/button';
import TextInput from '../text-input/text-input';
import linkIcon from '../../assets/images/icon-link.svg';
import Select from '../select/select';
import SocialNetworksDropdownValues from '../../constants/social-networks-dropdown-values';
import { ReactComponent as LinkIcon } from "../../assets/images/icon-link.svg";

function App() {

  return (
    <div>
      <p>Hello</p>
      <Button>Button</Button>
      <TextInput icon={linkIcon} placeholder={'Text Field Empty'} errorText={'Please check again'}></TextInput>
      <Select
        values={SocialNetworksDropdownValues}
        name={'Link-1'}
        placeholder={'Choose a social network'}
        Icon={LinkIcon}
      />
    </div>
  );
}

export default App;
