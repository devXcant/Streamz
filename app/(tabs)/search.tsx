import Logo from "@/components/Logo";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadmovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadmovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (movies?.length > 0 && movies?.[0]) {
      updateSearchCount(searchQuery, movies[0]);
    }
  }, [movies]);

  return (
    <View className="flex-1 bg-primary">
      <View className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary" />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => `search_${item.id.toString()}`}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center mb-8">
              <Logo width={48} height={40} color="#dc2626" />
              <Text className="text-2xl font-bold text-white ml-3">
                Search<Text className="text-accent">Movies</Text>
              </Text>
            </View>

            <View className="my-5">
              <SearchBar
                placeholder="Search Movies..."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {moviesLoading && (
              <View className="flex-row items-center justify-center my-8">
                <ActivityIndicator size="large" color="#dc2626" />
                <Text className="text-light-400 ml-3">Searching...</Text>
              </View>
            )}

            {moviesError && (
              <View className="bg-accent-dark/20 border border-accent rounded-xl p-4 mx-5 my-3">
                <Text className="text-accent text-center font-medium">
                  Error: {moviesError.message}
                </Text>
              </View>
            )}

            {!moviesLoading &&
              !moviesError &&
              searchQuery.trim() &&
              movies?.length > 0 && (
                <View className="flex-row items-center mb-4">
                  <View className="w-1 h-6 bg-accent rounded-full mr-3" />
                  <Text className="text-xl text-white font-bold">
                    Results for{" "}
                    <Text className="text-accent">
                      &quot;{searchQuery}&quot;
                    </Text>
                  </Text>
                </View>
              )}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className="mt-20 px-5 items-center">
              <View className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Image
                  source={icons.search}
                  className="w-10 h-10"
                  tintColor="#666666"
                />
              </View>
              <Text className="text-center text-light-400 text-lg font-medium">
                {searchQuery.trim() ? "No movies found" : "Search for movies"}
              </Text>
              <Text className="text-center text-light-400 text-sm mt-2">
                {searchQuery.trim()
                  ? "Try different keywords or check spelling"
                  : "Enter a movie title to get started"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
