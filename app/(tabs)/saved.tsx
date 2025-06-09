import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

const saved = () => {
  return (
    <View className="bg-primary flex-1">
      <View className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary" />

      <View className="flex justify-center items-center flex-1 flex-col gap-8 px-10">
        <View className="relative">
          <View className="w-24 h-24 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-lg">
            <Image source={icons.save} className="w-12 h-12" tintColor="#ffffff" />
          </View>
          <View className="absolute -top-2 -right-2 w-6 h-6 bg-accent-light rounded-full flex items-center justify-center">
            <Text className="text-white text-xs font-bold">0</Text>
          </View>
        </View>

        <View className="items-center space-y-2">
          <Text className="text-white text-2xl font-bold">Saved Movies</Text>
          <Text className="text-light-400 text-base text-center">
            Your personal watchlist is empty
          </Text>
        </View>

        <View className="bg-secondary border border-dark-100 rounded-xl p-6 w-full">
          <Text className="text-white font-semibold text-lg mb-2">Start Building Your Collection</Text>
          <Text className="text-light-400 text-sm mb-4">
            Save movies you want to watch later and build your personal collection
          </Text>
          <TouchableOpacity className="bg-gradient-to-r from-accent to-accent-light rounded-lg py-3 px-6 flex-row items-center justify-center">
            <Image source={icons.search} className="w-5 h-5 mr-2" tintColor="#ffffff" />
            <Text className="text-white font-semibold">Discover Movies</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default saved;
