import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { AdhkarCard } from '../../src/features/solah/components/AdhkarCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CONTAINER_WIDTH = Math.min(380, SCREEN_WIDTH - 20);

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, paddingTop: 70, backgroundColor: '#FDFDFD' }}>
      <Text style={{
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 8,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: '#333333'
      }}>
        Adhkar
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: CONTAINER_WIDTH,
          alignSelf: 'center',
          gap: 8,
          paddingHorizontal: 0,
        }}
      >
        {/* Left - Large Card */}
        <View style={{ width: 170, justifyContent: 'flex-start' }}>
          <AdhkarCard
            title="Before Prayer"
            subtitle={`Upon\ncompleting\nthe ablution`}
            onPress={() => console.log('Before Prayer pressed!')}
            variant="large"
            width={170}
            height={268}
            backgroundColor="#7F5539"
            illustration={require('../../assets/images/Group.png')}
          />
        </View>
        {/* Right - Two Small Cards Stacked */}
        <View style={{ width: 160, justifyContent: 'flex-start' }}>
          <AdhkarCard
            title="During Prayer"
            subtitle="While bowing in prayer (Rukoo')"
            onPress={() => console.log('During Prayer pressed!')}
            variant="small"
            width={177}
            height={126}
            backgroundColor="#E6D3C7"
            illustration={require('../../assets/images/Prostration.png')}
          />
          <View style={{ height: 16 }} />
          <AdhkarCard
            title="After Prayer"
            subtitle="Remembrance after saläm"
            onPress={() => console.log('After Prayer pressed!')}
            variant="small"
            width={177}
            height={126}
            backgroundColor="#E6D3C7"
            illustration={require('../../assets/images/After Solah.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
}