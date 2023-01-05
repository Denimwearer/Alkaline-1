
const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className="mainAddButton">
      Add New Item
    </div>
  );
};

export default AddButton;
