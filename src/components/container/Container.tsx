import { View, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Container;
