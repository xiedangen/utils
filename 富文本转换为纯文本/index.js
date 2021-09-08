function richTextToPlainText(richTextStr) {
  /*
    参考资料：
    http://cn.voidcc.com/question/p-aewxqezg-cr.html
    https://juejin.cn/post/6962460613725388807
  */
  // 非文本格式直接返回
  if (typeof richTextStr != "string") {
    return richTextStr;
  }

  // 将富文本格式的字符串去除HTML标签以及各种空格以及空格转义字符
  let plainTextStr = richTextStr
    .replace(/<[^>]*>/gi, "")
    .replace(/<\/[^>]*>/gi, "")
    .replace(/&nbsp;|&#160;/gi, "")
    .replace(/\s+/gi, "")
    .trim();

  const ESCAPE_CHARACTERS = {
    nbsp: " ",
    lt: "<",
    gt: ">",
    amp: "&",
    apos: '"',
    ensp: "	 ",
    emsp: " ",
    quot: '"',
    middot: "·",
    brvbar: "¦",
    mdash: "—",
    ndash: "–",
    ge: "≥",
    le: "≤",
    laquo: "«",
    raquo: "»",
    deg: "°",
    bull: "•",
    macr: "¯",
    "#64": "@",
    ldquo: "“",
    rdquo: "”",
    rsquo: "‚",
    lsquo: "‘"
  };

  // 处理HTML转义字符
  function handleEscapeChar(str) {
    return str.replace(
      new RegExp(`&(${Object.keys(ESCAPE_CHARACTERS).join("|")});`, "g"),
      (all, t) => {
        return ESCAPE_CHARACTERS[t];
      }
    );
  }

  plainTextStr = handleEscapeChar(plainTextStr);

  return plainTextStr;
}
