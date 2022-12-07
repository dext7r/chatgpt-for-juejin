/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-12-07 11:13:36
 * @lastModified  2022-12-07 11:13:44
 * Copyright © www.h7ml.cn All rights reserved
 */
export { };

declare global {
  interface Window {
    find?: any;
  }

  interface HTMLElement {
    createTextRange?: () => Range;
  }

  interface ChildNode {
    data?: any;
    splitText?: any;
    length?: any;
    deleteData?: any;
  }

  interface Range {
    findText?: any;
    pasteHTML?: any;
  }
}