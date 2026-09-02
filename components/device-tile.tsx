import { StyleSheet, Text, View } from 'react-native';

import { Palette, type Tile } from '@/constants/smart-home';

export function DeviceTile({ tile }: { tile: Tile }) {
  return (
    <View style={styles.tile}>
      <Text style={styles.icon}>{tile.icon}</Text>
      <Text style={styles.name}>{tile.name}</Text>
      <Text style={styles.status}>{tile.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    // Matches the 196x122 proportion of the reference design.
    aspectRatio: 1.6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Palette.outline,
    backgroundColor: Palette.surface,
  },
  icon: {
    fontSize: 30,
    lineHeight: 36,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Palette.text,
  },
  status: {
    fontSize: 14,
    fontWeight: '700',
    color: Palette.text,
  },
});
