import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Content = styled.View`
  margin: 75px 20px 0;
`;

export const HelpInput = styled.TextInput`
  height: 300px;
  background: #fff;
  font-size: 16px;
  line-height: 21px;
  color: #999;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 20px;
  padding-top: 1px;
`;

export const HelpButton = styled(Button)`
  margin-top: 22px;
`;
