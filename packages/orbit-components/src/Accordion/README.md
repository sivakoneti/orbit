# Accordion

To implement Accordion component into your project you'll need to the import the Accordion and the [AccordionSection](#Accordionsection):

```jsx
import Accordion, { AccordionSection } from "@kiwicom/orbit-components/lib/Accordion";
```

After adding import into your project you can use it simply like:

```jsx
<Accordion>
  <AccordionSection>Hello World!</AccordionSection>
</Accordion>
```

## Props

| Name              | Type                                                                              | Optional           | Default | Description                                                                   |
| ----------------- | --------------------------------------------------------------------------------- | ------------------ | ------- | ----------------------------------------------------------------------------- |
| `children`        | `React.ReactNode`                                                                 | :heavy_check_mark: |         | `The content of the Accordion. You can use only AccordionSection`             |
| `expandedSection` | `string \| number`                                                                | :heavy_check_mark: |         | `Optional prop to control which AccordionSection (by id) is expanded`         |
| `loading`         | `boolean`                                                                         | :heavy_check_mark: |         | `If true it will render the Loading component`                                |
| `onExpand`        | `(sectionId: string \| number) => void \| Promise<any>`                           | :heavy_check_mark: |         | `Callback (along with sectionId) that is triggered when section is expanding` |
| `dataTest`        | `string`                                                                          | :heavy_check_mark: |         |                                                                               |
| `spaceAfter`      | `"none" \| "smallest" \| "small" \| "normal" \| "medium" \| "large" \| "largest"` | :heavy_check_mark: |         |                                                                               |

# AccordionSection

## Props

| Name         | Type               | Optional           | Default | Description |
| ------------ | ------------------ | ------------------ | ------- | ----------- |
| `id`         | `string \| number` | :heavy_check_mark: |         |             |
| `children`   | `React.ReactNode`  | :heavy_check_mark: |         |             |
| `actions`    | `React.ReactNode`  | :heavy_check_mark: |         |             |
| `expanded`   | `boolean`          | :heavy_check_mark: |         |             |
| `expandable` | `boolean`          | :heavy_check_mark: |         |             |
| `onExpand`   | `Common.Callback`  | :heavy_check_mark: |         |             |
| `header`     | `React.ReactNode`  | :heavy_check_mark: |         |             |
| `footer`     | `React.ReactNode`  | :heavy_check_mark: |         |             |
| `dataTest`   | `string`           | :heavy_check_mark: |         |             |

### Callback

| Callback   |
| ---------- |
| () => void | Promise<void> |
