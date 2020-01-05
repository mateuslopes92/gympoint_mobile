import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Header from '../../components/Header';

import Background from '../../components/Background';

import {
  Container,
  Content,
  CheckinButton,
  CheckInList,
  CheckInItem,
  CheckInTitle,
  CheckInDate,
} from './styles';

export default function CheckIns() {
  const studentId = useSelector(state => state.auth.student.id);

  const [refreshing, setRefresing] = useState(false);
  const [pageCount, setPageCount] = useState(1);

  const [checkins, setCheckins] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadCheckIns(page = 1) {
    try {
      const response = await api.get(`students/${studentId}/checkins`, {
        params: {
          page,
        },
      });

      const checkinList = response.data.map(checkin => {
        return {
          ...checkin,
          createdAt: formatDistanceToNow(new Date(checkin.createdAt), {
            locale: pt,
            addSuffix: true,
            includeSeconds: true,
          }),
        };
      });

      setCheckins(page >= 2 ? [...checkins, ...checkinList] : checkinList);
      setRefresing(false);
      setPageCount(page);
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function refreshList() {
    setRefresing(true);
    setCheckins([]);
    loadCheckIns();
  }

  function loadMore() {
    const nextPage = pageCount + 1;
    loadCheckIns(nextPage);
  }

  useEffect(() => {
    loadCheckIns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleNewCheckin() {
    try {
      await api.post(`/students/${studentId}/checkins`);

      loadCheckIns();

      Alert.alert('Checkin realizado com sucesso!');
    } catch (err) {
      Alert.alert(
        'Falha',
        'O check-in não pôde ser realizado. Verifique se você já fez 5 check-ins nos últimos 7 dias'
      );
    }
  }

  return (
    <Background>
      <Container>
        <Header />

        <Content>
          <CheckinButton onPress={handleNewCheckin}>
            Novo check-in
          </CheckinButton>

          <CheckInList
            onRefresh={refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={loadMore}
            data={checkins}
            keyExtractor={item => String(item.id)}
            renderItem={({ item: helpOrder }) => (
              <CheckInItem>
                <CheckInTitle>Check-in #{helpOrder.id}</CheckInTitle>
                <CheckInDate>{helpOrder.createdAt}</CheckInDate>
              </CheckInItem>
            )}
          />
        </Content>
      </Container>
    </Background>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person-pin" size={22} color={tintColor} />
  ),
};
