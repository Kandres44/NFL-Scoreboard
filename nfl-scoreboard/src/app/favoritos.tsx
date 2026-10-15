import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<any[]>([]);

  useEffect(() => {
    const cargarFavoritos = async () => {
      try {
        const guardadosRaw = await AsyncStorage.getItem('favoritosNFL');
        const guardados = guardadosRaw ? JSON.parse(guardadosRaw) : [];
        setFavoritos(guardados);
      } catch (error) {
        console.log('Error cargando favoritos:', error);
      }
    };
    cargarFavoritos();
  }, []);

  const eliminarFavorito = async (id: string) => {
    const nuevos = favoritos.filter((p) => p.id !== id);
    setFavoritos(nuevos);
    await AsyncStorage.setItem('favoritosNFL', JSON.stringify(nuevos));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>⭐ Mis partidos favoritos</Text>

      {favoritos.length === 0 ? (
        <Text style={styles.vacio}>No tienes partidos favoritos todavía ⭐</Text>
      ) : (
        favoritos.map((partido) => (
          <View style={styles.tarjeta} key={partido.id}>
            <Text style={styles.nombrePartido}>{partido.name}</Text>

            <Text style={styles.dato}>
              ⏱️ {partido.status?.type?.description}
            </Text>
            <Text style={styles.dato}>
              📅 {new Date(partido.date).toLocaleDateString()}
            </Text>
            <Text style={styles.dato}>
              🏟️ {partido.competitions?.[0]?.venue?.fullName || 'No disponible'}
            </Text>

            <TouchableOpacity
              style={styles.botonEliminar}
              onPress={() => eliminarFavorito(partido.id)}
            >
              <Text style={styles.botonTexto}>❌ Quitar favorito</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 15 },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  tarjeta: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  nombrePartido: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  dato: { color: '#ccc', fontSize: 14, marginBottom: 4 },
  botonEliminar: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 12,
  },
  botonTexto: { color: '#fff', fontWeight: 'bold' },
  vacio: { color: '#888', textAlign: 'center', marginTop: 30, fontSize: 16 },
});