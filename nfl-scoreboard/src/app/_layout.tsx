import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#000', borderTopColor: '#333' },
        tabBarActiveTintColor: '#1e90ff',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="partidos"
        options={{
          title: 'Partidos',
          tabBarIcon: ({ color, size }) => <Ionicons name="football" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" color={color} size={size} />,
        }}
      />
      {/* Ocultamos la ruta de detalle de las pestañas */}
      <Tabs.Screen
        name="detalle/[id]"
        options={{ href: null }}
      />
    </Tabs>
  );
}