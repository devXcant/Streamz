import { images } from "@/constants/images";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative">
        <View className="relative">
          <Image
            source={{ uri: poster_url }}
            className="w-32 h-48 rounded-xl border border-dark-100"
            resizeMode="cover"
          />

          {/* Gradient overlay */}
          <View className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />

          {/* Trending badge */}
          <View className="absolute top-2 right-2 bg-accent rounded-full px-2 py-1">
            <Text className="text-white text-xs font-bold">#{index + 1}</Text>
          </View>
        </View>

        {/* Big number overlay - bottom left */}
        <View className="absolute bottom-12 -left-2 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-black text-white text-7xl leading-none">
                {index + 1}
              </Text>
            }
          >
            <View className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light" />
          </MaskedView>
        </View>

        <Text className="text-sm font-bold mt-3 text-white leading-tight" numberOfLines={2}>
          {title}
        </Text>

        <View className="bg-accent/20 self-start px-2 py-1 rounded-md mt-1">
          <Text className="text-accent text-xs font-medium">Trending</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
