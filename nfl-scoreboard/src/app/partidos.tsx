import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';

export default function Partidos() {
  const [partidos, setPartidos] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cargarPartidos = async () => {
      try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        setPartidos(datos.events || []);
      } catch (error) {
        console.log('Error cargando partidos:', error);
      } finally {
        setCargando(false);
      }
    };
    cargarPartidos();
  }, []);

  const agregarFavorito = async (partido: any) => {
    try {
      const guardadosRaw = await AsyncStorage.getItem('favoritosNFL');
      const guardados = guardadosRaw ? JSON.parse(guardadosRaw) : [];
      const existe = guardados.find((item: any) => item.id === partido.id);
      if (!existe) {
        guardados.push(partido);
        await AsyncStorage.setItem('favoritosNFL', JSON.stringify(guardados));
        alert('⭐ Agregado a favoritos');
      } else {
        alert('Ya está en favoritos');
      }
    } catch (error) {
      console.log('Error al guardar favorito:', error);
    }
  };

  if (cargando) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator size="large" color="#1e90ff" />
        <Text style={styles.cargandoTexto}>Cargando partidos...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🏈 Partidos NFL</Text>

      {partidos.length === 0 ? (
        <Text style={styles.vacio}>No hay partidos disponibles</Text>
      ) : (
        partidos.map((partido) => (
          <View style={styles.tarjeta} key={partido.id}>
            <Text style={styles.nombrePartido}>{partido.name}</Text>

            <Text style={styles.dato}>
              📅 {new Date(partido.date).toLocaleDateString()}
            </Text>
            <Text style={styles.dato}>
              ⏱️ {partido.status?.type?.description}
            </Text>
            <Text style={styles.dato}>
              🏟️ {partido.competitions?.[0]?.venue?.fullName || 'No disponible'}
            </Text>

            <View style={styles.botones}>
              <TouchableOpacity
                style={[styles.boton, styles.botonDetalle]}
                onPress={() => router.push(`/detalle/${partido.id}`)}
              >
                <Text style={styles.botonTexto}>🔎 Detalles</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.boton, styles.botonFavorito]}
                onPress={() => agregarFavorito(partido)}
              >
                <Text style={styles.botonTexto}>⭐ Favorito</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 15 },
  centrado: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  cargandoTexto: { color: '#fff', marginTop: 10 },
  titulo: {
    fontSize: 24,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  dato: { color: '#ccc', fontSize: 14, marginBottom: 4 },
  botones: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  boton: { flex: 1, padding: 10, borderRadius: 6, alignItems: 'center', marginHorizontal: 4 },
  botonDetalle: { backgroundColor: '#1e90ff' },
  botonFavorito: { backgroundColor: '#f0ad4e' },
  botonTexto: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  vacio: { color: '#888', textAlign: 'center', marginTop: 30, fontSize: 16 },
});