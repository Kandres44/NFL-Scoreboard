import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Info() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🏈 NFL Scoreboard</Text>

      <Text style={styles.subtitulo}>Sobre el proyecto</Text>
      <Text style={styles.texto}>
        Esta aplicación permite consultar partidos de la NFL utilizando datos
        obtenidos desde una API deportiva.
      </Text>

      <Text style={styles.subtitulo}>Funciones principales</Text>

      <View style={styles.funcion}>
        <Text style={styles.funcionTitulo}>🏈 Partidos</Text>
        <Text style={styles.texto}>Consulta encuentros actuales de la NFL.</Text>
      </View>

      <View style={styles.funcion}>
        <Text style={styles.funcionTitulo}>⭐ Favoritos</Text>
        <Text style={styles.texto}>
          Guarda tus partidos favoritos usando almacenamiento local.
        </Text>
      </View>

      <View style={styles.funcion}>
        <Text style={styles.funcionTitulo}>🔎 Detalles</Text>
        <Text style={styles.texto}>
          Visualiza información completa de cada partido.
        </Text>
      </View>

      <Text style={styles.subtitulo}>Tecnologías utilizadas</Text>
      <Text style={styles.texto}>⚛️ React Native + Expo</Text>
      <Text style={styles.texto}>🟨 JavaScript / TypeScript</Text>
      <Text style={styles.texto}>🌐 API REST ESPN</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginTop: 20,
    marginBottom: 8,
  },
  texto: { color: '#ccc', fontSize: 15, lineHeight: 22, marginBottom: 6 },
  funcion: {
    backgroundColor: '#1a1a1a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  funcionTitulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});