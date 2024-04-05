import {StatusBar} from 'expo-status-bar';
import {config} from "@gluestack-ui/config"
import {Box, GluestackUIProvider, Text} from "@gluestack-ui/themed";

export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<StatusBar style="auto"/>
			<Box width="100%" justifyContent="center" alignItems="center">
				<Text>Open up App.tsx to start working on your app!</Text>
			</Box>
		</GluestackUIProvider>
	);
}