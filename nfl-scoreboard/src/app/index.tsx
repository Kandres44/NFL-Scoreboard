import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Inicio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🏈 NFL Scoreboard</Text>
      <Text style={styles.subtitulo}>
        Consulta partidos, resultados y equipos de la NFL.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    lineHeight: 24,
  },
});