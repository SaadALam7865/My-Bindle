export interface InstallAppCardDataType {
  title: string;
  description: string;
  animation?: string;
}

export const installApp: InstallAppCardDataType[] = [
  {
    title: "   Download ",
    description: "Open Play Store or App Store",
    animation: "fade-left   ",
  },
  {
    title: "   Install App ",
    description: "The app will install automatically.",
    animation: "fade-down",
  },
  {
    title: " Ready to Use",
    description: "Sign up or log in to start exploring!",
    animation: "fade-right",
  },
];
