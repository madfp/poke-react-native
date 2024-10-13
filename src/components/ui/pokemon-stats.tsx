import { View, Text, StyleSheet, FlatList } from "react-native";
import { pokemonStats } from "../../types/pokemon.model";

export default function PokemonStats({
  stats,
}: {
  stats: pokemonStats[] | undefined;
}) {
  return (
    <View style={styles.content}>
      {stats?.map((stat) => (
        <View key={stat.stat.name} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{stat.stat.name}</Text>
          </View>

          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stat.base_stat}%</Text>
            <View style={styles.bgBar}>
              <View
                style={{
                  ...styles.bar,
                  backgroundColor: stat.base_stat > 49 ? "#00ac17" : "#ff3e3e",
                  width: `${stat.base_stat}%`,
                }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "40%",
  },
  statName: {
    fontSize: 16,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "15%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "85%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
