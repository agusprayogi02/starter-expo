import React from 'react';
import {Stack} from "expo-router";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config";

function _Layout() {
	return (
		<GluestackUIProvider config={config}>
			<Stack>
				<Stack.Screen name="index"/>
			</Stack>
		</GluestackUIProvider>
	);
}

export default _Layout;