import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Layout from "../components/suggestion-list-layout";
import Empty from "../components/empty";
import Separator from "../components/vertical-separator";
import Suggestion from "../components/suggestion";

class SuggestionList extends Component {
  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this._keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this._renderEmpty}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._itemSeparator}
        />
      </Layout>
    );
  }

  //_renderItem = ({ item }) => <Text>{item.title}</Text>;
  _keyExtractor = item => item.id.toString();
  _renderEmpty = () => <Empty msg=" No hay elementos para mostrarse" />;
  _itemSeparator = () => <Separator />;
  _renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };
}
export default SuggestionList;
