import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../../components/Background';
import Header from '../../../components/Header';

import {
  Container,
  Content,
  HelpOrder,
  Help,
  HelpHeader,
  HelpTitle,
  HelpCreatedAt,
  HelpContent,
  Answer,
  AnswerTitle,
  AnswerQuestion,
} from './styles';

export default function HelpDetails({ navigation }) {
  const helpOder = navigation.getParam('helpOrder');

  return (
    <Background>
      <Container>
        <Header />
        <Content>
          <HelpOrder>
            <Help>
              <HelpHeader>
                <HelpTitle>PERGUNTA</HelpTitle>
                <HelpCreatedAt>{helpOder.createdAt}</HelpCreatedAt>
              </HelpHeader>
              <HelpContent>{helpOder.question}</HelpContent>
            </Help>
            <Answer>
              <AnswerTitle>RESPOSTA</AnswerTitle>
              <AnswerQuestion>{helpOder.answer}</AnswerQuestion>
            </Answer>
          </HelpOrder>
        </Content>
      </Container>
    </Background>
  );
}

HelpDetails.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={30} color="#EE4E62" />
    </TouchableOpacity>
  ),
});
