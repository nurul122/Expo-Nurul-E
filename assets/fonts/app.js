import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

// Data hasil pengolahan dari stambuk Nurul Habibah (105841108922)
const combined = [
  { stambuk: '105841108422', name: 'Nama Ke-84' },
  { stambuk: '105841108522', name: 'Nama Ke-85' },
  { stambuk: '105841108622', name: 'Nama Ke-86' },
  { stambuk: '105841108722', name: 'Nama Ke-87' },
  { stambuk: '105841108822', name: 'Nama Ke-88' },
  { stambuk: '105841109022', name: 'Nama Ke-90' },
  { stambuk: '105841109122', name: 'Nama Ke-91' },
  { stambuk: '105841109222', name: 'Nama Ke-92' },
  { stambuk: '105841109322', name: 'Nama Ke-93' },
  { stambuk: '105841109422', name: 'Nama Ke-94' },
];

// Font-family untuk setiap nama
const fontFamilies = [
  'LatoItalic',
  'MontserratLight',
  'OpenSansBold',
  'PoppinsSemiBold',
  'RobotoRegular',
  'InterVariable',
  'MontserratVariable',
  'NotoSansVariable',
  'OpenSansVariable',
  'RobotoVariable',
];

export default function App() {
  const [fontsLoaded] = useFonts({
    // Font statis
    LatoItalic: require('./assets/fonts/Lato-Italic.ttf'),
    MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    // Font variabel
    InterVariable: require('./assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    MontserratVariable: require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    NotoSansVariable: require('./assets/fonts/NotoSans-VariableFont_wdth,wght.ttf'),
    OpenSansVariable: require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    RobotoVariable: require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {combined.map((item, index) => (
        <Text
          key={item.stambuk}
          style={{
            fontFamily: fontFamilies[index],
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          {item.name} - {item.stambuk}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
