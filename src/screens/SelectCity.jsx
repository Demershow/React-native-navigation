import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Cities({ navigation }) {
  return (
    <View style={styles.mae}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Previsão do tempo", {
            city: "Mongaguá,SP",
            title: "Mongaguá",
          })
        }
      >
        <View style={styles.cards}>
          <View style={styles.mongagua}>
            <Image
              source={{
                uri: "https://s2.glbimg.com/CDxYrWzkxmijbKzp89JHFs4v-6c=/0x0:1141x855/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/L/f/CwxiI0QoK4rwSeLh2uLA/santa-11102019-dji-0089-2-copiar.jpg",
              }}
              style={styles.img}
            />
            <Text style={styles.titleCity}>Mongaguá</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Previsão do tempo", {
            city: "Vitória,ES",
            title: "Vitória",
          })
        }
      >
        <View style={styles.cards}>
          <View style={styles.mongagua}>
            <Image
              source={{
                uri: "https://i.ytimg.com/vi/hLrNckEmcAc/maxresdefault.jpg",
              }}
              style={styles.img}
            />
            <Text style={styles.titleCity}>Vitória</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Previsão do tempo", {
            city: "Campinas,SP",
            title: "Campinas",
          })
        }
      >
        <View style={styles.cards}>
          <View style={styles.mongagua}>
            <Image
              source={{
                uri: "https://www.tegraincorporadora.com.br/CMS/posts/339/campinas.jpg",
              }}
              style={styles.img}
            />
            <Text style={styles.titleCity}>Campinas</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Previsão do tempo", {
            city: "Curitiba,PR",
            title: "Curitiba",
          })
        }
      >
        <View style={styles.cards}>
          <View style={styles.mongagua}>
            <Image
              source={{
                uri: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/115021672.jpg?quality=70&strip=info&w=916&w=636",
              }}
              style={styles.img}
            />
            <Text style={styles.titleCity}>Curitiba</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Previsão do tempo", {
            city: "Fortaleza,CE",
            title: "FortalCity",
          })
        }
      >
        <View style={styles.cards}>
          <View style={styles.mongagua}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/7/73/Fortaleza%2C_Brazil_%284%29_%28cropped%29.jpg",
              }}
              style={styles.img}
            />
            <Text style={styles.titleCity}>Fortaleza</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mae: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  titleCity: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
  cards: {
    backgroundColor: "#B0C4DE",
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 20,
  },
  mongagua: {
    flex: 1,
    alignItems: "center",
  },

  img: {
    borderRadius: 10,
    marginTop: 10,
    width: 130,
    height: 110,
  },
});
