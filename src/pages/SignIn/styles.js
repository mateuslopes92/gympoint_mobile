import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Input = styled.TextInput`
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 325px;
  height: 47.41px;
  padding: 15px;
  font-size: 16px;
  margin-top: 22px;
`;

export const Image = styled.Image`
  width: 123px;
  height: 84.29px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 22px;
  width: 325px;
  height: 47.41px;
`;
