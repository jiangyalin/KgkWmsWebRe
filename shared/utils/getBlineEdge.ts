import api from '@/api'
// 查询仓库是否线边仓
const getBlineEdge = async (Code: string = '') => {
  if (!Code) return false
  const res = await api.warehouse.postWarehousePage({ keyWord: Code })
  const { data } = res
  const bLineEdge = data.find(item => item.Code === Code)?.BLineEdge || false
  return !bLineEdge
}

export default getBlineEdge
