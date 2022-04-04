import styled from 'styled-components';

interface TypographyProps {
  primary?: boolean;
  secondary?: boolean;
  size?: string;
}
export const Typography = styled.div`
  color: ${(props: TypographyProps) => {
    if (props.primary) return '#35d8ac';
    return '#979cb0';
  }};
  font-weight: 700;
  ${(props: TypographyProps) => {
    if (props.size === 'md') {
      return `
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 0.64;
          `;
    }
    if (props.size === 'lg') {
      return `
          font-weight: 700;
          font-size: 35px;
          letter-spacing: 0.64;
          `;
    }
  }}
`;
