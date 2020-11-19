import { ScrollRef } from 'common/Types';

export interface InfoSectionProps {
  show?: boolean;
  header?: string;
  content?: React.ComponentClass | React.FunctionComponent | string | JSX.Element;
  children?: React.ComponentClass | React.FunctionComponent | JSX.Element | React.ComponentClass[] | React.StatelessComponent[] | JSX.Element[];
  showBottomMargin?: boolean;
  classNameRef?: string;
  scrollRef?: ScrollRef;
}
