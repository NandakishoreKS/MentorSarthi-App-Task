import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface InputFieldProps extends TextInputProps {
    label: string;
    iconName: keyof typeof Ionicons.glyphMap;
    isPassword?: boolean;
}

export default function InputField({
    label,
    iconName,
    isPassword = false,
    ...props
}: InputFieldProps) {

    const [isObscured, setIsObscured] = useState(isPassword);

    return (
        <View className="mb-5">
            <Text className="text-sm font-bold text-gray-700 mb-2 ml-1">{label}</Text>
            <View className="flex-row items-center bg-white rounded-2xl px-5 py-4 border border-gray-200 shadow-sm shadow-gray-100">

                <Ionicons name={iconName} size={20} color="#9CA3AF" />

                <TextInput
                    className="flex-1 ml-3 text-base text-[#1F2937]"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={isObscured}
                    {...props} // Passes all other props like onChangeText, value, keyboardType
                />

                {/* Auto-magically renders the password toggle if isPassword is true */}
                {isPassword && (
                    <TouchableOpacity onPress={() => setIsObscured(!isObscured)}>
                        <Ionicons
                            name={isObscured ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color="#9CA3AF"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}