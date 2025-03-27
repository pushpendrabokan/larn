import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';

const LoginScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
      navigation.navigate('Home' as never);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.colors.primary,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 30,
      textAlign: 'center',
      color: theme.colors.onSurface,
    },
    button: {
      marginTop: 20,
      width: '100%',
      maxWidth: 300,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Larn</Text>
      <Text style={styles.subtitle}>
        Your personalized learning companion
      </Text>
      <Button
        mode="contained"
        onPress={handleSignIn}
        style={styles.button}
        labelStyle={{ fontSize: 16 }}
      >
        Sign in with Google
      </Button>
    </View>
  );
};

export default LoginScreen; 