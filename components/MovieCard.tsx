import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%] mb-4">
        <View className="relative">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placeholder.co/600x400/1a1a1a/ffffff.png",
            }}
            className="w-full h-52 rounded-xl border border-dark-100"
            resizeMode="cover"
          />

          {/* Rating overlay */}
          <View className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 flex-row items-center">
            <Image source={icons.star} className="w-3 h-3 mr-1" tintColor="#dc2626" />
            <Text className="text-white text-xs font-bold">{Math.round(vote_average / 2)}</Text>
          </View>

          {/* Gradient overlay */}
          <View className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl" />
        </View>

        <Text className="text-sm font-bold text-white mt-3 leading-tight" numberOfLines={2}>
          {title}
        </Text>

        <View className="flex-row items-center justify-between mt-1">
          <Text className="text-xs text-light-400 font-medium">
            {release_date?.split('-')[0]}
          </Text>
          <View className="bg-accent/20 px-2 py-1 rounded-md">
            <Text className="text-accent text-xs font-medium uppercase">Movie</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
