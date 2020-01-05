import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../services/api';
import Header from '../../../components/Header';
import Background from '../../../components/Background';

import {
  Container,
  Content,
  HelpButton,
  HelpOrderList,
  HelpOrderItem,
  HelpOrderHeader,
  HelpOrderTitle,
  OrderAnswered,
  HelpOrderDate,
  HelpOrderDescription,
} from './styles';

export default function HelpList({ navigation }) {
  const studentId = useSelector(state => state.auth.student.id);
  const [helpOrders, setHelpsOrders] = useState([]);

  const [refreshing, setRefresing] = useState(false);
  const [pageCount, setPageCount] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadHelps(page = 1) {
    const response = await api.get(`students/${studentId}/help-orders`, {
      params: {
        page,
      },
    });
    const helps = response.data.map(help => {
      return {
        ...help,
        answered: help.answer_at !== null,
        createdAt: formatDistanceToNow(new Date(help.createdAt), {
          locale: pt,
          addSuffix: true,
          includeSeconds: true,
        }),
      };
    });
    setHelpsOrders(page >= 2 ? [...helpOrders, ...helps] : helps);
    setRefresing(false);
    setPageCount(page);
  }

  useEffect(() => {
    loadHelps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadMore() {
    const nextPage = pageCount + 1;

    loadHelps(nextPage);
  }

  function refreshList() {
    setRefresing(true);
    setHelpsOrders([]);
    loadHelps();
  }

  return (
    <Background>
      <Container>
        <Header />

        <Content>
          <HelpButton onPress={() => navigation.navigate('Help')}>
            Novo pedido de auxílio
          </HelpButton>

          <HelpOrderList
            onRefresh={refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
            refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
            onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
            onEndReached={loadMore}
            data={helpOrders}
            keyExtractor={helpOrder => String(helpOrder.id)}
            renderItem={({ item: helpOrder }) => (
              <HelpOrderItem
                onPress={() =>
                  navigation.navigate('HelpDetails', { helpOrder })
                }>
                <HelpOrderHeader>
                  <HelpOrderTitle>
                    <Icon
                      name={
                        helpOrder.answered
                          ? 'check-box'
                          : 'check-box-outline-blank'
                      }
                      size={22}
                      color={helpOrder.answered ? '#42CB59' : '#999'}
                    />
                    <OrderAnswered answered={helpOrder.answered}>
                      {helpOrder.answered ? 'Respondido' : 'Sem Resposta'}
                    </OrderAnswered>
                  </HelpOrderTitle>
                  <HelpOrderDate>{helpOrder.createdAt}</HelpOrderDate>
                </HelpOrderHeader>
                <HelpOrderDescription numberOfLines={3}>
                  {helpOrder.question}
                </HelpOrderDescription>
              </HelpOrderItem>
            )}
          />
        </Content>
      </Container>
    </Background>
  );
}

HelpList.navigationOptions = () => ({
  title: '',
});
