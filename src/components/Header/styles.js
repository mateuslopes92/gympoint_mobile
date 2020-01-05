import styled from 'styled-components/native';
import logoHeader from '../../assets/logoHeader.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-self: center;
  background: #fff;
`;

export const Logo = styled.Image.attrs({
  source: logoHeader,
  resizeMode: 'cover',
})`
  margin-top: 60px;
  width: 116px;
  height: 18px;
`;
