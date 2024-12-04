import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

interface AppWrapperProps {
  children: ReactNode; 
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

export default AppWrapper;
