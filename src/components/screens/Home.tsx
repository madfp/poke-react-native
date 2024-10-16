import PokemonList from "../pokemon-list";
import { SafeAreaView } from "react-native-safe-area-context";
// TODO - import NetInfo from "@react-native-community/netinfo";

export default function Home() {
  return (
    <SafeAreaView>
      <PokemonList />
    </SafeAreaView>
  );
}
