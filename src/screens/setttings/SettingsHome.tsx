import React from "react";
import { ScrollView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Card } from "@/features/settings/components/Card";
import { Item } from "@/features/settings/components/Item";
import { TitleBar } from "@/shared/components";
import { screenStyle } from "@/shared/styles";

export function SettingsHome() {
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        ...screenStyle.container,
        paddingBottom: bottom,
      }}
      showsVerticalScrollIndicator={false}
    >
      <TitleBar title="Settings" showBack={false} />

      {/* Prayer times group */}
      <Text
        style={{
          marginHorizontal: 16,
          marginTop: 24,
          color: "#b07052",
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        Prayer times
      </Text>

      <Card>
        <Item label="Calculation method" value="Standard" onPress={() => {}} />
        <Item label="Time zone" value="GMT+1" onPress={() => {}} />
        <Item label="Location" value="Nigeria, Ilorin" onPress={() => {}} />
      </Card>

      {/* Notifications */}
      <Text
        style={{
          marginHorizontal: 16,
          marginTop: 24,
          color: "#b07052",
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        Notifications
      </Text>

      <Card>
        <Item label="Prayer time notification" value="On" onPress={() => {}} />
        <Item label="Sound" value="Default" onPress={() => {}} />
        <Item label="Location" value="Nigeria, Ilorin" onPress={() => {}} />
      </Card>

      {/* General */}
      <Text
        style={{
          marginHorizontal: 16,
          marginTop: 24,
          color: "#b07052",
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        General
      </Text>

      <Card>
        <Item label="Language" value="English" onPress={() => {}} />
        <Item label="Sound" value="Default" onPress={() => {}} />
      </Card>
    </ScrollView>
  );
}
