import React, { Component } from "react";
import { Text } from "react-native";

import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";
import API from "./utils/API";
type Props = {};
export default class App extends Component<Props> {
  state = { suggestionList: [] };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    console.log(movies);
    this.setState({ suggestionList: movies });
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
