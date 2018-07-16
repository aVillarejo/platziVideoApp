import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Layout from "../components/suggestion-list-layout";

export default class SuggestionList extends Component {
  render() {
    const list = [
      {
        title: "Alberto",
        key: "1"
      },
      {
        title: "Alfredo",
        key: "2"
      }
    ];

    return (
      <Layout title="Recomendado para ti">
        <FlatList data={list} renderItem={this._renderItem} />
      </Layout>
    );
  }
  _renderItem = ({ item }) => <Text>{item.title}</Text>;
}
