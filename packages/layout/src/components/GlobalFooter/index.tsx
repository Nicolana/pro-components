import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import type { WithFalse } from '../../typings';

export type GlobalFooterProps = {
  links?: WithFalse<
    {
      key?: string;
      title: React.ReactNode;
      href: string;
      blankTarget?: boolean;
    }[]
  >;
  copyright?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
};

const GlobalFooter = ({ className, prefixCls, links, copyright, style }: GlobalFooterProps) => {
  const context = useContext(ConfigProvider.ConfigContext);
  const baseClassName = context.getPrefixCls(prefixCls || 'pro-global-footer');

  if (
    (links == null || links === false || (Array.isArray(links) && links.length === 0)) &&
    (copyright == null || copyright === false)
  ) {
    return null;
  }

  return (
    <div className={classNames(baseClassName, className)} style={style}>
      {links && (
        <div className={`${baseClassName}-links`}>
          {links.map((link) => (
            <a
              key={link.key}
              title={link.key}
              target={link.blankTarget ? '_blank' : '_self'}
              href={link.href}
              rel="noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
      {copyright && <div className={`${baseClassName}-copyright`}>{copyright}</div>}
    </div>
  );
};

export { GlobalFooter };
