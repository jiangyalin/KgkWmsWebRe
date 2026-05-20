import { useMemo } from 'react';
import computeColor from '@shared/utils/computeColor';
import { getColorPalette } from './color';
import CornerTop from './CornerTop';
import CornerBottom from './CornerBottom';

interface LoginBgProps {
  /** 主题颜色 */
  themeColor: string;
  /** 暗夜模式 */
  darkTheme: boolean;
}

export default function LoginBg({ themeColor, darkTheme }: LoginBgProps) {
  const boxBgStyle = useMemo(() => {
    const color = computeColor(themeColor, 80);
    return {
      backgroundColor: computeColor(color, darkTheme ? -10 : 0),
    };
  }, [themeColor, darkTheme]);

  const mergedThemeColor = useMemo(
    () => (darkTheme ? getColorPalette(themeColor, 7) : themeColor),
    [themeColor, darkTheme],
  );

  const lightColor = useMemo(() => getColorPalette(mergedThemeColor, 3), [mergedThemeColor]);
  const darkColor = useMemo(() => getColorPalette(mergedThemeColor, 6), [mergedThemeColor]);

  return (
    <div className="g-login-bg-box" style={boxBgStyle}>
      <div
        className="u-corner-top-gp"
        style={{
          position: 'absolute',
          right: '-300px',
          top: '-900px',
        }}
      >
        <CornerTop startColor={lightColor} endColor={darkColor} />
      </div>

      <div
        className="u-corner-bottom-gp"
        style={{
          position: 'absolute',
          left: '-200px',
          bottom: '-400px',
        }}
      >
        <CornerBottom startColor={darkColor} endColor={lightColor} />
      </div>
    </div>
  );
}
