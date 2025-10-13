// app.config.js
import { ConfigContext, ExpoConfig } from "expo/config";

import { version } from "./package.json";

const EAS_PROJECT_ID = "8adc6578-e4a8-4fa8-98b4-37ab84ad6a76";
const PROJECT_SLUG = "solah-app";
const OWNER = "luxa-digitals";

const APP_NAME = "Solah App";
const SCHEME = "com.luxa.solahapp";

const IOS_ICON = "./assets/images/icon.png";
const ADAPTIVE_ICON = {
  bgColor: "#E6F4FE",
  fgImage: "./assets/images/android-icon-foreground.png",
  bgImage: "./assets/images/android-icon-background.png",
  mcImage: "./assets/images/android-icon-monochrome.png",
};
const SPLASH_ICON = {
  image: "./assets/images/splash-icon.png",
  bgColor: "#ffffff",
  darkImage: "./assets/images/splash-icon.png", // Not setup currently.
  darkBgColor: "#000000"
};

// Environment-specific overrides
function getDynamicAppConfig(
  environment: "development" | "preview" | "production"
) {
  if ( environment === "production" ) {
    return {
      name: APP_NAME,
      scheme: SCHEME,
    };
  }

  if ( environment === "preview" ) {
    return {
      name: `${APP_NAME} (Preview)`,
      scheme: `${SCHEME}.preview`,
    };
  }

  return {
    name: `${APP_NAME} (Dev)`,
    scheme: `${SCHEME}.dev`,
  };
}

// CONFIG

export default ( { config }: ConfigContext ): ExpoConfig => {
  const env =
    ( process.env.APP_ENV as "development" | "preview" | "production" ) ||
    "development";

  console.log( "⚙️ Building app for environment:", env );

  const { name, scheme } =
    getDynamicAppConfig( env );

  return {
    ...config,
    name,
    slug: PROJECT_SLUG,
    version,
    orientation: "portrait",
    icon: IOS_ICON,
    scheme,
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    platforms: [ "android", "ios" ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: scheme,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: ADAPTIVE_ICON.bgColor,
        foregroundImage: ADAPTIVE_ICON.fgImage,
        backgroundImage: ADAPTIVE_ICON.bgImage,
        monochromeImage: ADAPTIVE_ICON.mcImage,
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: scheme,
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": SPLASH_ICON.image,
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": SPLASH_ICON.bgColor,
          "dark": {
            "backgroundColor": SPLASH_ICON.darkBgColor,
          }
        }
      ]
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
    owner: OWNER,
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
    },
  };
};