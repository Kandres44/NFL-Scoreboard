import { StyleSheet, Text, View } from 'react-native';

export default function Partidos() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>🏈 Partidos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});