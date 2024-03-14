import { Text, Stack } from "@shopify/retail-ui-extensions-react";
export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Stack direction="vertical">
      <Text variant={"headingLarge"}>{title}</Text>
      <Text color="TextSubdued" variant={"body"}>
        {description}
      </Text>
    </Stack>
  );
}
