import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { setUser } from '../store/slices/authSlice';
import { navigationColors, commonStyles } from '../styles/theme';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

export default function RootNavigator() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(setUser(null));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={[commonStyles.centeredContainer, { backgroundColor: navigationColors.loadingBackground }]}>
        <ActivityIndicator size="large" color={navigationColors.loadingIndicator} />
      </View>
    );
  }

  return isAuthenticated ? <MainTabNavigator /> : <AuthNavigator />;
}
