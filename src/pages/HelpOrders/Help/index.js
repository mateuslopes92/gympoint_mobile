import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';
import Background from '../../../components/Background';
import Header from '../../../components/Header';

import { Container, Content, HelpInput, HelpButton } from './styles';

export default function Help({ navigation }) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const studentId = useSelector(state => state.auth.student.id);

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.post(`/students/${studentId}/help-orders`, {
        question,
      });
      setLoading(false);
      Alert.alert('Mensagem', 'Seu pedido foi enviado!');
      navigation.navigate('HelpList');
    } catch (error) {
      Alert.alert('Falha', 'Seu pedido nao foi enviado, verifique os dados!');
    }
  }

  return (
    <Background>
      <Container>
        <Header />
        <Content>
          <HelpInput
            placeholder="Inclua seu pedido de auxílio"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={question}
            onChangeText={setQuestion}
            multiline
          />
          <HelpButton loading={loading} onPress={handleSubmit}>
            Enviar pedido
          </HelpButton>
        </Content>
      </Container>
    </Background>
  );
}

Help.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={30} color="#EE4E62" />
    </TouchableOpacity>
  ),
});
