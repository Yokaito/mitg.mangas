import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 119px;
  max-width: 229px;
  gap: 4px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`

export const Badge = styled.span`
  padding: 3px;
  background: gray;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: white;
  z-index: 3;
  box-shadow: #959da533 0 8px 24px;
`

export const BadgesWrapper = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const CardImageWrapper = styled.div`
  box-shadow: #959da533 0 8px 24px;
`

export const CardHeader = styled.header`
  background: gray;
  padding: 6px;
  cursor: pointer;
  box-shadow: #959da533 0 8px 24px;
`

export const CardTitle = styled.h1`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: white;
`
