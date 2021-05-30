const LetterAlphabet = ({ children, ...props }) => {
  const { title, className } = props;
  return (
    <div className={className}>
      <h3 className='title letter__title'>{title}</h3>
      {children}
    </div>
  );
};

export default LetterAlphabet;
