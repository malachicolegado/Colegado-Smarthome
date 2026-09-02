import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { DeviceRow } from '@/components/device-row';
import { Devices, Palette } from '@/constants/smart-home';

export default function DevicesScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>My Devices</Text>

      <View style={styles.list}>
        {Devices.map((device) => (
          <DeviceRow key={device.id} device={device} />
        ))}
      </View>
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
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: Palette.text,
  },
  list: {
    marginTop: 16,
    gap: 12,
  },
});
