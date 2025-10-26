import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import { colors, borderRadius, spacing, fontweight, fontsize } from "@/shared/styles";

type LocationData = {
  neighborhood: string;
  city: string;
  state: string;
  country: string;
};

const LocationCard: React.FC = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // Ask for permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        setErrorMsg("Permission to access location was denied");

        return;
      }

      // Get user coordinates
      const loc = await Location.getCurrentPositionAsync({});
      const [place] = await Location.reverseGeocodeAsync(loc.coords);

      // Set formatted location
      setLocation({
        neighborhood: place.name || "Unknown Area",
        city: place.subregion || "",
        state: place.region || "",
        country: place.country || "",
      });

      // Stop loading
      setLoading(false);
    })();
  }, []);

  // Loading ui
  if (loading) {
    return (
      <View style={[styles.card, { justifyContent: "center" }]}>
        <ActivityIndicator size="large" color="#999" />
        <Text style={{ marginTop: 8, color: "#666" }}>Fetching location...</Text>
      </View>
    );
  }

  // Error ui
  if (!location) {
    setErrorMsg("Location unavailable");

    return (
      <View style={styles.card}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }

  const { neighborhood, city, state, country } = location;

  return (
    <View style={styles.card}>
      <Text style={styles.subText}>
        {neighborhood}, {city}, {state} state
      </Text>
      <Text style={styles.mainText}>{country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.brand.primary,
    borderRadius: borderRadius.sm,
    padding: spacing.s,
    alignItems: "center",
    width: "100%",
  },
  subText: {
    fontSize: fontsize.xs,
    color: colors.context.brand.inverted,
    textAlign: "center",
    fontWeight: fontweight.normal,
  },
  mainText: {
    fontSize: fontsize.xxxl,
    fontWeight: fontweight.bold,
    color: colors.context.default.inverted,
    marginTop: 4,
    textAlign: "center",
  },
  errorText: {
    fontSize: fontsize.md,
    color: "red",
    textAlign: "center",
  },
});

export default LocationCard;
