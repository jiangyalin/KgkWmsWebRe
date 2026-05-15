/**
 * @description 处理表格粘贴前数据（用于下拉选择器搜索的情况，该情况下阻止了单元格点击事件）临时方案
 * @return {Array<string | number>}
 * */
const pasteBefore = (e: ClipboardEvent): Array<string | number> => {
  const clipdata = e.clipboardData
  if (!clipdata) return []
  const str = clipdata.getData('text/plain')
  const arr = str.split(/\r\n|\r|\n/).filter((item: string) => item)
  return arr
}

export default pasteBefore
