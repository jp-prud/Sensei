import React from 'react';

import Notification from './Notification';
import ThemeSwitcher from '../../ThemeSwitcher';

import { Container, Children } from './style';

import UserIcon from '../../../assets/images/icons/avatar.svg';

export default function UserContainerConfiguration() {
  return (
    <Container>
      <Children>
        <ThemeSwitcher />
      </Children>

      <Children>
        <Notification />
      </Children>

      <Children>
        <img src={UserIcon} alt="user-icon" />
      </Children>
    </Container>
  );
}
