const getProp = require('jsx-ast-utils/getProp');

module.exports = {
  create(context) {
    const options = context.options.length
      ? context.options
      : [
          'Alert',
          'Breadcrumb',
          'Button',
          'Card',
          'Checkbox',
          'Chip',
          'ChipGroup',
          'ContextSelector',
          'Dropdown',
          'DropdownItem',
          'DropdownSeparator',
          'DropdownToggle',
          'DropdownToggleCheckbox',
          'FormSelect',
          'Menu',
          'Modal',
          'ModalBoxCloseButton',
          'ModalContent',
          'Nav',
          'NavExpandable',
          'NavItem',
          'OptionsMenu',
          'Pagination',
          'Radio',
          'RowWrapper',
          'Select',
          'Switch',
          'TabButton',
          'TabContent',
          'Tabs',
          'Text',
          'TextInput',
          'Title',
          'Toolbar',
          'Table',
          'TableComposable',
          'Tr',
        ];

    return {
      JSXElement(node) {
        if (!options.includes(node.openingElement.name.name)) {
          return;
        }

        const ouiaIdProp = getProp(node.openingElement.attributes, 'ouiaId');
        if (!ouiaIdProp) {
          context.report({ node, message: 'ouiaId property is missing' });
        }
      },
    };
  },
};
