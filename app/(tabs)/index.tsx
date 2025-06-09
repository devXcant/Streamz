import Logo from "@/components/Logo";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <View className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="flex-row items-center justify-center mt-20 mb-8">
          <Logo width={48} height={40} color="#dc2626" />
          <Text className="text-2xl font-bold text-white ml-3">
            Movie<Text className="text-accent">Hub</Text>
          </Text>
        </View>

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#dc2626"
            className="mt-10 self-center"
          />
        ) : moviesError || trendingError ? (
          <View className="bg-accent-dark/20 border border-accent rounded-xl p-4 mt-5">
            <Text className="text-accent text-center font-medium">
              Error: {moviesError?.message || trendingError?.message}
            </Text>
          </View>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />

            {trendingMovies && (
              <View className="mt-10">
                <View className="flex-row items-center mb-4">
                  <View className="w-1 h-6 bg-accent rounded-full mr-3" />
                  <Text className="text-xl text-white font-bold">
                    Trending Movies
                  </Text>
                  <View className="flex-1 h-px bg-dark-100 ml-4" />
                </View>
              </View>
            )}

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-4" />}
              className="mb-6 mt-3"
              data={trendingMovies}
              renderItem={({ item, index }) => (
                <TrendingCard movie={item} index={index} />
              )}
              keyExtractor={(item) => `trending_${item.movie_id.toString()}`}
            />

            <View className="flex-row items-center mb-4 mt-8">
              <View className="w-1 h-6 bg-accent rounded-full mr-3" />
              <Text className="text-xl text-white font-bold">
                Latest Movies
              </Text>
              <View className="flex-1 h-px bg-dark-100 ml-4" />
            </View>

            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => `latest_${item.id.toString()}`}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 15,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
