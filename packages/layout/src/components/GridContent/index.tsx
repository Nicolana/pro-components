import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import type { CSSProperties } from 'react';
import React, { useContext } from 'react';
import type { PureSettings } from '../../defaultSettings';
import { RouteContext } from '../../RouteContext';

type GridContentProps = {
  contentWidth?: PureSettings['contentWidth'];
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  prefixCls?: string;
};

/**
 * This component can support contentWidth so you don't need to calculate the width
 * contentWidth=Fixed, width will is 1200
 *
 * @param props
 */
const GridContent: React.FC<GridContentProps> = (props) => {
  const value = useContext(RouteContext);
  const { children, contentWidth: propsContentWidth, className: propsClassName, style } = props;

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = props.prefixCls || getPrefixCls('pro');
  const contentWidth = propsContentWidth || value.contentWidth;
  const className = `${prefixCls}-grid-content`;
  const isWide = contentWidth === 'Fixed';

  return (
    <div
      className={classNames(className, propsClassName, {
        wide: isWide,
      })}
      style={style}
    >
      <div className={`${prefixCls}-grid-content-children`}>{children}</div>
    </div>
  );
};

export { GridContent };
