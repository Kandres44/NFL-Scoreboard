import { StyleSheet, Text, View } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏈 NFL Scoreboard</Text>
      <Text style={styles.subtitulo}>Inicio</Text>
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
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#aaa',
  },
});