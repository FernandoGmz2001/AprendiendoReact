import './Square.css'


function Square({ children, updateBoard, index, isSelected }) {

  const squareStyle = `square ${isSelected ? 'selected' : ''}`

  const handleClick = () => {
    updateBoard()
  }
    
  return <div onClick={handleClick} className={squareStyle}>{children}</div>;
}

export default Square;