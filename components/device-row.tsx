import { StyleSheet, Text, View } from 'react-native';

import { Palette, type Device } from '@/constants/smart-home';

export function DeviceRow({ device }: { device: Device }) {
  return (
    <View style={styles.row}>
      <View style={styles.labels}>
        <Text style={styles.name}>{device.name}</Text>
        <Text style={styles.room}>{device.room}</Text>
      </View>
      <Text style={styles.status}>{device.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 96,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Palette.outline,
    backgroundColor: Palette.surface,
  },
  labels: {
    gap: 4,
  },
  name: {
    fontSize: 19,
    fontWeight: '700',
    color: Palette.text,
  },
  room: {
    fontSize: 14,
    color: Palette.muted,
  },
  status: {
    fontSize: 15,
    fontWeight: '700',
    color: Palette.text,
  },
});
