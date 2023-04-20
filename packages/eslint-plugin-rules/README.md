# Eslint Plugin Rules

## About

Place for eslint custom rules for Foreman and plugins

## Usage

### Create an eslintrc file
```js
{
  "plugins": ["@theforeman/rules"],
  "rules": {
    "@theforeman/rules/require-ouiaid": "warn",
  }
}
```
`ouiaId` prop is used in automation tests. An example can be found [here](https://github.com/SatelliteQE/airgun/blob/master/airgun/views/cloud_insights.py).

If not specified in the eslintrc file, these components will be checked for an `ouiaId` prop:
```
  "Alert",
  "Breadcrumb",
  "Button",
  "Card",
  "Checkbox",
  "Chip",
  "ChipGroup",
  "ContextSelector",
  "Dropdown",
  "DropdownItem",
  "DropdownSeparator",
  "DropdownToggle",
  "DropdownToggleCheckbox",
  "FormSelect",
  "Menu",
  "Modal",
  "ModalBoxCloseButton",
  "ModalContent",
  "Nav",
  "NavExpandable",
  "NavItem",
  "OptionsMenu",
  "Pagination",
  "Radio",
  "RowWrapper",
  "Select",
  "Switch",
  "TabButton",
  "TabContent",
  "Tabs",
  "Text",
  "TextInput",
  "Title",
  "Toolbar",
  "Table",
  "TableComposable",
  "Tr"
```

You can specify what components you want to check against.
```js
{
  "plugins": ["@theforeman/rules"],
  "rules": {
    "@theforeman/rules/require-ouiaid": [
      "warn",
      "Button",
      "Table",
    ]
  }
```

Here is the list of [OUIA-compliant PatternFly 4 components](https://www.patternfly.org/v4/developer-resources/open-ui-automation/).
