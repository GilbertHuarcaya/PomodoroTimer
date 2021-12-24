import PropTypes from 'prop-types';
import { useMemo, createContext, useContext, useState } from 'react';

const Completed = createContext();

export const CompletedProvider = ({ children, value }) => {
  const [completed, setCompleted] = useState(value);

  const completedsToPass = useMemo(() => ({ completed, setCompleted }));

  return (
    <Completed.Provider value={completedsToPass}>{children}</Completed.Provider>
  );
};

export const useStateCompleted = () => {
  const context = useContext(Completed);

  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};

CompletedProvider.propTypes = {
  value: PropTypes.objectOf(PropTypes.number),
  children: PropTypes.node.isRequired,
};

CompletedProvider.defaultProps = {
  value: false,
};
