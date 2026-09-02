/**
 * Design tokens and seed data for the Smart Home interface.
 *
 * The screens are a fixed light design, so these colors are intentionally not
 * theme-aware (see `Colors` in `@/constants/theme` for the themed palette).
 */

export const Palette = {
  /** Screen background behind the cards. */
  background: '#EFEFEF',
  /** Navigation header background. */
  header: '#FFFFFF',
  /** Card / tile fill. */
  surface: '#F5F5F5',
  /** Hairline outline drawn around every card and tile. */
  outline: '#111111',
  /** Divider under a settings row. */
  divider: '#111111',
  text: '#0D0D0D',
  muted: '#3D3D3D',
};

export type Tile = {
  id: string;
  icon: string;
  name: string;
  status: string;
};

/** The four quick-access tiles under the thermostat card on the home screen. */
export const Tiles: Tile[] = [
  { id: 'light', icon: '💡', name: 'Light', status: 'ON' },
  { id: 'ac', icon: '❄️', name: 'AC', status: '24°C' },
  { id: 'door', icon: '🔒', name: 'Door', status: 'LOCKED' },
  { id: 'camera', icon: '📷', name: 'Camera', status: 'ON' },
];

export type Device = {
  id: string;
  name: string;
  room: string;
  status: string;
};

/** The full device list shown on the devices screen. */
export const Devices: Device[] = [
  { id: 'light', name: 'Light', room: 'Living Room', status: 'ON' },
  { id: 'ac', name: 'Air Conditioner', room: 'Living Room', status: '24°C' },
];

/** Reading shown on the thermostat card. */
export const Thermostat = {
  icon: '🌡️❄️',
  temperature: '26°C',
  room: 'Living Room',
};
