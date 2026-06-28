import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.axlhnbi.finflow',
  appName: 'RinciUang',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000, 
      launchAutoHide: false,    
      backgroundColor: "#ffffff", 
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    }
  }
};

export default config;
