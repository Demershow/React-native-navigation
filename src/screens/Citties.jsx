import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import API from "../Components/api/connection";

export default function city({ navigation, route }) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      await API.get(`${route.params.city}`).then((response) => {
        setWeather(response.data.results);
      });
      console.log(weather);
    }
    getWeather();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <Text style={styles.titleCity}>
          {(route.params.city, weather.city_name)}
        </Text>
      </View>
      <View>
        <Text style={styles.titleCity}>{weather.temp}°C</Text>
        <Text style={styles.titleCity}>{weather.description}</Text>
      </View>
      <View>
        <FlatList
          data={weather.forecast}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.flatlist}>
              <Text>{item.date}</Text>
              <Text>{item.weekday}</Text>
              <Text>{item.max}</Text>
              <Text>{item.min}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleCity: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 45,
  },
  flatlist: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#B0C4DE",
    width: 375,
    padding: 5,
    height: 50,
    borderRadius: 10,
    margin: 20,
  },
});
