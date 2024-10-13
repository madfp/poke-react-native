import { SafeAreaView } from "react-native-safe-area-context";
import PokemonInput from "../pokemon-input";

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <PokemonInput />
    </SafeAreaView>
  );
}
