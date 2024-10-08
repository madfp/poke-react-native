import { View, Text, StyleSheet, FlatList } from "react-native";
import { pokemonStats } from "../../types/pokemon.model";

export default function PokemonStats({ stats }: { stats: pokemonStats[] }) {
  return (
    <View style={styles.content}>
      <FlatList
        data={stats}
        renderItem={(stat) => (
          <>
            {/* Container */}
            <View key={stat.item.stat.name} style={styles.block}>
              {/* Stat name */}
              <View style={styles.blockTitle}>
                <Text style={styles.statName}>{stat.item.stat.name}</Text>
              </View>

              {/* Stat info */}
              <View style={styles.blockInfo}>
                {/* Stat percentage */}
                <Text style={styles.number}>{stat.item.base_stat}%</Text>

                {/* Status Bar */}
                <View style={styles.bgBar}>
                  <View
                    style={{
                      ...styles.bar,
                      backgroundColor:
                        stat.item.base_stat > 49 ? "#00ac17" : "#ff3e3e",
                      width: `${stat.item.base_stat}%`,
                    }}
                  />
                </View>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
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
