import React, { Component } from "react";
import { FlatList } from "react-native";
import Empty from "../components/empty";
import Separator from "../../sections/components/horizontal-separator";
import Suggestion from "../components/suggestion";
import Layout from "../components/category-list-layout";

class CategoryList extends Component {
  render() {
    return (
      <Layout title="Categorías">
        <FlatList
          horizontal
          keyExtractor={this._keyExtractor}
          data={this.props.list}
          renderItem={this._renderItem}
          ListEmptyComponent={this._renderEmpty}
          ItemSeparatorComponent={this._itemSeparator}
        />
      </Layout>
    );
  }
  _keyExtractor = item => item.id.toString();
  _renderEmpty = () => <Empty msg=" No hay elementos para mostrarse" />;
  _itemSeparator = () => <Separator horizontal />;
  _renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };
}
export default CategoryList;
