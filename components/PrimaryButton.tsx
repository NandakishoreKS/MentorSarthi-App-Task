import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'dark';
    isLoading?: boolean;
    iconName?: keyof typeof Ionicons.glyphMap;
    disabled?: boolean;
}

export default function PrimaryButton({
    title,
    onPress,
    variant = 'primary',
    isLoading = false,
    iconName,
    disabled = false
}: PrimaryButtonProps) {

    // Determine styles based on the variant
    const getBgClass = () => {
        if (disabled) return 'bg-gray-200';
        if (variant === 'secondary') return 'bg-white border-2 border-gray-100';
        if (variant === 'dark') return 'bg-[#1F2937]';
        return 'bg-[#6B46C1] shadow-lg shadow-purple-200'; // Default Primary
    };

    const getTextColor = () => {
        if (disabled) return 'text-gray-400';
        if (variant === 'secondary') return 'text-[#1F2937]';
        return 'text-white';
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            className={`w-full py-4 rounded-2xl flex-row items-center justify-center ${getBgClass()}`}
        >
            {isLoading ? (
                <ActivityIndicator color={variant === 'secondary' ? '#1F2937' : '#FFFFFF'} />
            ) : (
                <View className="flex-row items-center justify-center space-x-2">
                    {iconName && (
                        <Ionicons
                            name={iconName}
                            size={20}
                            color={variant === 'secondary' ? '#1F2937' : '#FFFFFF'}
                            className="mr-2"
                        />
                    )}
                    <Text className={`font-bold text-lg tracking-wide ${getTextColor()}`}>
                        {title}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
}