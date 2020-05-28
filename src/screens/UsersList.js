import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  VirtualizedList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import UserCard from '../components/UserCard';

export default function UsersList() {
  const [state, setState] = useState({
    data: [],
    isLoading: false,
    isSuccess: false,
    message: 'No Result Found.',
    isError: false,
  });

  function _getItemCount(data) {
    return data.length;
  }

  function _getItem(item) {
    return item;
  }

  //getting all users
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    setState({...state, isSuccess: false, isError: false, isLoading: true});
    fetch('https://jsonplaceholder.typicode.com/users ')
      .then(res => res)
      .then(res => res.json())
      .then(data => {
        setState({
          ...state,
          data,
          isSuccess: true,
          isLoading: false,
          isError: false,
        });
      })
      .catch(e => {
        setState({
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          message: e.message,
        });
      });
  }

  function _renderItem({item, index}) {
    const list = item[index];
    return (
      <View style={styles.cardWrapper}>
        <UserCard
          alignSelf={index % 2 ? 'flex-end' : 'flex-start'}
          list={list}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {state.isSuccess && state.data.length > 0 && (
        <VirtualizedList
          data={state.data}
          getItemCount={_getItemCount}
          renderItem={_renderItem}
          getItem={_getItem}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          keyExtractor={(item, index) => `${index}`}
          refreshing={state.isLoading}
          onRefresh={getUsers}
        />
      )}
      {((state.isSuccess && !state.data.length) || state.isError) && (
        <View style={styles.loaderWrapper}>
          <Text>
            {state.message}
            {state.isError && (
              <Text style={styles.reloadText} onPress={getUsers}>
                , Reload
              </Text>
            )}
          </Text>
        </View>
      )}
      {state.isLoading && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator color="#000000" size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginTop: 15,
  },
  container: {
    paddingHorizontal: 2,
  },
  loaderWrapper: {
    height: '100%',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  reloadText: {
    color: 'blue',
  },
});
