import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import { Picker } from "@react-native-picker/picker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, nome: "Brigadeiro", valor: 50 },
        { key: 2, nome: "Americana", valor: 20 },
        { key: 3, nome: "Portuguesa", valor: 35 },
        { key: 4, nome: "Caipiria", valor: 45 },
      ],
    };
  }

  render() {
    let cardapio = this.state.pizzas.map((item, index) => {
      return <Picker.item key={index} value={index} label={item.nome} />;
      //em key e value são numeros e o index representa o numero ou posiçao
    });

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          //onValueChange e o valor que ele recebe e vai alterar tem duas propriedades
          //{caradpio} e para mostrar a piza selecionada.
          //porque o correto é <Picker> <Picker.item> </Picer>
          // e la em cima estamos retornando o Picker item
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ pizza: itemValue })
          }
        >
          {cardapio}
        </Picker>
        <Text style={styles.pizzas}>
          Voce escolheu: {this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.pizzas}>
          R$:{this.state.pizzas[this.state.pizza].valor.toFixed(2)}{" "}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: "center",
  },
});
