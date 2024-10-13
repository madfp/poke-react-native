import { Text, View } from "react-native";
import { pokemonTypes } from "../../types/pokemon.model";
import { getColorByType } from "../../utils/getColorByType";
import { POKEMON_COLORS } from "../../types/pokemon.color.model";

export default function PokemonTypes({
  types,
}: {
  types: pokemonTypes[] | undefined;
}) {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 10,
      }}
    >
      {types?.map((type) => (
        <TypePill key={type.type.url} type={type} />
      ))}
    </View>
  );
}
//,
function TypePill({ type }: { type: pokemonTypes }) {
  const bgColor = getColorByType(type.type.name as POKEMON_COLORS);
  return (
    <Text
      key={type.slot}
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: 5,
        borderRadius: 5,
        fontSize: 18,
      }}
    >
      {type.type.name.toUpperCase()}
    </Text>
  );
}
