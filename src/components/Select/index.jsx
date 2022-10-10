/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from 'react';

import Select, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import customStyles from './customStyles';
import { ThemesContext } from 'themes/ThemeContextProvider';
import { withTranslation } from 'react-i18next';

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    const { t } = this.props;
    const { theme } = this.context;
    let { isBorder, plColor, async, placeholder, arrowColor } = this.props;
    if (theme == 'dark') {
      plColor = '#bfc9f7';
    }
    let styles = customStyles(isBorder, plColor, arrowColor);

    if (async) {
      return (
        <AsyncSelect
          {...this.props}
          placeholder={placeholder ?? t('txt_select...')}
          styles={styles}
        />
      );
    }
    const { ValueContainer, Placeholder } = components;
    const CustomValueContainer = ({ children, ...props }) => {
      return (
        <ValueContainer {...props} className="valueContainerCustom px-16">
          {!props.hasValue && (
            <Placeholder {...props} isFocused={props.isFocused}>
              {props.selectProps.placeholder}
            </Placeholder>
          )}

          {React.Children.map(children, (child) =>
            child && child.type !== Placeholder ? child : null
          )}
        </ValueContainer>
      );
    };

    return (
      <Select
        {...this.props}
        components={{
          ValueContainer: CustomValueContainer,
        }}
        placeholder={placeholder ?? t('txt_select...')}
        styles={styles}
      />
    );
  }
}

SelectComponent.defaultProps = {
  async: false,
  isMulti: false,
};
SelectComponent.contextType = ThemesContext;
export default withTranslation('common')(SelectComponent);
