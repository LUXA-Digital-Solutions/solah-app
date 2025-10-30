import React from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Card, Item } from "@/features/settings/components";
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
      <Card title="Solah times">
        <Item label="Calculation method" value="Standard" onPress={() => {}} />
        <Item label="Time zone" value="GMT+1" onPress={() => {}} />
        <Item label="Location" value="Nigeria, Ilorin" onPress={() => {}} />
      </Card>

      {/* Notifications */}
      <Card title="Notifications">
        <Item label="Solah time notification" value="On" onPress={() => {}} />
        <Item label="Sound" value="Default" onPress={() => {}} />
      </Card>

      {/* General */}
      <Card title="General">
        <Item label="Language" value="English" onPress={() => {}} />
        <Item label="Sound" value="Default" onPress={() => {}} />
      </Card>
    </ScrollView>
  );
}
