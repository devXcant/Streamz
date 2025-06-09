import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText}: Props) => {
  return (
    <View className="flex-row items-center bg-secondary border border-dark-100 rounded-2xl px-5 py-4 shadow-lg">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#dc2626"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#999999"
        className="flex-1 ml-3 text-white text-base"
        selectionColor="#dc2626"
      />
    </View>
  );
};

export default SearchBar;
