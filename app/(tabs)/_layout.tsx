import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden bg-gradient-to-r from-accent to-accent-light shadow-lg">
                <Image source={icon} tintColor="#ffffff" className="size-5" />
                <Text className="text-white text-base font-semibold ml-2"> {title}</Text>
            </View>
        )
    }

    return (
        <View className="size-full justify-center items-center mt-4 rounded-4">
            <Image source={icon} tintColor='#999999' className="size-5" />
        </View>
    )
};

const _layout = () => {
  return (
      <Tabs screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
          },
          tabBarStyle: {
              backgroundColor: '#1a1a1a',
              borderRadius: 50,
              marginHorizontal: 20,
              marginBottom: 36,
              height: 52,
              position: 'absolute',
              overflow: 'hidden',
              borderWidth: 2,
              borderColor: '#333333',
              shadowColor: '#dc2626',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
          }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Person" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
