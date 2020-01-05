import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin: 75px 25px 0;
`;

export const HelpOrder = styled.View`
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Help = styled.View`
  flex-direction: column;
`;

export const HelpHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HelpTitle = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444444;
`;

export const HelpCreatedAt = styled.Text`
  color: #666666;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
`;

export const HelpContent = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  line-height: 26px;

  color: #666666;
`;

export const Answer = styled.View``;

export const AnswerTitle = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444444;
  margin-top: 15px;
`;

export const AnswerQuestion = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  line-height: 26px;
  color: #666666;
`;
