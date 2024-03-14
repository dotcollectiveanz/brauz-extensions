import { Text, Stack } from "@shopify/retail-ui-extensions-react";
export default function BottomPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return (
      <Stack
        paddingVertical="ExtraLarge"
        paddingHorizontal="ExtraExtraLarge"
        direction="vertical"
      >
        {children}
      </Stack>
    );
  }
}
