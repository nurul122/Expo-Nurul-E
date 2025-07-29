import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Feather,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
  EvilIcons,
  Foundation
} from '@expo/vector-icons';

export default function IconScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>
      <View style={styles.iconGrid}>
        <View style={styles.iconBox}>
          <Ionicons name="home" size={40} color="#3498db" />
          <Text style={styles.iconLabel}>Home</Text>
        </View>
        <View style={styles.iconBox}>
          <FontAwesome name="rocket" size={40} color="#e67e22" />
          <Text style={styles.iconLabel}>Rocket</Text>
        </View>
        <View style={styles.iconBox}>
          <MaterialIcons name="email" size={40} color="#2ecc71" />
          <Text style={styles.iconLabel}>Email</Text>
        </View>
        <View style={styles.iconBox}>
          <Feather name="camera" size={40} color="#9b59b6" />
          <Text style={styles.iconLabel}>Camera</Text>
        </View>
        <View style={styles.iconBox}>
          <Entypo name="heart" size={40} color="#e74c3c" />
          <Text style={styles.iconLabel}>Heart</Text>
        </View>
        <View style={styles.iconBox}>
          <AntDesign name="github" size={40} color="#34495e" />
          <Text style={styles.iconLabel}>GitHub</Text>
        </View>
        <View style={styles.iconBox}>
          <MaterialCommunityIcons name="android" size={40} color="#16a085" />
          <Text style={styles.iconLabel}>Android</Text>
        </View>
        <View style={styles.iconBox}>
          <Octicons name="bell" size={40} color="#2980b9" />
          <Text style={styles.iconLabel}>Bell</Text>
        </View>
        <View style={styles.iconBox}>
          <EvilIcons name="user" size={40} color="#f39c12" />
          <Text style={styles.iconLabel}>User</Text>
        </View>
        <View style={styles.iconBox}>
          <Foundation name="refresh" size={40} color="#d35400" />
          <Text style={styles.iconLabel}>Refresh</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fdf2f8', // pink pastel
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: 30,
    columnGap: 20,
  },
  iconBox: {
    alignItems: 'center',
    width: 80,
  },
  iconLabel: {
    marginTop: 6,
    fontSize: 12,
    color: '#555',
  },
});
