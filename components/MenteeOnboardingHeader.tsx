import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

const STEPS = ['Your Goals', 'Interests', 'Your Profile'];

type Props = {
    currentStep: number; // 1-3
};

export default function MenteeOnboardingHeader({ currentStep }: Props) {
    return (
        <View className="px-6 pt-6 pb-4 bg-white border-b border-gray-100">
            {/* Top row */}
            <View className="flex-row items-center justify-between mb-4">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-9 h-9 bg-gray-50 rounded-full items-center justify-center border border-gray-100"
                >
                    <Ionicons name="arrow-back" size={18} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-xs font-semibold text-gray-400">
                    Step {currentStep} of {STEPS.length}
                </Text>
                <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
                    <Text className="text-xs text-gray-400 font-medium">Skip all</Text>
                </TouchableOpacity>
            </View>

            {/* Progress bar */}
            <View className="h-1.5 bg-gray-100 rounded-full mb-4">
                <View
                    className="h-1.5 bg-[#6B46C1] rounded-full"
                    style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                />
            </View>

            {/* Step dots */}
            <View className="flex-row justify-around">
                {STEPS.map((label, i) => {
                    const stepNum = i + 1;
                    const isDone = stepNum < currentStep;
                    const isActive = stepNum === currentStep;
                    return (
                        <View key={i} className="items-center flex-1">
                            <View className={`w-7 h-7 rounded-full items-center justify-center mb-1 ${isDone || isActive ? 'bg-[#6B46C1]' : 'bg-gray-100'
                                }`}>
                                {isDone ? (
                                    <Ionicons name="checkmark" size={13} color="white" />
                                ) : (
                                    <Text className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                        {stepNum}
                                    </Text>
                                )}
                            </View>
                            <Text className={`text-xs text-center ${isActive ? 'text-[#6B46C1] font-semibold' : 'text-gray-400'
                                }`}>
                                {label}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}