import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function FavoriteButton() {
  const favorite = false;
  return (
    <>
      {favorite ? (
        <MaterialIcons name="favorite" size={24} color="black" />
      ) : (
        <MaterialIcons name="favorite-border" size={24} color="black" />
      )}
    </>
  );
}
