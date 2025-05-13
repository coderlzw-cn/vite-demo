import { useCallback, useState } from 'react';

interface UrlValidationResult {
  isValid: boolean;  // URL是否有效
  error: string | null;  // 错误信息
}

/**
 * URL验证的自定义Hook
 * @param initialUrl 可选的初始URL进行验证
 * @returns [validateUrl, validationResult] 返回一个验证URL的函数和当前的验证结果
 */
export function useUrlValidation(initialUrl?: string): [
  (url: string) => void,
  UrlValidationResult
] {
  // 验证结果状态
  const [validationResult, setValidationResult] = useState<UrlValidationResult>({
    isValid: initialUrl ? isValidUrl(initialUrl) : true,
    error: initialUrl && !isValidUrl(initialUrl) ? 'URL格式无效' : null
  });

  // URL验证函数
  const validateUrl = useCallback((url: string) => {
    if (!url) {
      setValidationResult({
        isValid: false,
        error: 'URL不能为空'
      });
      return;
    }

    if (!isValidUrl(url)) {
      setValidationResult({
        isValid: false,
        error: 'URL格式无效,请输入有效的URL(例如: https://example.com)'
      });
      return;
    }

    setValidationResult({
      isValid: true,
      error: null
    });
  }, []);

  return [validateUrl, validationResult];
}

/**
 * 验证字符串是否为有效的URL
 * @param url 要验证的URL字符串
 * @returns 返回布尔值表示URL是否有效
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
} 