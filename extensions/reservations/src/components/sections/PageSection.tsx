import { Text, Stack } from "@shopify/retail-ui-extensions-react";
export default function PageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return (
      <Stack direction="vertical" paddingHorizontal="ExtraExtraLarge">
        {children}
      </Stack>
    );
  }
}
