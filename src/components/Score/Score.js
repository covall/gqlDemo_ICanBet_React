import styled from 'styled-components'

const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.large ? 50 : 22}px;
  height: ${props => props.large ? 42 : 19}px;
  font-size: ${props => props.large ? 24 : 16}px;
  font-weight: ${props => props.large ? 400 : 700};
  line-height: 0;
  background-color: ${props => props.white ? '#fff' : '#000'};
  color: ${props => props.white ? '#000' : '#fff'};
  border-style: solid;
  border-color: #000;
  border-width: ${props => props.large ? 2 : 1}px;
  border-radius: ${props => props.large ? 6 : 3}px;
  border-top-left-radius: ${props => props.right && 0};
  border-bottom-left-radius: ${props => props.right && 0};
  border-top-right-radius: ${props => props.left && 0};
  border-bottom-right-radius: ${props => props.left && 0};
`

export default Score
