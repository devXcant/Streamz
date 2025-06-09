import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const profile = () => {
  return (
    <View className='bg-primary flex-1'>
      <View className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary" />

      <View className='flex justify-center items-center flex-1 flex-col gap-8 px-10'>
        <View className="relative">
          <View className="w-24 h-24 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-lg">
            <Image source={icons.person} className='w-12 h-12' tintColor='#ffffff'/>
          </View>
          <View className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-light rounded-full border-4 border-primary flex items-center justify-center">
            <View className="w-3 h-3 bg-white rounded-full" />
          </View>
        </View>

        <View className="items-center space-y-2">
          <Text className='text-white text-2xl font-bold'>Your Profile</Text>
          <Text className='text-light-400 text-base text-center'>
            Manage your account and preferences
          </Text>
        </View>

        <View className="w-full space-y-4 mt-8">
          {[
            { icon: icons.person, title: "Account Settings", subtitle: "Manage your profile" },
            { icon: icons.save, title: "Saved Movies", subtitle: "Your watchlist" },
            { icon: icons.star, title: "Preferences", subtitle: "Customize your experience" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-secondary border border-dark-100 rounded-xl p-4 flex-row items-center space-x-4 active:bg-tertiary"
            >
              <View className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Image source={item.icon} className="w-5 h-5" tintColor="#dc2626" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-semibold text-base">{item.title}</Text>
                <Text className="text-light-400 text-sm">{item.subtitle}</Text>
              </View>
              <Image source={icons.arrow} className="w-4 h-4" tintColor="#999999" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

export default profile
