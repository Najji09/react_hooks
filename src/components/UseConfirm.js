const useConfirm = (message, onConfirm, onRejection) => {
  if (!onConfirm || typeof onConfirm !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onRejection();
    }
  };
  return confirmAction;
};

const UseConfirm = () => {
  const deleteWorld = () => console.log('Deleting the world...');
  const abort = () => console.log('aborted');
  const confirmDelete = useConfirm('Are you sure?', deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirm;
