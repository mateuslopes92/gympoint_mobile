import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  margin: 75px 25px 0;
`;

export const CheckinButton = styled(Button)`
  margin-top: 22px;
  width: 360px;
  height: 47.41px;
`;

export const CheckInList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 30,
  },
})`
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const CheckInItem = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid #dddddd;
  border-radius: 4px;
  height: 50px;
  padding: 12px;
  margin: 10px 0;
  background: #ffffff;
`;

export const CheckInTitle = styled.Text`
  font-weight: bold;
`;

export const CheckInDate = styled.Text`
  font-size: 14px;
  color: #666666;
`;
