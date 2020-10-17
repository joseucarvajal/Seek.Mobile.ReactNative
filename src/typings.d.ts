/**
 * react-navigation/NavigationTestUtils is a test module
 * that should only be used for testing
 *
 * this declaration is missing from @types/react-navigation
 */
declare module "react-navigation/NavigationTestUtils" {
    export default NavigationTestUtils as {
      resetInternalState: () => void;
    };
  }
  
  /**
   * Expo sample has no typings
   */
  declare module "@expo/samples" {
    export class ExpoLinksView extends React.Component {}
    export class ExpoConfigView extends React.Component {}
  }
  
  /**
   * Declare file types for babel file import
   */
  declare module "*.png";
  declare module "*.jpg";
  declare module "*.json";
  declare module "*.svg";