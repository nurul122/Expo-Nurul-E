import { StyleSheet, Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      
      {/* Persegi panjang dengan gambar */}
      <View style={styles.rectangle}>
        <Image
          source={{ uri: 'https://up.yimg.com/ib/th/id/OIP.i-xxAh3rFN6pOZ_kBwk58QHaE6?pid=Api&rs=1&c=1&qlt=95&w=157&h=104' }} // Gambar contoh
          style={styles.image}
        />
      </View>

      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Pill (kapsul) berisi emoji dan stambuk */}
      <View style={styles.pill}>
        <Text style={styles.emoji}>👤</Text>
        <Text style={styles.stambuk}>105841108922</Text>
      </View>

      {/* Nama */}
      <Text style={styles.name}>Nurul Habibah</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: "center",
    alignItems: "center",
  },

  rectangle: {
    width: 220,
    height: 150,
    backgroundColor: '#DDEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF7676',
    marginBottom: 30,
  },

  pill: {
    backgroundColor: '#4F46E5',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginBottom: 30,
  },

  emoji: {
    fontSize: 30,
    color: 'white',
  },

  stambuk: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
});
