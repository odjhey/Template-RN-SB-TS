import React from 'react';

import { Text, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '../../src/models/reactUtils';
import { observer } from 'mobx-react';
export default observer(() => {
  const { loading, store, data } = useQuery();

  if (loading) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  if (store.books.size < 1) {
    return <Text>Empty</Text>;
  }

  return (
    <FlatList
      data={[...store.books.values()]}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={item => item.id}
    />
  );
});
