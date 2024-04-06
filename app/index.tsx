import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";
import { StatusBar } from 'expo-status-bar';

export default function Page() {
	return (
		<Box width="100%" height="100%" justifyContent="center" alignItems="center">
			<StatusBar style="auto" />
			<Text>Open up App.tsx to start working on your app!</Text>
			<Button onPress={() => alert("Hello, world!")} >
				<ButtonText>Press me!</ButtonText>
			</Button>
		</Box>
	);
}