import React from 'react';

import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '../../src/models/reactUtils';
import { ListItem } from 'react-native-elements';

import { observer } from 'mobx-react';

const ObservableListItem = observer(props => {
  const { loading, store, data, setQuery } = useQuery();

  if (loading) {
    return <ActivityIndicator></ActivityIndicator>;
  }
  return (
    <ListItem
      title={props.title}
      subtitle={props.author}
      onPress={() => {
        setQuery(
          store.mutateUpdateBook({
            id: props.id,
            author: 'authh',
            title: 'title',
          }),
        );
      }}></ListItem>
  );
});

export default observer(() => {
  const { loading, store, data, setQuery } = useQuery();

  if (loading) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  if (store.books.size < 1) {
    return <Text>Empty</Text>;
  }

  return (
    <View>
      {[...store.books.values()].map((item, i) => {
        return (
          <ObservableListItem
            title={item.title}
            author={item.author}
            id={item.id}></ObservableListItem>
        );
      })}
    </View>
  );

  //  return (
  //    <FlatList
  //      data={[...store.books.values()]}
  //      extraData={true}
  //      renderItem={({ item }) => (
  //        <ObservableListItem
  //          title={item.title}
  //          author={item.author}></ObservableListItem>
  //      )}
  //      keyExtractor={item => item.id}
  //    />
  //  );
});
