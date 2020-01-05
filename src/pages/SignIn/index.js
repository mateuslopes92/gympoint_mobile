import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../components/Background';
import logoSign from '../../assets/logoSign.png';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Input, Image, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);

  function handleSign() {
    dispatch(signInRequest(id));
  }

  const loading = useSelector(state => state.auth.loading);

  return (
    <Background>
      <Container>
        <Image source={logoSign} />

        <Input
          placeholder="Informe seu ID de cadastro"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          returnKeyType="send"
          onChangeText={setId}
        />

        <SubmitButton loading={loading} onPress={handleSign}>
          Entrar no sistema
        </SubmitButton>
      </Container>
    </Background>
  );
}
