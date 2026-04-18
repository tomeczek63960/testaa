import StoryblokProvider from "./components/StoryblokProvider";

// eslint-disable-next-line
export default function RootLayout({ children }: any) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}