import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function UserCard({alignSelf, list}) {
  return (
    <View style={[styles.card, {alignSelf: alignSelf}]}>
      <Text style={styles.name}>Name: {list.name}</Text>
      <Text>Email: {list.email}</Text>
      <Text>{list.company.catchPhrase}</Text>
      <Text>Phone: {list.phone}</Text>
      <Text style={styles.website}>{list.website}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    borderWidth: 1.3,
    borderRadius: 20,
    padding: 10,
    paddingBottom: 0,
  },
  website: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 8,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  name: {
    fontWeight: 'bold',
  },
});
