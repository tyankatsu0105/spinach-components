import 'styled-components'
import { theme } from "../components/styles/theme";
type AppTheme = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}