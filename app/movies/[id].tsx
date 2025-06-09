import Logo from "@/components/Logo";
import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-6">
    <Text className="text-light-400 font-medium text-sm uppercase tracking-wide">
      {label}
    </Text>
    <Text className="text-white font-semibold text-base mt-2 leading-relaxed">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  if (loading || !movie) {
    return (
      <View className="flex-1 items-center justify-center bg-primary">
        <View className="items-center">
          <View className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mb-4">
            <Logo width={48} height={40} color="#dc2626" />
          </View>
          <Text className="text-white text-lg font-medium">
            Loading movie details...
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="relative">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[600px]"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />

          {/* Rating Badge */}
          <View className="absolute top-12 right-5 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 flex-row items-center">
            <Image
              source={icons.star}
              className="w-4 h-4 mr-1"
              tintColor="#dc2626"
            />
            <Text className="text-white font-bold text-sm">
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
          </View>
        </View>

        <View className="px-6 -mt-20 relative z-10">
          <View className="bg-secondary/95 backdrop-blur-lg rounded-2xl p-6 border border-dark-100">
            <Text className="text-white font-bold text-2xl mb-2">
              {movie.title}
            </Text>

            <View className="flex-row items-center gap-x-4 mb-4">
              <Text className="text-light-400 text-sm font-medium">
                {movie?.release_date?.split("-")[0]}
              </Text>
              <View className="w-1 h-1 bg-accent rounded-full" />
              <Text className="text-light-400 text-sm font-medium">
                {movie?.runtime}m
              </Text>
            </View>

            <View className="flex-row items-center bg-accent/20 px-3 py-2 rounded-lg gap-x-2 self-start">
              <Image
                source={icons.star}
                className="w-4 h-4"
                tintColor="#dc2626"
              />
              <Text className="text-white font-bold text-sm">
                {Math.round(movie?.vote_average ?? 0)}/10
              </Text>
              <Text className="text-light-400 text-sm">
                ({movie?.vote_count} votes)
              </Text>
            </View>
          </View>

          <View className="bg-secondary/95 backdrop-blur-lg rounded-2xl p-6 mt-4 border border-dark-100">
            <MovieInfo label="Overview" value={movie?.overview} />
            <MovieInfo
              label="Genres"
              value={movie?.genres?.map((g) => g.name).join(" • ") || "N/A"}
            />

            <View className="flex flex-row justify-between mt-6">
              <View className="flex-1 mr-4">
                <MovieInfo
                  label="Budget"
                  value={
                    movie?.budget
                      ? `$${(movie.budget / 1_000_000).toFixed(1)}M`
                      : "N/A"
                  }
                />
              </View>
              <View className="flex-1">
                <MovieInfo
                  label="Revenue"
                  value={
                    movie?.revenue
                      ? `$${(movie.revenue / 1_000_000).toFixed(1)}M`
                      : "N/A"
                  }
                />
              </View>
            </View>

            <MovieInfo
              label="Production Companies"
              value={
                movie?.production_companies?.map((c) => c.name).join(" • ") ||
                "N/A"
              }
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-8 left-6 right-6 bg-gradient-to-r from-accent to-accent-light rounded-xl py-4 flex flex-row items-center justify-center shadow-lg"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="w-5 h-5 mr-2 rotate-180"
          tintColor="#ffffff"
        />
        <Text className="text-white font-semibold text-lg">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
