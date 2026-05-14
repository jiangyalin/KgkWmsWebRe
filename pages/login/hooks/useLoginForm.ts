import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLoginForm = () => {
  const [accList] = useState<Option[]>([])

  return {
    accList
  }
}
