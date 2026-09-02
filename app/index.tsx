import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { DeviceTile } from '@/components/device-tile';
import { Palette, Thermostat, Tiles } from '@/constants/smart-home';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Smart Home</Text>
        <Link href="/settings" asChild>
          <Pressable hitSlop={12}>
            <Text style={styles.gear}>⚙️</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.thermostat}>
        <Text style={styles.thermostatIcon}>{Thermostat.icon}</Text>
        <Text style={styles.temperature}>{Thermostat.temperature}</Text>
        <Text style={styles.room}>{Thermostat.room}</Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.gridRow}>
          {Tiles.slice(0, 2).map((tile) => (
            <DeviceTile key={tile.id} tile={tile} />
          ))}
        </View>
        <View style={styles.gridRow}>
          {Tiles.slice(2, 4).map((tile) => (
            <DeviceTile key={tile.id} tile={tile} />
          ))}
        </View>
      </View>

      <Link href="/devices" asChild>
        <Pressable>
          <Text style={styles.viewAll}>View All Devices →</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 40,
    paddingBottom: 32,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: Palette.text,
  },
  gear: {
    fontSize: 28,
    lineHeight: 34,
  },
  thermostat: {
    marginTop: 16,
    // Matches the 405x358 proportion of the reference design.
    aspectRatio: 1.13,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 24,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Palette.outline,
    backgroundColor: Palette.surface,
  },
  thermostatIcon: {
    fontSize: 36,
    lineHeight: 44,
  },
  temperature: {
    fontSize: 62,
    fontWeight: '800',
    color: Palette.text,
  },
  room: {
    fontSize: 20,
    fontWeight: '700',
    color: Palette.text,
  },
  grid: {
    marginTop: 14,
    gap: 12,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
  },
  viewAll: {
    marginTop: 28,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: Palette.text,
  },
});
