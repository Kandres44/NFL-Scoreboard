import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const API_URL = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';

export default function Detalle() {
  const { id } = useLocalSearchParams();
  const [partido, setPartido] = useState<any>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDetalle = async () => {
      try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        const encontrado = datos.events?.find((item: any) => item.id === id);
        setPartido(encontrado);
      } catch (error) {
        console.log('Error cargando detalle:', error);
      } finally {
        setCargando(false);
      }
    };
    cargarDetalle();
  }, [id]);

  if (cargando) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator size="large" color="#1e90ff" />
        <Text style={styles.cargandoTexto}>Cargando información del partido...</Text>
      </View>
    );
  }

  if (!partido) {
    return (
      <View style={styles.centrado}>
        <Text style={styles.cargandoTexto}>No se encontró el partido</Text>
      </View>
    );
  }

  const competencia = partido.competitions[0];
  const equipos = competencia.competitors;
  const local = equipos.find((e: any) => e.homeAway === 'home');
  const visitante = equipos.find((e: any) => e.homeAway === 'away');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🏈 Detalle del partido</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.nombrePartido}>{partido.name}</Text>

        <View style={styles.equipos}>
          <View style={styles.equipo}>
            <Text style={styles.rolEquipo}>🏠 Local</Text>
            <Text style={styles.nombreEquipo}>{local?.team?.displayName}</Text>
            <Text style={styles.score}>{local?.score || '-'}</Text>
          </View>

          <Text style={styles.vs}>VS</Text>

          <View style={styles.equipo}>
            <Text style={styles.rolEquipo}>🚩 Visitante</Text>
            <Text style={styles.nombreEquipo}>{visitante?.team?.displayName}</Text>
            <Text style={styles.score}>{visitante?.score || '-'}</Text>
          </View>
        </View>

        <View style={styles.informacion}>
          <Text style={styles.dato}>
            📅 Fecha: {new Date(partido.date).toLocaleString()}
          </Text>
          <Text style={styles.dato}>
            ⏱️ Estado: {partido.status?.type?.description}
          </Text>
          <Text style={styles.dato}>
            🏟️ Estadio: {competencia.venue?.fullName || 'No disponible'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 15 },
  centrado: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  cargandoTexto: { color: '#fff', marginTop: 10 },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  tarjeta: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  nombrePartido: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  equipos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  equipo: { flex: 1, alignItems: 'center' },
  rolEquipo: { color: '#888', fontSize: 12, marginBottom: 5 },
  nombreEquipo: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  score: { color: '#1e90ff', fontSize: 32, fontWeight: 'bold' },
  vs: { color: '#888', fontSize: 16, fontWeight: 'bold', marginHorizontal: 10 },
  informacion: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 15,
  },
  dato: { color: '#ccc', fontSize: 14, marginBottom: 6 },
});